import Room from "../models/rooms.js";
import Player from "../models/players.js";

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

    // Create a new player
    const newPlayer = new Player({
      name: username,
      isHost: true,
      isReady: true,
    });

    await newPlayer.save();

    // Create a new room
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

    // Add the room ID to the player's document
    newPlayer.roomId = newRoom._id;
    await newPlayer.save();

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
