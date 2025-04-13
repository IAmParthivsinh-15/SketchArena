import { useState } from "react";
import Canvas from "../components/Canvas";
import ChatWindow from "../components/ChatWindow";
import VideoWindow from "../components/VideoWindow";
import useRoomStore from "../store/roomStore";

const GameDashBoard = () => {
  const [startPresses, setStartPresses] = useState<boolean>(false);

  const { roomSettings, user, inviteLink, roomId } = useRoomStore();

  console.log("roomSettings", roomSettings);
  console.log("user", user);
  console.log("inviteLink", inviteLink);
  console.log("roomId", roomId);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full p-4">
        <VideoWindow />
      </div>

      <div className="grid grid-cols-12 gap-4 px-4">
        <div className="col-span-12 lg:col-span-9 h-[calc(100vh-300px)]">
          <Canvas />
        </div>

        <div className="col-span-12 lg:col-span-3 h-[calc(100vh-300px)]">
          <ChatWindow />
        </div>
      </div>

      {startPresses ? (
        <div className="flex justify-center py-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300 ease-in-out"
            onClick={() => setStartPresses(!startPresses)}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="flex justify-center py-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300 ease-in-out"
            onClick={() => setStartPresses(!startPresses)}
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
};

export default GameDashBoard;
