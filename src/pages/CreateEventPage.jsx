import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateEvent from "../components/CreateEvent";
import JoinEvent from "../components/JoinEvent";

const CreateEventPage = () => {
  const [event, setEvent] = useState(true);

  return (
    <>
      <Navbar />
      <div className="mx-[10rem] my-[2rem]">
        <p className="text-black font-bold text-lg">Buat Manajemen Event mu</p>
      </div>
      <div className="w-[1183px] mx-auto my-[3rem]">
        <div className="border border-gray-300 rounded p-4">
          <div className="flex justify-around">
            <div
              className={`${
                event ? "border-b-4 border-[#FF0F0F]" : ""
              } w-[30%] text-center`}
              onClick={() => setEvent(true)}
            >
              Buat Event
            </div>
            <div
              className={`${
                !event ? "border-b-4 border-[#FF0F0F]" : ""
              } w-[30%] text-center`}
              onClick={() => setEvent(false)}
            >
              Gabung Event
            </div>
          </div>
          {event ? <CreateEvent /> : <JoinEvent />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateEventPage;
