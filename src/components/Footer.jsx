import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1A73E8] footer p-10 text-base-content">
        <aside>
          <img src="src/assets/logo-2.svg"></img>
        </aside>
        <nav className="text-white">
          <h1 className="footer-title opacity-100">Layanan Kami</h1>
          <Link to="/about" className="link link-hover">
            Bantuan
          </Link>
          <a className="link link-hover">Notifikasi</a>
          <a className="link link-hover">Kontak kami</a>
          <br></br>
          <br></br>
          <br></br>
          <a className="link link-hover">Tentang Aplikasi</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title opacity-100">Kategori</header>
          <a className="link link-hover">Pkkmb</a>
          <a className="link link-hover">Olahraga</a>
          <a className="link link-hover">Seni</a>
          <a className="link link-hover">Pentas</a>
          <br></br>
          <br></br>
          <a className="link link-hover">Hubungi Kami</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title opacity-100">Fitur</header>
          <Link to="/fitur_panitia" className="link link-hover">
            Panitia
          </Link>
          <Link to="/fitur_agenda" className="link link-hover">
            Agenda
          </Link>
          <Link to="/fitur_anggaran" className="link link-hover">
            Anggaran
          </Link>
          <Link to="/fitur_cheklist" className="link link-hover">
            Ceklis
          </Link>
          <br></br>
          <br></br>
          <a className="link link-hover">Kebijakan Privasi</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title opacity-100">Cari </header>
          <input
            type="text"
            placeholder="cari event seru di sini"
            className="input w-[20rem] text-black"
          />
        </nav>
      </footer>
      <div className="text-center justify-center text-white bg-[#1A73E8] pb-5">
        <a>&copy; 2023 TIMKU. All Rights Reserved</a>
      </div>
    </div>
  );
};

export default Footer;
