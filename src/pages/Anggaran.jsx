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
                      <th className="text-black font-bold text-lg">Anggaran</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-[#1A73E8]">
                      <td className="text-white">No</td>
                      <td className="text-white">Uraiann</td>
                      <td className="text-white">Volume</td>
                      <td className="text-white">Rincian</td>
                      <td className="text-white">Satuan</td>
                      <td className="text-white">Jumlah</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>1</th>
                      <td>Kertas Hvs</td>
                      <td>10</td>
                      <td>Lembar</td>
                      <td>Rp. 1.000</td>
                      <td>Rp. 10.000</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Bolpoin</td>
                      <td>1</td>
                      <td>Pcs</td>
                      <td>Rp. 2.000</td>
                      <td>Rp. 2.000</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Amplop</td>
                      <td>10</td>
                      <td>Pcs</td>
                      <td>Rp. 1.000</td>
                      <td>Rp. 10.000</td>
                    </tr>
                    <tr>
                      <td
                        colspan="6"
                        className="w-[100%] h-[2px] bg-primary p-0"
                      />
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th className="text-black font-bold">Total</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Rp. 22.000</td>
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
