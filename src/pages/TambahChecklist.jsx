import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TambahChecklist = () => {
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
      <div>
        <Navbar />
        <div className="mx-[10rem]">
          <div className="my-[2rem]">
            <Link
              to={"/fitur_cheklist"}
              className="text-black font-bold text-[2rem]"
            >
              &lt; Tambah Cheklist
            </Link>
          </div>
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
                    Tambah Cheklist
                  </label>
                  <div className="relative">
                    <input
                      className="bg-white border-solid border-2 border-grey rounded-lg p-[1rem] w-full text-black border-black"
                      type="text"
                      id="nama"
                      placeholder="Masukan Judul Cheklist"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nama"
                    className="text-black font-bold text-base my-[1rem]"
                  >
                    Tambah Data
                  </label>
                  <div className="relative">
                    <input
                      className="bg-white border-solid border-2 border-grey rounded-lg p-[1rem] w-full text-black border-black"
                      type="text"
                      id="nama"
                      placeholder="Masukan Nama Data"
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
              Tambah Cheklist
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TambahChecklist;
