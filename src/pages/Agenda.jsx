import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HeroMvp from "../components/HeroMvp";
import NavMvp from "../components/NavMvp";
import CardAgenda from "../components/CardAgenda";
import Footer from "../components/Footer";

const Agenda = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[10rem]">
        <div className="my-[2rem]">
          <Link to={"/homepage"} className="text-black font-bold text-[2rem]">
            &lt; Pekan Olahraga Mahasiswa
          </Link>
        </div>
        <div className="flex my-[3rem]">
          <div>
            <NavMvp />
          </div>

          <div className="mx-[5rem]">
            <CardAgenda />
          </div>
        </div>
        <Link
          to="/tambahagenda2"
          className="bg-[#1A73E8] rounded-md p-3 flex text-white justify-end ml-[975px] mr-[4rem] mb-[5rem]"
        >
          Tambah Agenda
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Agenda;
