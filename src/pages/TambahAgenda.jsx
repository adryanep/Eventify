import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CardAgenda from "../components/CardAgenda";

const TambahAgenda = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <div className="mx-[10rem]">
            <div className="my-[2rem]">
              <Link
                to={"/fitur_agenda"}
                className="text-black font-bold text-[2rem]"
              >
                &lt; Tambah Panitia
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid shadow-md rounded-md mx-[15rem] border-[0.50px] border-black mb-[6rem]">
        <div className="join join-vertical w-full px-[8rem]">
          <div className="p-[5rem] justify-center flex">
            <CardAgenda />
          </div>
          <div className="text-center pb-[5rem]">
            <Link
              to="/tambahagenda2"
              className="bg-[#FFFF] border-primary border-[1px] w-[212px] rounded-md p-3 text-primary"
            >
              + Tambah Agenda
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TambahAgenda;
