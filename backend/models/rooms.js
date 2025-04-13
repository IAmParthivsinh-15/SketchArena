import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    isPrivate: {
      type: Boolean,
      default: false,
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    gameStarted: {
      type: Boolean,
      default: false,
    },
    gameEnded: {
      type: Boolean,
      default: false,
    },
    currentRound: {
      type: Number,
      default: 0,
    },
    currentWord: {
      type: String,
      default: "",
    },
    currentDrawer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    roundTime: {
      type: Number,
      default: 60,
    },
    maxRounds: {
      type: Number,
      default: 10,
    },
    maxPlayers: {
      type: Number,
      default: 20,
    },
    wordCount: {
      type: Number,
      default: 3,
    },
    words: [
      {
        type: String,
      },
    ],
    hints: {
      type: Number,
      default: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
