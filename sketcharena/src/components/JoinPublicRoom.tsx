import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const JoinPublicRoom = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/rooms/join-public",
        JSON.stringify({
          username,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const roomId = res.data.roomId;

        const avatar = localStorage.getItem("avatar");
        if (!avatar) {
          localStorage.setItem(
            "avatar",
            "https://assets.grok.com/users/7409f20a-2b6a-47f5-a3dd-a0ca47c23d40/generated/b4dzc07Wtj4A7wgi/image.jpg"
          );
        }

        localStorage.setItem("roomId", roomId);

        toast.success("Room Joined successfully!");
        navigate(`/gamedashboard/${roomId}`);
      }
    } catch (err: any) {
      toast.error("Room Joining Failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (field === "username") {
      setUsername(value);
    }
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
              value={username}
              onChange={(e) => handleChange("username", e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
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

export default JoinPublicRoom;
