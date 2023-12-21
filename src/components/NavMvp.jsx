import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavMvp = () => {
  const location = useLocation();

  return (
    <div className="border-solid border-[1px] border-black rounded-lg">
      <div className="join join-vertical w-[261px]">
        <Link
          to="/detailevent"
          className={
            location.pathname === "/detailevent"
              ? "btn join-item bg-white flex justify-start text-primary"
              : "btn join-item bg-white flex justify-start text-[#747D8C]"
          }
        >
          <div className="w-[10%]">
            {location.pathname === "/detailevent" && (
              <li className="text-[2rem]" />
            )}
          </div>
          Details
        </Link>
        <Link
          to="/fitur_panitia"
          className={
            location.pathname === "/fitur_panitia"
              ? "btn join-item bg-white flex justify-start text-primary"
              : "btn join-item bg-white flex justify-start text-[#747D8C]"
          }
        >
          <div className="w-[10%]">
            {location.pathname === "/fitur_panitia" && (
              <li className="text-[2rem]" />
            )}
          </div>
          Panitia
        </Link>
        <Link
          to="/fitur_agenda"
          className={
            location.pathname === "/fitur_agenda"
              ? "btn join-item bg-white flex justify-start text-primary"
              : "btn join-item bg-white flex justify-start text-[#747D8C]"
          }
        >
          <div className="w-[10%]">
            {location.pathname === "/fitur_agenda" && (
              <li className="text-[2rem]" />
            )}
          </div>
          Agenda
        </Link>
        <Link
          to="/fitur_anggaran"
          className={
            location.pathname === "/fitur_anggaran"
              ? "btn join-item bg-white flex justify-start text-primary"
              : "btn join-item bg-white flex justify-start text-[#747D8C]"
          }
        >
          <div className="w-[10%]">
            {location.pathname === "/fitur_anggaran" && (
              <li className="text-[2rem]" />
            )}
          </div>
          Anggaran
        </Link>
        <Link
          to="/fitur_cheklist"
          className={
            location.pathname === "/fitur_cheklist"
              ? "btn join-item bg-white flex justify-start text-primary"
              : "btn join-item bg-white flex justify-start text-[#747D8C]"
          }
        >
          <div className="w-[10%]">
            {location.pathname === "/fitur_cheklist" && (
              <li className="text-[2rem]" />
            )}
          </div>
          Checklist
        </Link>
      </div>
    </div>
  );
};

export default NavMvp;
