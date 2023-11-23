import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Verification />} /> */}
          <Route path="/" element={<MainPage />} />
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
