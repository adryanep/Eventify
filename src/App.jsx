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
import NavMvp from "./components/NavMvp";
import HeroMvp from "./components/HeroMvp";
import Details from "./pages/Details";
import Panitia from "./pages/Panitia";
import TambahPanitia from "./pages/TambahPanitia";
import TambahDivisi from "./pages/TambahDivisi";
import TambahAnggota from "./pages/TambahAnggota";
import CardAgenda from "./components/CardAgenda";
import Agenda from "./pages/Agenda";
import TambahAgenda from "./pages/TambahAgenda";
import TambahAgenda2 from "./pages/TambahAgenda2";
import TambahAgenda3 from "./pages/TambahAgenda3";
import TambahAnggaran from "./pages/TambahAnggaran";
import Anggaran from "./pages/Anggaran";
import TambahData from "./pages/TambahData";
import TambahChecklist from "./pages/TambahChecklist";
import DetailCheklist from "./pages/DetailCheklist";
import Cheklist from "./pages/Cheklist";
import Dial from "./pages/Dial";
import KodeVerifikasi from "./pages/KodeVerifikasi";
import Mail from "./pages/Mail";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/createevent" element={<CreateEventPage />} />
          <Route path="/detailevent" element={<Details />} />
          <Route path="/fitur_panitia" element={<Panitia />} />
          <Route path="/tambahpanitia" element={<TambahPanitia />} />
          <Route path="/tambahdivisi" element={<TambahDivisi />} />
          <Route path="/tambahanggota" element={<TambahAnggota />} />
          <Route path="/fitur_agenda" element={<Agenda />} />
          <Route path="/fitur_cheklist" element={<Cheklist />} />
          <Route path="/fitur_anggaran" element={<Anggaran />} />
          <Route path="/dial" element={<Dial />} />
          <Route path="/kodeverifikasi" element={<KodeVerifikasi />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/tambahagenda" element={<TambahAgenda />} />
          <Route path="/tambahagenda2" element={<TambahAgenda2 />} />
          <Route path="/tambahagenda3" element={<TambahAgenda3 />} />
          <Route path="/tambahanggaran" element={<TambahAnggaran />} />
          <Route path="/detailcheklist" element={<DetailCheklist />} />
          <Route path="/tambahcheklist" element={<TambahChecklist />} />
          <Route path="/tambahdata" element={<TambahData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
