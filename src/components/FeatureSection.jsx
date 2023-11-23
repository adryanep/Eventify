import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[5rem] bg-[#1A73E8]">
      <h4 className="font-bold text-2xl text-white py-10">
        Fitur yang tersedia
      </h4>
      <div className="flex pb-[5rem]">
        <div>
          <img src="src/assets/feature-1.svg" className="p-8"></img>
          <p className="text-center text-white font-bold">Panitia</p>
        </div>
        <div>
          <img src="src/assets/feature-2.svg" className="p-8"></img>
          <p className="text-center text-white font-bold">Agenda</p>
        </div>
        <div>
          <img src="src/assets/feature-3.svg" className="p-8"></img>
          <p className="text-center text-white font-bold">Anggaran</p>
        </div>
        <div>
          <img src="src/assets/feature-4.svg" className="p-8"></img>
          <p className="text-center text-white font-bold">Ceklis</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
