import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HeroMvp from "../components/HeroMvp";
import NavMvp from "../components/NavMvp";

const Anggaran = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[10rem]">
        <div className="my-[2rem]">
          <Link to={"/homepage"} className="text-black font-bold text-[2rem]">
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
          <div className="flex flex-col w-full items-end">
            <div className="card card-body border-[0.5px] mx-[2rem] rounded-none shadow-md w-[90%]">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-black font-bold">Anggaran</th>
                      <th></th>
                      <th className="text-primary font-bold">Lihat Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-[#1A73E8]">
                      <th className="text-white">No</th>
                      <td></td>
                      <td className="text-white">Section</td>
                      <td className="text-white">Subtotal</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>1</th>
                      <td></td>
                      <td>Belanja Bahan</td>
                      <td>Rp. 1.050.000</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th className="text-black font-bold">Total</th>
                      <td></td>
                      <td></td>
                      <td>Rp. 1.050.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Link
              to="/tambahanggaran"
              className="bg-[#1A73E8] rounded-md p-3 flex text-white w-[20%] m-[2rem] mb-[4rem]"
            >
              Tambah Anggaran
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Anggaran;
