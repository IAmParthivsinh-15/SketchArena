import crypto from "crypto";
import Room from "../models/rooms.js";
import Player from "../models/players.js";
import redisClient from "../config/redis.config.js";

export const createRoom = async (req, res) => {
  try {
    const {
      username,
      isPrivate,
      players,
      roundTime,
      maxRounds,
      wordCount,
      hints,
    } = req.body;

    if (
      !username ||
      !players ||
      !roundTime ||
      !maxRounds ||
      !wordCount ||
      !hints
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPlayer = new Player({
      name: username,
      isHost: true,
      isReady: true,
    });

    await newPlayer.save();

    const newRoom = new Room({
      isPrivate,
      players: [newPlayer._id],
      maxPlayers: players,
      roundTime,
      maxRounds,
      wordCount,
      hints,
    });

    await newRoom.save();

    newPlayer.roomId = newRoom._id;
    await newPlayer.save();

    const redisRoomData = {
      roomId: newRoom._id.toString(),
      isPrivate,
      players: [newPlayer._id.toString()],
      maxPlayers: players,
      roundTime,
      maxRounds,
      wordCount,
      hints,
    };

    if (isPrivate) {
      await redisClient.setex(
        `privateRoom:${newRoom._id.toString()}`,
        3600, // TTL = 1 hour
        JSON.stringify(redisRoomData)
      );
    } else {
      await redisClient.setex(
        `publicRoom:${newRoom._id.toString()}`,
        3600, // TTL = 1 hour
        JSON.stringify(redisRoomData)
      );

      await redisClient.lpush("publicRooms", newRoom._id.toString());
    }

    res.status(201).json({
      roomId: newRoom._id,
      player: {
        id: newPlayer._id,
        name: newPlayer.name,
        isHost: newPlayer.isHost,
        roomId: newPlayer.roomId,
      },
    });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getRoomsFromCache = async () => {
  const roomIds = await redisClient.lrange("publicRooms", 0, -1);

  if (roomIds && roomIds.length > 0) {
    const pipeline = redisClient.pipeline();

    roomIds.forEach((id) => {
      pipeline.get(`publicRoom:${id}`);
    });

    const roomData = await pipeline.exec();

    const rooms = roomData
      .map(([err, data]) => (err ? null : JSON.parse(data)))
      .filter(Boolean);

    return rooms;
  }

  const rooms = await Room.find({ isPrivate: false });

  const pipeline = redisClient.pipeline();
  for (const room of rooms) {
    const roomId = room._id.toString();
    pipeline.setex(`publicRoom:${roomId}`, 60, JSON.stringify(room));
    pipeline.rpush("publicRooms", roomId);
  }
  await pipeline.exec();

  return rooms;
};

export const joinPublicRoom = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const rooms = await getRoomsFromCache();

    if (rooms.length === 0) {
      return res.status(404).json({ message: "No public rooms available" });
    }

    const randomRoom = crypto.randomInt(0, rooms.length - 1);
    const room = rooms[randomRoom];

    const newPlayer = new Player({
      name: username,
      roomId: room._id,
    });

    await newPlayer.save();

    room.players.push(newPlayer._id);
    await room.save();

    await redisClient.setex(`room:${room._id}`, 120, JSON.stringify(room));

    res.status(200).json({
      roomId: room._id,
      player: {
        id: newPlayer._id,
        name: newPlayer.name,
        isHost: false,
        roomId: newPlayer.roomId,
      },
    });
  } catch (error) {
    console.error("Error joining public room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const joinPrivateRoom = async (req, res) => {
  try {
    const { username, roomId } = req.body;

    console.log("Joining private room with ID:", roomId);
    console.log("Username:", username);

    if (!username || !roomId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let room;
    const cachedRoom = await redisClient.get(`room:${roomId}`);

    if (cachedRoom) {
      const parsedRoom = JSON.parse(cachedRoom);

      room = await Room.findById(parsedRoom._id);

      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
    } else {
      room = await Room.findById(roomId);

      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }

      await redisClient.setex(`room:${roomId}`, 60, JSON.stringify(room));
    }

    if (!room.isPrivate) {
      return res.status(403).json({ message: "Room is not private" });
    }

    const isUsernameTaken = await Player.findOne({
      roomId: room._id,
      name: username,
    });

    if (isUsernameTaken) {
      return res.status(403).json({
        message: "Player With This Username already in this room",
      });
    }

    if (room.players.length >= room.maxPlayers) {
      return res.status(403).json({ message: "Room is full" });
    }

    const newPlayer = new Player({
      name: username,
      roomId: room._id,
    });
    await newPlayer.save();

    room.players.push(newPlayer._id);
    await room.save();

    await redisClient.setex(`room:${roomId}`, 120, JSON.stringify(room));

    res.status(200).json({
      roomId: room._id,
      player: {
        id: newPlayer._id,
        name: newPlayer.name,
        roomId: newPlayer.roomId,
      },
    });
  } catch (error) {
    console.error("Error joining private room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const leaveRoom = async (req, res) => {
  try {
    const { username, roomId } = req.body;
    if (!username || !roomId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Remove player from MongoDB
    room.players = room.players.filter((player) => player.name !== username);
    await room.save();

    const player = await Player.findOneAndDelete({
      name: username,
      roomId: roomId,
    });

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    await redisClient.setex(`room:${roomId}`, 60, JSON.stringify(room));

    res.status(200).json({ message: "Player left the room" });
  } catch (error) {
    console.error("Error leaving room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
