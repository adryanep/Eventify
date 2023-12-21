import React, { useState } from "react";
import HeroMvp from "../components/HeroMvp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import NavMvp from "../components/NavMvp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Details = () => {
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
          <Link to={"/event"} className="text-black font-bold text-[2rem]">
            &lt; Pekan Olahraga Mahasiswa
          </Link>
        </div>
        <div className="mx-[0]">
          <HeroMvp />
        </div>
        <div className="flex my-[3rem]">
          <div>
            <NavMvp />
          </div>
          <div className="mx-[5rem] mb-10">
            <div className="deskripsi">
              <p className="text-black font-bold text-base mb-[0.5rem]">
                Detail/Deskripsi
              </p>
              <p>
                Pekan Olahraga Mahasiswa merupakan event olahraga yang
                dikhususkan untuk mahasiswa Internal STIE Bank BPD Jateng.
              </p>
            </div>
            <div className="mt-[1rem]">
              <form action="">
                <div className="flex flex-col">
                  <div className="flex-col">
                    <label
                      htmlFor="nama"
                      className="text-black font-bold text-base"
                    >
                      Kode Acara
                    </label>
                    <div className="relative mt-[1rem]">
                      <input
                        type={codeVisible ? "text" : "password"}
                        id="text"
                        className="bg-white border-solid border-2 border-grey rounded-lg p-1 w-full pr-10 text-black"
                      />
                      <span
                        className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                        onClick={togglecodeVisibility}
                      >
                        <FontAwesomeIcon
                          icon={codeVisible ? faEye : faEyeSlash}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nama"
                      className="text-black font-bold text-base my-[1rem]"
                    >
                      Tanggal Acara
                    </label>
                    <div className="relative">
                      <input
                        className="bg-white border-solid border-2 border-grey rounded-lg p-1 pl-10 w-full text-black"
                        type="text"
                        id="nama"
                      />
                      <span className="absolute top-1/2 transform -translate-y-1/2 left-3">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nama"
                      className="text-black font-bold text-base my-[1rem]"
                    >
                      Kegiatan Acara
                    </label>
                    <div className="relative">
                      <input
                        className="bg-white border-solid border-2 border-grey rounded-lg p-1 pl-10 w-full text-black"
                        type="text"
                        id="nama"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
