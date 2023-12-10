import React, { useState } from "react";
import HeroMvp from "../components/HeroMvp";
import NavMvp from "../components/NavMvp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cheklist = () => {
  const [codeVisible, setcodeVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const togglecodeVisibility = () => {
    setcodeVisible(!codeVisible);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
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
        <div className="flex my-[3rem] mx-[0]">
          <div>
            <NavMvp />
          </div>
          <div className="join flex-col w-full px-[8rem]">
            <div className="card-body rounded-md shadow-md m-[2rem]">
              <label
                htmlFor="nama"
                className="text-black font-bold text-base my-[1rem]"
              >
                Perlengkapan Utama
              </label>
              <div className="flex pb-[1rem]">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-info mr-2"
                />
                <p>Bola Basket</p>
              </div>
              <div className="flex pb-[1rem]">
                <input type="checkbox" className="checkbox mr-2" disabled />
                <p>Bola Sepak</p>
              </div>
              <div className="flex pb-[1rem]">
                <input type="checkbox" className="checkbox mr-2" disabled />
                <p>Bola Voli</p>
              </div>
              <div className="flex pb-[1rem]">
                <input type="checkbox" className="checkbox mr-2" disabled />
                <p>Trofi dan Medali</p>
              </div>
            </div>
            <div className="card-body rounded-md shadow-md m-[2rem]">
              <label
                htmlFor="nama"
                className="text-black font-bold text-base my-[1rem]"
              >
                Perlengkapan Acara
              </label>
              <div className="flex pb-[1rem]">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-info mr-2"
                />
                <p>Spanduk Acara</p>
              </div>
              <div className="flex pb-[1rem]">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-info mr-2"
                />
                <p>Poster Promosi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/detailcheklist"
        className="bg-[#1A73E8] rounded-md p-3 flex text-white justify-end ml-[67rem] mr-[20rem] mb-[4rem] text-center"
      >
        Cek Agenda
      </Link>
      <Footer />
    </>
  );
};

export default Cheklist;
