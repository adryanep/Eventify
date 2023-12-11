import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={
          location.pathname === "/"
            ? "bg-[#235EAC] text-white font-thin"
            : "hidden"
        }
      >
        <div className="flex justify-between mx-[3rem]">
          <div className="flex-1 w-1/2 p-4">
            <Link to="/about" className="m-4">
              Bantuan
            </Link>
            <Link to="" className="m-4">
              Kontak kami
            </Link>
          </div>
          <div className="flex-1 w-1/2 p-4 text-right">
            <Link to="/homepage" className="m-4">
              Tentang Eventify
            </Link>
            <Link to="" className="m-4">
              Notifikasi
            </Link>
            <Link to="" className="m-4">
              Blog
            </Link>
            <Link to="" className="m-4">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          location.pathname === "/"
            ? "bg-[#235EAC] text-white"
            : "bg-[#0B4FAA] text-white"
        }
      >
        <div className="flex justify-between mx-[3rem]">
          <img className="w-1/4 p-4" src="src/assets/logo-1.svg"></img>
          <input
            type="text"
            placeholder="cari event seru di sini"
            className="input mt-10 w-[34rem] text-black"
          />

          <div
            className={
              location.pathname === "/"
                ? " flex content-center mt-10 pr-5 mr-[10rem]"
                : " flex content-center mt-10 pr-5"
            }
          >
            <Link
              to={location.pathname === "/" ? "/login" : "/homepage"}
              className="m-2"
            >
              Beranda
            </Link>
            <Link
              to={location.pathname === "/" ? "/login" : "/createevent"}
              className="m-2"
            >
              Buat Event
            </Link>
            <Link
              to={location.pathname === "/" ? "/login" : "/event"}
              className="m-2"
            >
              Event
            </Link>
            {location.pathname !== "/" && (
              <>
                <div className="dropdown dropdown-end text-black">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="src/assets/notification.svg"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-[20rem] mx-[2rem] rounded-none"
                  >
                    <p>
                      <Link to="" className="justify-between font-bold">
                        Pengumunan di Adakannya Mentoring Desain welk
                        <span className="badge bg-red-500 ml-[1rem]">New</span>
                      </Link>
                    </p>
                    <p>
                      <Link className="font-thin" to="">
                        Agenda: Senin 6, November 2023
                      </Link>
                    </p>
                    <p>
                      <Link className="font-thin text-[#407BFF]" to="">
                        12 jam yang akan datang
                      </Link>
                    </p>
                  </ul>
                </div>
                <div className="flex mx-5">
                  <div className="dropdown dropdown-end text-black">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="src/assets/avatar.svg"
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/profil" className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">Logout</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2> Fajri Maulana</h2>
                    <h6> Divisi Media</h6>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
