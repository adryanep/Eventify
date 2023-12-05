import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <section className="flex justify-around bg-white">
      <img
        className="flex w-1/2"
        src="/src/assets/img-login.svg"
        alt="collage"
      />
      <div className="flex flex-col mx-[5rem] gap-7 p-10 my-[2rem]">
        <h1 className="text-4xl text-center text-black font-bold">
          Selamat Datang.
        </h1>
        <p className="text-base font-thin text-center text-black px-[6rem]">
          Mulailah dengan Organizer, daftar, dan Gunakan Sesuai dan kembangkan
          dengan lebih banyak fitur berkembangnya kerja tim anda.
        </p>
        <div className="flex justify-around items-center">
          <span className="w-[10rem] h-[3px] bg-gray-400 items-center"></span>
          <p className="flex">Login menggunakan Akun</p>
          <span className="w-[10rem] h-[3px] bg-gray-400 items-center"></span>
        </div>
        <div>
          <form action="">
            <div className="mb-3 px-10 relative flex items-center">
              <input
                type="text"
                id="username"
                placeholder="Email"
                className="bg-white border-solid border-2 border-grey rounded-lg p-1 flex-1 text-black"
              />
            </div>
            <div className="mb-3 px-10 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="password"
                className="bg-white border-solid border-2 border-grey rounded-lg p-1 w-full pr-10 text-black"
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 right-12 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
              </span>
            </div>
            <div className="flex px-10 justify-between">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="checkbox"
                />
                <span className="label-text">Klik Centang</span>
              </label>
              <Link to="/mail">Lupa Kata Sandi</Link>
            </div>
            <div className="flex justify-center items-center py-[2rem]">
              <Link
                to="/homepage"
                className="bg-[#407BFF] w-[5rem] p-2 rounded-md text-white text-center"
                type="submit"
              >
                Login
              </Link>
            </div>
          </form>
          <p className="text-center mb-2">
            Belom Memiliki Akun?Yuk Daftar{" "}
            <Link to="/register" className="text-[#407BFF]">
              Disini
            </Link>
          </p>
          <div className="w-full h-[2px] bg-gray-600"></div>
        </div>
        <div>
          <p className="bg-gray text-center mb-1">Download Aplikasi</p>
          <div className="w-full flex justify-center items-center">
            <img
              className="w-[10rem]"
              src="/src/assets/logo-gp.svg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
