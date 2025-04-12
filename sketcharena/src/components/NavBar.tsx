import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <Link to="/" className="text-2xl font-bold text-purple-500">SketchArena</Link>
      <div className="space-x-6 text-gray-300 font-medium">
        <Link to="/about" className="hover:text-purple-400 transition">About</Link>
        <Link to="/howtoplay" className="hover:text-purple-400 transition">How To Play?</Link>
      </div>
    </nav>
  );
};

export default NavBar;
