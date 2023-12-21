import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TambahDivisi = () => {
  const [codeVisible, setcodeVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const togglecodeVisibility = () => {
    setcodeVisible(!codeVisible);
  };

  return (
    <>
      <div>
        <div>
          <Navbar />
          <div className="mx-[10rem]">
            <div className="my-[2rem]">
              <Link
                to={"/fitur_panitia"}
                className="text-black font-bold text-[2rem]"
              >
                &lt; Tambah Divisi
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid shadow-md rounded-md mx-[15rem] border-[0.50px] border-black mb-[9rem] h-[519px]">
        <div className="join join-vertical w-full px-[8rem]">
          <div className="mt-[6rem]">
            <form action="">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="nama"
                    className="text-black font-bold text-base my-[1rem]"
                  >
                    Nama Divisi
                  </label>
                  <div className="relative">
                    <input
                      className="bg-white border-solid border-2 border-grey rounded-lg p-[1rem] pl-10 w-full text-black border-black"
                      type="text"
                      id="divisi"
                      placeholder="Masukan Nama Divisi"
                    />
                    <span className="absolute top-1/2 transform -translate-y-1/2 left-3">
                      <img src="/src/assets/people.svg" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nama"
                    className="text-black font-bold text-base my-[1rem]"
                  >
                    Masukan Nama Anggota
                  </label>
                  <div className="relative">
                    <input
                      className="bg-white border-solid border-2 border-grey rounded-lg p-[1rem]  w-full text-black border-black"
                      type="text"
                      id="anggota"
                      placeholder="Masukan Nama Anggota"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center pt-[5rem]">
            <Link
              to="/fitur_panitia"
              className="bg-[#1A73E8] border-primary border-[1px] w-[178px] rounded-md p-3 text-white"
            >
              Tambah Divisi
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TambahDivisi;
