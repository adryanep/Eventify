import React from "react";
import { Link } from "react-router-dom";
import H from "../components/H";
import F from "../components/F";

const Mail = () => {
  return (
    <div className="relative h-screen bg-white">
      <H />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="card bg-[#1A73E8] w-[55%] h-[65%] text-primary-content">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center py-[2rem] text-white">
              Pemulihan Akun
            </h1>
            <div>
              <p className="text-base text-center text-white px-[10rem]">
                Masukkan email akun Anda yang sudah terdaftar kemudian ikuti
                langkah pada email yang Kami kirimkan.
              </p>
            </div>
            <form action="">
              <div className="flex flex-col items-center mt-[2rem]">
                <label htmlFor="mail" className="text-white pr-[22rem]">
                  Email
                </label>
                <input
                  className="bg-white w-[50%] border-solid border-2 border-grey rounded-md p-1 mt-[0.5rem] mb-[1rem]"
                  type="mail"
                  placeholder="email..."
                  id="mail"
                />
              </div>
              <div className="flex justify-center">
                <Link
                  to="/dial"
                  className="bg-white w-[5rem] p-2 rounded-md text-black my-2 font-bold"
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
export default Mail;
