import mongoose from "mongoose";

const roomMessagesSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const RoomMessages = mongoose.model("RoomMessages", roomMessagesSchema);
export default RoomMessages;
