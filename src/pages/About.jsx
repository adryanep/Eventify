import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <p className="text-black p-7 mx-[3rem] font-bold text-lg">
          Dashboard/ Pusat Bantuan
        </p>
        <div className="bg-[#1A73E8] text-center p-10">
          <h1 className="text-2xl font-bold text-white">
            Hai, ada yang bisa kami bantu?
          </h1>
          <input
            type="text"
            placeholder="Masukan Pertanyaan"
            className="input mt-5 w-[60rem] text-black"
          />
        </div>
        <p className="text-black pb-[3rem] m-[5rem]">
          <p className="font-bold">FAQ</p>
          <br></br>
          <p>
            [Akun Saya] Bagaimana cara mengubah/memperbarui nomor telepon saya?
          </p>
          <br></br>
          <p>[Eventify] Bagaimana cara mengaktifkan Eventify?</p>
          <br></br>
          <p>[Mitra Eventify] Bagaimana cara penggunaan aplikasi Eventify?</p>
          <br></br>
          <p>[Eventify] Apa yang terjadi jika saya mengisi akan aman?</p>
          <br></br>
          <p>
            [Eventify-Penggunaan] Mengapa saya tidak bisa menggunakan Eventify?
          </p>
          <br></br>
          <p>
            [Keamanan Akun] Bagaimana cara menjaga keamanan akun Eventify saya?
          </p>
          <br></br>
          <p>
            [Keamanan Akun] Apa yang harus saya lakukan jika mendapat peringatan
            log in mencurigakan dari Eventify?
          </p>
          <br></br>
          <p>
            [melakukan Agenda] Bagaimana cara menggunakan fitur agenda di
            Eventify?
          </p>
          <br></br>
          <p>
            [Eventify] Bagaimana cara saya menghubungi Layanan Pengaduan
            Eventify?
          </p>
          <br></br>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
