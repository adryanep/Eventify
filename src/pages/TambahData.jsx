import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TambahData = () => {
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
            to={"/tambahcheklist"}
            className="text-black font-bold text-[2rem]"
          >
            &lt; Perlengkapan Pendukung
          </Link>
        </div>
      </div>
      <div className="border-solid shadow-md rounded-md mx-[15rem] border-[0.50px] border-black mb-[9rem]">
        <div className="join join-vertical w-full px-[8rem]">
          <div className="mt-[3rem]">
            <form action="">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="nama"
                    className="text-black font-bold text-base my-[1rem]"
                  >
                    Data
                  </label>
                  <div className="relative">
                    <input
                      className="bg-white border-solid border-2 border-grey rounded-lg p-[1rem] w-full text-black border-black"
                      type="text"
                      id="nama"
                      placeholder="Masukan nama Barang"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center py-[3rem]">
            <Link
              to="/fitur_cheklist"
              className="bg-[#1A73E8] border-primary border-[1px] w-[178px] rounded-md p-3 text-white"
            >
              Tambah Data
            </Link>
          </div>
          <p className="mb-[1rem]">Perlengkapan Pendukung</p>
          <div className="flex pb-[3rem]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="checkbox  mr-2"
              enabled
              checkbox
            />
            <p>Kotak P3K</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TambahData;
