import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import NavMvp from "../components/NavMvp";
import Footer from "../components/Footer";

const Panitia = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mx-[10rem]">
          <div className="my-[2rem]">
            <Link to={"/homepage"} className="text-black font-bold text-[2rem]">
              &lt; Pekan Olahraga Mahasiswa
            </Link>
          </div>
        </div>
        <div className="flex w-full my-[3rem] pl-[10rem]">
          <div>
            <NavMvp />
          </div>
          <div className="w-[60%]">
            <div className="join join-vertical w-[100%] ml-[5rem] mb-[2rem] card shadow-md px-[2rem] pb-[2rem]">
              <div className="join-item bg-white flex justify-between text-black text-xl font-bold pt-[2rem] pb-[1rem]">
                Ketua Panitia
                <Link></Link>
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
                <Link></Link>
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
                <Link></Link>
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
                <Link></Link>
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
              <div className="w-[100%] h-[1px] bg-primary" />
            </div>
          </div>
        </div>
        <Link
          to="/tambahdivisi"
          className="bg-[#1A73E8] rounded-md p-3 flex text-white justify-end ml-[73rem] mr-[12rem] mb-[4rem]"
        >
          Tambah Panitia
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default Panitia;
