import { randomWords } from "../utils/words.js";
import Room from "../models/rooms.js";

export const genWords = async (req, res) => {
  try {
    const { wordCount, roomId } = req.body;

    if (!wordCount || !roomId) {
      return res
        .status(400)
        .json({ error: "wordCount and roomId are required" });
    }

    if (typeof wordCount !== "number" || wordCount <= 0) {
      return res
        .status(400)
        .json({ error: "wordCount must be a positive number" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    if (room.players.length < 2) {
      return res
        .status(400)
        .json({ error: "Not enough players to start the game" });
    }

    const words = randomWords(wordCount);

    room.words.push(...words);

    res.status(201).json({
      words,
      roomId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
