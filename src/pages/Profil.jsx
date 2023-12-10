import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex mx-[15rem] py-[5rem]">
          <div className="flex flex-col w-1/3">
            <div className="left h-full w-full">
              <div className="foto_nama flex w-full">
                <div
                  className="foto h-20 w-20 bg-cover rounded-full mr-[2rem]"
                  style={{
                    backgroundImage: "url('/src/assets/Ellipse 17.svg')",
                  }}
                ></div>
                <div className="nama w-[68%]">
                  <h1 className="text-black font-bold text-4xl pb-2">
                    Fajri Maulana
                  </h1>
                  <p className="text-base text-black">Devisi Media</p>
                </div>
              </div>
              <div className="card-info flex mt-[4rem] gap-3">
                <div className="card1 h-[3.5rem] bg-white border-solid border-2 w-1/2 border-gray-400 pl-[2.5rem] text-black py-1 rounded-md shadow-black shadow-sm text-sm">
                  <p>Gabung Event</p>
                  <p>3 Kali</p>
                </div>
                <div className="card2 h-[3.5rem] bg-white border-solid border-2 w-1/2 border-gray-400 pl-[2.5rem] text-black py-1 rounded-md shadow-black shadow-sm text-sm">
                  <p>Membuat Event</p>
                  <p>0 Kali</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 border-solid ml-[2rem] border-gray-600 border-2 rounded-md">
            <h1 className="text-2xl text-black mx-[4rem] my-[1.5rem] font-bold">
              Profile Saya
            </h1>
            <div className="bg-[#85D3FF]">
              <p className="mx-[4rem] py-[1rem] text-black text-xl">
                Kelola informasi profil Anda untuk mengontrol, melindungi dan
                mengamankan akun
              </p>
            </div>
            <form action="" className="mx-[4rem] my-[1.5rem]">
              <div className="flex flex-col">
                <label htmlFor="nama" className="text-black">
                  Nama Panjang
                </label>
                <input
                  className="bg-white border-solid border-2 border-gray rounded-lg py-1 my-[1rem] pl-6"
                  type="text"
                  placeholder="nama..."
                  id="nama"
                />
                <label htmlFor="mail" className="text-black">
                  Email
                </label>
                <input
                  className="bg-white border-solid border-2 border-gray rounded-lg py-1 my-[1rem] pl-6"
                  type="mail"
                  placeholder="email..."
                  id="mail"
                />
                <label htmlFor="nama" className="text-black">
                  Alamat
                </label>
                <input
                  className="bg-white border-solid border-2 border-gray rounded-lg py-1 my-[1rem] pl-6"
                  type="text"
                  placeholder="alamat..."
                  id="alamat"
                />
                <label htmlFor="mail" className="text-black">
                  Nomor Telepon
                </label>
                <input
                  className="bg-white border-solid border-2 border-grey rounded-lg py-1 my-[1rem] pl-6"
                  type="number"
                  placeholder=""
                  id="number"
                />
                <div className="arah"></div>
                <label htmlFor="gender" className="my-[1rem]">
                  Jenis Kelamin
                </label>
                <div className="flex gap-[3rem]">
                  <div className="flex">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio border-gray-700"
                      checked
                    />
                    <p className="text-black ml-4">Laki-Laki</p>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio border-gray-700"
                    />
                    <p className="text-black ml-4">Perempuan</p>
                  </div>
                </div>
                <label htmlFor="tanggal" className="my-4">
                  Tanggal Lahir
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="tanggal"
                    className="tanggal bg-white border-solid border-2 border-gray rounded-lg p-2 mr-2 w-[30%]"
                    placeholder="DD"
                  />
                  <input
                    type="text"
                    id="bulan"
                    className="bulan bg-white border-solid border-2 border-grey rounded-lg p-2 mr-2  w-[30%]"
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    id="tahun"
                    className="tahun bg-white border-solid border-2 border-grey rounded-lg p-2 mr-2 w-[30%]"
                    placeholder="YYYY"
                  />
                </div>
                <label htmlFor="deskrpisi" className="my-4">
                  Deskrpisi
                </label>
                <textarea
                  className="textarea textarea-bordered bg-white rounded-lg"
                  placeholder="Bio...."
                ></textarea>
                <label htmlFor="daftar" className="my-4">
                  Daftar Sebagai
                </label>
                <input
                  className="bg-white border-solid border-2 border-gray rounded-lg py-1 pl-6"
                  type="text"
                  placeholder="divisi..."
                  id="divisi"
                />
                <Link
                  to="/homepage"
                  className="bg-[#1A73E8] w-[7rem] py-[10px] rounded-md text-white mt-[2rem] mb-[5rem] text-center "
                  type="submit"
                >
                  Simpan
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profil;
