import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const RoomSettings = ({ onClose }: { onClose: () => void }) => {
  interface RoomData {
    username: string;
    isPrivate: boolean;
    players: number;
    roundTime: number;
    maxRounds: number;
    wordCount: number;
    hints: number;
  }

  const [roomData, setRoomData] = useState<RoomData>({
    username: "",
    isPrivate: false,
    players: 2,
    roundTime: 60,
    maxRounds: 5,
    wordCount: 3,
    hints: 3,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/rooms/create", roomData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        const roomId = res.data.roomId;

        toast.success("Room created successfully!");

        //  Show invite link in toast
        const inviteLink = `${window.location.origin}/invite/${roomId}`;
        localStorage.setItem("invite-link", inviteLink);
        navigate(`/gamedashboard/${roomId}`);
      }
    } catch (err: any) {
      toast.error("Room creation failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof RoomData, value: any) => {
    setRoomData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Toaster position="top-right" />
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-lg text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">
          Room Settings
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Username */}
          <div>
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              value={roomData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block mb-2 font-semibold">Type of Room:</label>
            <div className="flex gap-6 justify-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="roomType"
                  checked={!roomData.isPrivate}
                  onChange={() => handleChange("isPrivate", false)}
                  className="form-radio text-purple-500"
                />
                Public
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="roomType"
                  checked={roomData.isPrivate}
                  onChange={() => handleChange("isPrivate", true)}
                  className="form-radio text-purple-500"
                />
                Private
              </label>
            </div>
          </div>

          {/* Players */}
          <div>
            <label className="block mb-1">Players:</label>
            <input
              type="number"
              min="2"
              max="20"
              value={roomData.players}
              onChange={(e) => handleChange("players", Number(e.target.value))}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Draw Time */}
          <div>
            <label className="block mb-1">Draw Time (sec):</label>
            <input
              type="number"
              min="80"
              max="120"
              value={roomData.roundTime}
              onChange={(e) =>
                handleChange("roundTime", Number(e.target.value))
              }
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Rounds */}
          <div>
            <label className="block mb-1">Rounds:</label>
            <input
              type="number"
              min="3"
              max="10"
              value={roomData.maxRounds}
              onChange={(e) =>
                handleChange("maxRounds", Number(e.target.value))
              }
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Word Count */}
          <div>
            <label className="block mb-1">Word Count:</label>
            <input
              type="number"
              min="3"
              max="10"
              value={roomData.wordCount}
              onChange={(e) =>
                handleChange("wordCount", Number(e.target.value))
              }
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Hints */}
          <div>
            <label className="block mb-1">Hints:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={roomData.hints}
              onChange={(e) => handleChange("hints", Number(e.target.value))}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white font-semibold transition"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
            disabled={loading}
          >
            {loading ? "Creating..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomSettings;
