import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import H from "../components/H";
import F from "../components/F";
import { Link } from "react-router-dom";

const KodeVerifikasi = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [konfirmasiVisible, setKonfirmasiVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleKonfirmasiVisibility = () => {
    setKonfirmasiVisible(!konfirmasiVisible);
  };

  return (
    <section className=" bg-white h-screen">
      <H />
      <div className="flex-row mx-[10rem] my-[5rem]">
        <div className="mb-[2rem]">
          <img
            className="m-auto"
            src="/public/logo aplk organisasi-07 1.svg"
            alt="Register"
          />
        </div>
        <div className="mb-[2rem]">
          <p className="text-3xl text-center text-black font-bold">
            Silakan Ganti Kata Sandi
          </p>
          <div className="text-base text-center text-black px-[24rem] flex mx-16">
            <p>
              <span className="font-bold">Reset!</span> Anda bisa mengganti kata
              sandi baru atau tetap lanjutkan
            </p>
          </div>
        </div>
        <form action="" className="mx-auto w-[25rem]">
          <div className="flex flex-col">
            <label htmlFor="password" className="text-black">
              Ganti Kata Sandi
            </label>
            <div className="relative">
              <input
                className="bg-white w-full border-solid border-2 border-grey rounded-lg p-1 mt-[0.5rem] mb-[1rem] pr-10"
                type={passwordVisible ? "text" : "password"}
                placeholder="kata sandi baru"
                id="password"
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
              </span>
            </div>
            <label htmlFor="konfirmasi" className="text-black">
              Konfimasi password
            </label>
            <div className="relative">
              <input
                className="bg-white w-full border-solid border-2 border-grey rounded-lg p-1 mt-[0.5rem] mb-[1rem] pr-10"
                type={konfirmasiVisible ? "text" : "password"}
                placeholder="konfirmasi kata sandi..."
                id="konfirmasi"
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={toggleKonfirmasiVisibility}
              >
                <FontAwesomeIcon
                  icon={konfirmasiVisible ? faEye : faEyeSlash}
                />
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="bg-[#1A73E8] w-[5rem] p-2 rounded-md text-white my-[1rem] text-center"
              type="submit"
            >
              Login
            </Link>
          </div>
          <p className="text-center">
            Kembali ke <span className="font-bold text-black">eventify</span>
          </p>
        </form>
      </div>
      <F />
    </section>
  );
};

export default KodeVerifikasi;
