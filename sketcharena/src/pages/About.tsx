import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <NavBar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-purple-400">
          About <span className="text-white">SketchArena</span>
        </h1>

        <p className="text-lg leading-relaxed text-gray-300 text-center mb-12">
          🎨 <strong className="text-white">SketchArena</strong> is a fast-paced multiplayer drawing &
          guessing game where creativity meets competition. One player draws a word, and others race against the clock to guess it!
        </p>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Why SketchArena?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base">
            <li>⚡ Real-time gameplay with friends or global players</li>
            <li>🎨 Interactive canvas with color selection and tools</li>
            <li>🧠 Fun and challenging word prompts</li>
            <li>💬 Live chat and optional video interaction</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Built With 💻</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base">
            <li>⚛️ React + Tailwind CSS</li>
            <li>🧩 Node.js, Express, MongoDB</li>
            <li>⚡ Redis for fast in-game data</li>
            <li>🔌 Socket.IO for real-time interactions</li>
            <li>🎥 ZegoCloud for seamless video calls</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center mt-10">
          <p className="text-lg text-gray-300 mb-4">
            👋 Hi, I’m <span className="font-semibold text-white">Parthivsinh Vaghela</span>, creator of <strong className="text-purple-400">SketchArena</strong>.
          </p>
          <p className="text-base text-gray-400 mb-2">
            Check out the source code on{" "}
            <a
              href="https://github.com/IAmParthivsinh-15/SketchArena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-base text-gray-400">
            Contributions are welcome — let’s build something great together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
