import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    socketId: {
      type: String,
    },
    roomId: {
      type: String,
    },
    isHost: {
      type: Boolean,
      default: false,
    },
    isReady: {
      type: Boolean,
      default: false,
    },
    isDrawing: {
      type: Boolean,
      default: false,
    },
    isDisconnected: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
    isWinner: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playerSchema);
export default Player;
