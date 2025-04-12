import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    messages: [
      {
        senderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Player",
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ChatHistory = mongoose.model("ChatHistory", chatHistorySchema);
export default ChatHistory;
