import React from "react";

const FeatureHeroSection = () => {
  return (
    <>
      <section className="bg-cover h-screen flex justify-around pt-[5rem] px-[4rem]">
        <div className="flex flex-col  gap-8 p-10 py-[5rem]">
          <h1 className="text-4xl text-[#1A73E8] font-bold px-[5rem] py-[1rem]">
            Memberikan Kemudahan
          </h1>
          <p className="px-[5rem] text-2xl text-black pb-[2rem]">
            Dengan Eventify, Anda dapat merencanakan setiap detail acara secara
            terstruktur dan efisien. Penjadwalan yang mudah memberikan kemudahan
            dalam mengatur agenda, sehingga event berjalan sesuai rencana.
          </p>
        </div>
        <img src="/src/assets/hero-img1.svg" className="w-1/2" />
      </section>
      <section className="bg-cover h-screen flex justify-around p-5 py-[5rem] px-[4rem]">
        <img src="/src/assets/hero-img2.svg" className="w-1/2" />
        <div className="flex flex-col  gap-8 p-10 py-[5rem]">
          <h1 className="text-4xl text-[#1A73E8] font-bold px-[5rem] py-[1rem]">
            Kenapa Memilih Eventify?
          </h1>
          <p className="px-[5rem] text-2xl pb-[2rem] text-black">
            Platform digital ini mempermudah dalam menyusun perencanaan suatu
            event, dimulai dengan perencanaan penjadwalan, manajemen
            kepanitiaan, hingga anggaran secara transparansi, Agar suatu event
            dapat terorganisir dengan baik.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeatureHeroSection;
