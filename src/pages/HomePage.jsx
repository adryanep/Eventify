import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <div className="p-10 flex-col ml-[1rem] sticky">
          <img src="/src/assets/event-vip.svg"></img>
          <p className="my-[1rem] text-black font-bold">
            Event yang belum diikuti
          </p>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none mb-[2rem] flex-row items-center border-2">
              <div className="pl-[2rem]">
                <img className="w-[4rem]" src="/src/assets/anggaran.svg"></img>
              </div>
              <div className="card-body text-black">
                <h2 className="card-title flex-row items-center">
                  Desain welk
                </h2>
                <p className="font-light">
                  Agenda: Senin 12 November 2023 12.00 WIB
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none flex-row items-center border-2">
              <div className="pl-[2rem]">
                <img className="w-[4rem]" src="/src/assets/anggaran.svg"></img>
              </div>
              <div className="card-body text-black">
                <h2 className="card-title text-lg">Sprint Stop</h2>
                <p className="font-light">
                  Agenda: Senin 12 November 2023 12.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-col justify-center card border-2 rounded-none mt-[3rem] shadow-xl w-[35rem]">
            <h4 className="font-bold ml-[3rem] text-lg text-black pt-[1rem]">
              Fitur
            </h4>
            <div className="flex justify-around">
              <div>
                <Link to="/fitur_panitia">
                  <img
                    src="src/assets/panitia.svg"
                    className="p-8 w-[111px] pb-5"
                  ></img>
                  <p className="text-center text-black font-bold pb-[1rem]">
                    Panitia
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/fitur_agenda">
                  <img
                    src="src/assets/agenda.svg"
                    className="p-8 w-[100px] pb-6"
                  ></img>
                  <p className="text-center text-black font-bold pb-[1rem]">
                    Agenda
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/fitur_anggaran">
                  <img
                    src="src/assets/anggaran.svg"
                    className="p-8 w-[6rem]"
                  ></img>
                  <p className="text-center text-black font-bold pb-[1rem]">
                    Anggaran
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/fitur_cheklist">
                  <img
                    src="src/assets/ceklis.svg"
                    className="p-8 w-[6rem] pb-[34px]"
                  ></img>
                  <p className="text-center text-black font-bold pb-[1rem]">
                    Ceklis
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <p className="my-[2rem] mb-[1rem] text-black font-bold">Tentang</p>
          <div className="card bg-base-100 shadow-xl rounded-none mb-[2rem] w-[35rem] border-2">
            <p className="mx-[3rem] mt-[2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              magnam ab magni voluptates voluptatum nesciunt, vel a qui earum
              explicabo possimus odit assumenda consectetur quia. Temporibus
              delectus sit nostrum. Ipsam.
            </p>
            <div className="flex">
              <div className="my-[2rem]">
                <img
                  className="w-[3rem] ml-[3rem]"
                  src="/src/assets/avatar.svg"
                ></img>
              </div>
              <div className="card-body text-black">
                <h2 className="card-title text-base">
                  Amalia<span className="font-thin">Menambahkan Berita</span>
                  <span className="text-[#1018D6] font-thin">
                    {">"} Event Teknikal
                  </span>
                </h2>
                <p className="font-light">6 Jam yang lalu</p>
              </div>
            </div>
            <img src="/src/assets/topic.svg" className="mx-[3rem]"></img>
            <p className="text-2xl font-bold mx-[3rem] mt-[2rem]">
              Program Pensijilan Kompetensi Teknikal
            </p>
            <p className="mx-[3rem] my-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              magnam ab magni voluptates voluptatum nesciunt, vel a qui earum
              explicabo possimus odit assumenda consectetur quia. Temporibus
              delectus sit nostrum.{" "}
              <span className="text-[#1018D6]">Selengkapnya</span>
            </p>
            <div className="flex">
              <div className="my-[2rem]">
                <img
                  className="w-[3rem] ml-[3rem]"
                  src="/src/assets/avatar.svg"
                ></img>
              </div>
              <div className="card-body text-black">
                <h2 className="card-title text-base">
                  Amalia<span className="font-thin">Menambahkan Berita</span>
                  <span className="text-[#1018D6] font-thin">
                    {">"} Event Teknikal
                  </span>
                </h2>
                <p className="font-light">6 Jam yang lalu</p>
              </div>
            </div>
            <img src="/src/assets/topic.svg" className="mx-[3rem]"></img>
            <p className="text-2xl font-bold mx-[3rem] mt-[2rem]">
              Program Pensijilan Kompetensi Teknikal
            </p>
            <p className="mx-[3rem] my-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              magnam ab magni voluptates voluptatum nesciunt, vel a qui earum
              explicabo possimus odit assumenda consectetur quia. Temporibus
              delectus sit nostrum.{" "}
              <span className="text-[#1018D6]">Selengkapnya</span>
            </p>
          </div>
        </div>
        <div className="p-10 flex-col">
          <p className="mb-[1rem] text-black font-bold">Jadwal Minggu ini</p>
          <div>
            <div className="w-full max-w-xs text-black border-2 shadow-lg mb-[1rem]">
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <button className="focus:outline-none">
                    <svg
                      className="h-5 w-5 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <h2 className="text-xl font-bold">November 2023</h2>
                  <button className="focus:outline-none">
                    <svg
                      className="h-5 w-5 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  <div className="text-center">Sen</div>
                  <div className="text-center">Sel</div>
                  <div className="text-center">Rab</div>
                  <div className="text-center">Kam</div>
                  <div className="text-center">Jum</div>
                  <div className="text-center">Sab</div>
                  <div className="text-center">Min</div>
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2">
                  {/* You can map and render days here */}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                    <div
                      key={day}
                      className={`text-center p-2 ${
                        day === 7 || day === 14 || day === 21 || day === 28
                          ? "text-red-500 font-bold"
                          : "text-gray-800"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="my-[1rem] text-black font-bold">Berita Eventify</p>
          <div className="card w-96 bg-base-100 shadow-xl rounded-none mb-[2rem] flex-row items-center border-2">
            <div className="pl-[2rem]">
              <img
                className="w-[5rem]"
                src="/src/assets/notification-1.svg"
              ></img>
            </div>
            <div className="card-body text-black">
              <h2 className="card-title text-base">
                Pengumunan di Adakannya Mentoring Desain welk
              </h2>
              <p className="font-light">Agenda: Senin 6, November 2023</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
