import React from "react";
import { Link } from "react-router-dom";
import H from "../components/H";
import F from "../components/F";

const Dial = () => {
  return (
    <div className="relative h-screen bg-white">
      <H />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="card bg-[#1A73E8] w-[55%] h-[65%] text-primary-content">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center py-[2rem] text-white">
              Masukan Kode
            </h1>
            <div>
              <p className="text-base text-center text-white px-[12rem]">
                Silaka masukan kode verifikasi yang sudah kami kirimkan melalui
                email
              </p>
            </div>
            <form action="">
              <div className="flex justify-center gap-[15px] my-[2rem]">
                <div className="card bg-white w-[4rem] h-[4rem] rounded-lg">
                  <input
                    className="w-full h-full text-center text-4xl pl-[12px] bg-white rounded-lg"
                    type="number"
                    min="0"
                    max="9"
                  />
                </div>
                <div className="card bg-white w-[4rem] h-[4rem] rounded-lg">
                  <input
                    className="w-full h-full text-center text-4xl pl-[12px] bg-white rounded-lg"
                    type="number"
                    min="0"
                    max="9"
                  />
                </div>
                <div className="card bg-white w-[4rem] h-[4rem] rounded-lg">
                  <input
                    className="w-full h-full text-center text-4xl pl-[12px] bg-white rounded-lg"
                    type="number"
                    min="0"
                    max="9"
                  />
                </div>
                <div className="card bg-white w-[4rem] h-[4rem] rounded-lg">
                  <input
                    className="w-full h-full text-center text-4xl pl-[12px] bg-white rounded-lg"
                    type="number"
                    min="0"
                    max="9"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/kodeverifikasi"
                  className="bg-white w-[5rem] p-2 rounded-md text-black my-2 font-bold text-center"
                  type="submit"
                >
                  Kirim
                </Link>
              </div>
            </form>
            <div>
              <p className="text-center text-white">
                Kembali ke link{" "}
                <Link className="text-white font-bold" to="">
                  eventify
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <F />
    </div>
  );
};
export default Dial;
