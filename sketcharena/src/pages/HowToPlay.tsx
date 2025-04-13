import NavBar from "../components/NavBar";

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <NavBar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-yellow-400">
          How to Play <span className="text-white">🎮</span>
        </h1>

        <div className="space-y-10">
          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">1️⃣ Create or Join a Room</h2>
            <p className="text-gray-300">
              Start a new private or public room, or join your friend's room using a Room ID.
            </p>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">2️⃣ Wait for All Players to Ready Up</h2>
            <p className="text-gray-300">
              Each player must click “Ready” before the game starts. Minimum 2 players are required.
            </p>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">3️⃣ Start Drawing</h2>
            <p className="text-gray-300">
              One player is randomly selected as the drawer and given a secret word. They’ll draw it on the canvas – but no letters or numbers allowed!
            </p>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">4️⃣ Guess the Word</h2>
            <p className="text-gray-300">
              Others guess the word in real-time using the chat box. Points are awarded based on speed and accuracy.
            </p>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">5️⃣ Keep Going!</h2>
            <p className="text-gray-300">
              Rounds rotate so everyone gets a chance to draw. The player with the highest total score at the end wins the game!
            </p>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-purple-300">💡 Scoring System</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Fastest correct guesser earns max points</li>
              <li>Drawer earns points if others guess correctly</li>
              <li>No penalty for incorrect guesses, so keep trying!</li>
            </ul>
          </section>

          <section className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-300">🎯 Tips & Fair Play</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use headphones for clearer communication during video chat</li>
              <li>Don't cheat by giving hints – it ruins the fun!</li>
              <li>Stay creative and draw with your best effort</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm italic">
          💡 SketchArena is all about creativity, fun, and fair play. Let's draw, guess, and laugh together!
        </div>
      </div>
    </div>
  );
}
