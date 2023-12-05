import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TambahPanitia = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <div className="mx-[10rem]">
            <div className="my-[2rem]">
              <Link
                to="/fitur_panitia"
                className="text-black font-bold text-[2rem]"
              >
                &lt; Tambah Panitia
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid shadow-md rounded-md mx-[15rem] border-[0.50px] border-black mb-[6rem]">
        <div className="join join-vertical w-full px-[8rem]">
          <div className="join-item bg-white flex justify-between text-black text-xl font-bold pt-[2rem] pb-[1rem]">
            Ketua Panitia
            <Link to="/tambahanggota">
              <span>
                <img src="/src/assets/user-add.svg" />
              </span>
            </Link>
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Vera Romadhon
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex justify-between text-black text-xl font-bold pt-[2rem] pb-[1rem]">
            Divisi Acara
            <Link to="/tambahanggota">
              <span>
                <img src="/src/assets/user-add.svg" />
              </span>
            </Link>
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Fajri Maulana
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Amalia Fyrdausa
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Safira Asari
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex justify-between text-black text-xl font-bold pt-[2rem] pb-[1rem]">
            Divisi Logistik
            <Link to="/tambahanggota">
              <span>
                <img src="/src/assets/user-add.svg" />
              </span>
            </Link>
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Adryan Eka
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Rifka Khairuna
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Momena Jero
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex justify-between text-black text-xl font-bold pt-[2rem] pb-[1rem]">
            Non Divisi
            <Link to="/tambahanggota">
              <span>
                <img src="/src/assets/user-add.svg" />
              </span>
            </Link>
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Meylia Herde
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            M.Wirawan
          </div>
          <div className=" w-[100%] h-[2px] bg-primary" />
          <div className="join-item bg-white flex text-black text-base font-thin pt-[2rem] pb-[1rem]">
            <div className="w-[3%]">
              <li className="text-[3rem] text-[#CED6E0]" />
            </div>
            Hana Mardini
          </div>
          <div className="w-[100%] h-[1px] bg-primary mb-[6rem]" />
          <div className="text-center pb-[5rem]">
            <Link
              to="/tambahdivisi"
              className="bg-[#FFFF] border-primary border-[1px] w-[212px] rounded-md p-3 text-primary"
            >
              + Tambah Divisi
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TambahPanitia;
