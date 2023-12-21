import React, { useState } from "react";
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
        <div className="flex my-[3rem] mx-[0]">
          <div>
            <NavMvp />
          </div>
          <div className="flex flex-col w-full items-end">
            <div className="card card-body border-[0.5px] mx-[2rem] rounded-none shadow-md w-[90%]">
              <label
                htmlFor="nama"
                className="text-black font-bold text-lg mb-2"
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
            <Link
              to="/tambahcheklist"
              className="bg-[#1A73E8] rounded-md p-3 flex text-white w-[20%] m-[2rem] mb-[4rem]"
            >
              Cek Agenda
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cheklist;
