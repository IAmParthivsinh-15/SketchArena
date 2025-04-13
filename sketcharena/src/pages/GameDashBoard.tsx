import Canvas from "../components/Canvas";
import ChatWindow from "../components/ChatWindow";
import VideoWindow from "../components/VideoWindow";

const GameDashBoard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full p-4">
        <VideoWindow />
      </div>

      {/* Main content area with fixed 70-30 split */}
      <div className="grid grid-cols-12 gap-4 px-4">
        {/* Canvas taking 70% (8 columns) - Always visible */}
        <div className="col-span-12 lg:col-span-9 h-[calc(100vh-300px)]">
          <Canvas />
        </div>

        {/* Chat taking 30% (4 columns) - Collapsible */}
        <div className="col-span-12 lg:col-span-3 h-[calc(100vh-300px)]">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default GameDashBoard;
