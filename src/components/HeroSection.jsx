import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url('/src/assets/hero-bg.svg')] bg-cover h-screen flex justify-around">
      <div className="flex flex-col justify-center gap-8 p-10 mb-[7rem]">
        <h1 className="text-5xl text-white mx-[3rem]">
          Mari wujudkan ide-ide kreatif bersama-sama! Ayo sertai panitia dan
          buat perbedaan!
        </h1>
        <div className="flex  gap-4 mx-[3rem]">
          <div
            to=""
            className="bg-[#1A73E8] text-white border py-2 px-3 rounded"
          >
            Event
          </div>
          <div
            to=""
            className="bg-[#235EAC] text-white border py-2 px-3 rounded"
          >
            Non Event
          </div>
        </div>
      </div>
      <img src="/src/assets/hero-img.svg" className="w-1/2" />
    </section>
  );
};

export default HeroSection;
