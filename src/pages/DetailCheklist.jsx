import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DetailCheklist = () => {
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
          <Link
            to={"/fitur_cheklist"}
            className="text-black font-bold text-[2rem]"
          >
            &lt; Cheklist
          </Link>
        </div>
      </div>
      <div className="border-solid shadow-md rounded-md mx-[15rem] border-[0.50px] border-black mb-[9rem]">
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
        <div className="text-center pb-[5rem] my-[2rem]">
          <Link
            to="/tambahcheklist"
            className="bg-[#FFFF] border-primary border-[1px] w-[231px] rounded-md p-3 text-primary"
          >
            + Tambah Agenda
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailCheklist;
