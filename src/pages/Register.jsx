import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [konfirmasiVisible, setKonfirmasiVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleKonfirmasiVisibility = () => {
    setKonfirmasiVisible(!konfirmasiVisible);
  };

  return (
    <section className=" bg-white mx-[5rem] h-full">
      <div className="flex-row mx-[7rem]">
        <img
          className="m-auto mt-[4rem] w-[12rem]"
          src="/src/assets/logo-register.svg"
          alt="Register"
        />
        <h1 className="text-xl text-center text-black font-bold pt-[1rem]">
          Daftar Yuk
        </h1>
        <p className="text-sm text-center text-black mx-[25rem] mb-[1rem]">
          <span className="font-bold">Baru!</span> Nikmati kemudahan sistem
          autentikasi tunggal untuk mengakses semua layanan dengan satu akun.
        </p>
        <form action="" className="mx-auto w-[25rem]">
          <div className="flex flex-col">
            <label htmlFor="nama" className="text-black">
              Nama
            </label>
            <input
              className="bg-white border-solid border-2 border-grey rounded-lg p-1 my-[1rem]"
              type="text"
              placeholder="nama..."
              id="nama"
            />
            <label htmlFor="mail" className="text-black">
              Email
            </label>
            <input
              className="bg-white border-solid border-2 border-grey rounded-lg p-1 my-[1rem]"
              type="mail"
              placeholder="email..."
              id="mail"
            />
            <label htmlFor="password" className="text-black">
              Password
            </label>
            <div className="relative">
              <input
                className="bg-white w-full border-solid border-2 border-grey rounded-lg p-1 my-[1rem] pr-10"
                type={passwordVisible ? "text" : "password"}
                placeholder="kata sandi..."
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
              konfimasi password
            </label>
            <div className="relative">
              <input
                className="bg-white w-full border-solid border-2 border-grey rounded-lg p-1 my-[1rem] pr-10"
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
              className="bg-[#1A73E8] w-[5rem] p-2 rounded-md text-white my-2 text-center"
              type="submit"
            >
              Login
            </Link>
          </div>
          <p className="text-center">
            Kembali ke{" "}
            <Link className="text-black font-bold" to="">
              eventify
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
