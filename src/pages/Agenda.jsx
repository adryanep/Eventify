import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HeroMvp from "../components/HeroMvp";
import NavMvp from "../components/NavMvp";
import CardAgenda from "../components/CardAgenda";
import Footer from "../components/Footer";

const Agenda = () => {
  let card = [];
  for (let i = 0; i < 3; i++) {
    card.push(<CardAgenda />);
  }
  return (
    <>
      <Navbar />
      <div className="mx-[10rem]">
        <div className="my-[2rem]">
          <Link to={"/homepage"} className="text-black font-bold text-[2rem]">
            &lt; Pekan Olahraga Mahasiswa
          </Link>
        </div>
        <div className="mx-[0]">
          <HeroMvp />
        </div>
        <div className="flex my-[3rem]">
          <div>
            <NavMvp />
          </div>

          <div className="mx-[9rem]">{card}</div>
        </div>
        <Link
          to="/tambahagenda"
          className="bg-[#1A73E8] rounded-md p-3 flex text-white justify-end ml-[61rem] mr-[5rem] mb-[4rem]"
        >
          Tambah Agenda
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Agenda;
