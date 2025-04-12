import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import GameDashBoard from "./pages/GameDashBoard";
import InviteRedirect from "./components/InviteRedirect";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/gamedashboard/:roomid" element={<GameDashBoard />} />
        <Route path="/invite/:roomId" element={<InviteRedirect />} />
        </Routes>
    </Router>
  );
};
