import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./components/Card";
import SideSection from "./components/SideSection";
import CreateEvent from "./components/CreateEvent";
import Event from "./pages/Event";
import JoinEvent from "./components/JoinEvent";
import CreateEventPage from "./pages/CreateEventPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Verification />} /> */}
          <Route path="/" element={<CreateEventPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
