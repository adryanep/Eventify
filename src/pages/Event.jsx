import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SideSection from "../components/SideSection";
import DataEvent from "./DataEvent";

const Event = () => {
  const dummy = [0, 1, 2, 3, 4, 5];
  const dummy2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <Navbar />
      <div>
        <div className="card my-[4rem] mx-[4rem] w-[90%] bg-base-100 shadow-xl rounded-[15px] flex-row items-center border-2">
          <div className="card-body text-black flex flex-row justify-between">
            <div className="w-[45%]">
              <h2 className="card-title text-base">
                Organisasikan Acaramu dengan Mudah
              </h2>
              <p className="font-light">
                Rencanakan, Undang, dan Atur Acaramu dalam Sekejap
              </p>
            </div>
            <div className="w-[20%]">
              <div className="border bg-[#407BFF] p-2 rounded-md text-white text-center">
                <Link to="/createevent">Buat Manajement Event mu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="text-xl font-bold my-[1rem] mx-[5rem]">
            Event Terpopuler
          </p>
          <div className="ml-[8rem] mr-[1rem]">
            <div className="my-[2rem]">
              <Link
                to=""
                className="bg-[#407BFF] w-[5rem] mr-2 p-2 rounded-md text-white text-center"
              >
                Event Aktif
              </Link>
              <Link
                to=""
                className="bg-[#F8F9FF] w-[5rem] p-2 rounded-md text-[#365FEF] text-center border-[#365FEF] border-[1px]"
              >
                Event Terdahulu
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {!showAll ? (
                DataEvent.map((data, id) => {
                  id = id + 1;
                  if (id > 6) return;
                  return <Card data={data} />;
                })
              ) : (
                <div className="flex flex-wrap gap-[2rem]">
                  {DataEvent.map(() => {
                    id = id + 1;
                    return <Card data={(data, id)} />;
                  })}
                </div>
              )}
            </div>
            {!showAll ? (
              <div className="my-[3rem] mx-[27%]">
                <Link
                  to=""
                  className="bg-[#407BFF] w-[5rem] p-3 rounded-md text-white text-center"
                  // onClick={() => setShowAll(!showAll)}
                >
                  Jelajah Lebih Banyak Event
                </Link>
              </div>
            ) : (
              <div className="w-[100%] flex justify-end px-[11rem] py-[3rem]">
                <div className="join flex gap-4">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-active">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {!showAll ? (
          <div className="mr-[5rem]">
            <SideSection />
          </div>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </>
  );
};

export default Event;
