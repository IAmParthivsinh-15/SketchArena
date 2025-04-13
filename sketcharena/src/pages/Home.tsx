import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import AvatarModal from "../components/AvatarModal";
import RoomSettings from "../components/RoomSettings";
import JoinPublicRoom from "../components/JoinPublicRoom";
import JoinPrivateRoom from "../components/JoinPrivateRoom";

const Home = () => {
  const [showAvatarModal, setShowAvatarModal] = useState<boolean>(false);
  const [roomSettings, setRoomSettings] = useState<boolean>(false);
  const [joinPublicRoom, setJoinPublicRoom] = useState<boolean>(false);
  const [joinPrivateRoom, setJoinPrivateRoom] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />

      {/* Intro */}
      <header className="text-center mt-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-purple-500 mb-4"
        >
          Unleash Your Inner Artist 🎨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mx-auto"
        >
          Join fun drawing battles with friends or strangers in real-time.
        </motion.p>
      </header>

      <section className="mt-12 px-4 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Choose Avatar */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAvatarModal(true)}
            className="rounded-2xl p-6 bg-gray-800 shadow-lg border-l-4 border-purple-500 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-white">Choose Avatar</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Pick your character to represent you.
            </p>
          </motion.div>

          {/* Join Public Room */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setJoinPublicRoom(true)}
            className="rounded-2xl p-6 bg-gray-800 shadow-lg border-l-4 border-indigo-500 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-white">
              Join Public Room
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Jump into a room with random players.
            </p>
          </motion.div>

          {/* Join Private Room */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setJoinPrivateRoom(true)}
            className="rounded-2xl p-6 bg-gray-800 shadow-lg border-l-4 border-blue-500 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-white">
              Join Private Room
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Use a code to join your friend’s room.
            </p>
          </motion.div>

          {/* Create Private Room */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl p-6 bg-gray-800 shadow-lg border-l-4 border-violet-500 cursor-pointer transition"
            onClick={() => setRoomSettings(true)}
          >
            <h3 className="text-xl font-semibold text-white">Create Room</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Start your own game room.
            </p>
          </motion.div>
        </div>
      </section>

      {showAvatarModal && (
        <AvatarModal onClose={() => setShowAvatarModal(false)} />
      )}
      {roomSettings && <RoomSettings onClose={() => setRoomSettings(false)} />}
      {joinPublicRoom && (
        <JoinPublicRoom onClose={() => setJoinPublicRoom(false)} />
      )}
      {joinPrivateRoom && (
        <JoinPrivateRoom onClose={() => setJoinPrivateRoom(false)} />
      )}
    </div>
  );
};

export default Home;
