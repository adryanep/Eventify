import React from "react";

const CardAgenda = () => {
  return (
    <>
      <div>
        <div className="card w-[790px] shadow-md rounded-none">
          <div className="flex justify-end bg-[#1A73E8]">
            <p className="p-[10px] text-white">Agenda</p>
          </div>
          <div>
            <h2 className="card-title pt-[1rem] pl-[1rem]">Rapat Perdana</h2>
            <p className="p-[1rem]">
              Membahas visi dan misi Pekan Olahraga Mahasiswa STIE Bank BPD
              Jateng Tahun 2023, serta membagi tugas ...
            </p>
          </div>
          <div className=" w-[100%] h-[1px] bg-[#c5c5c5]" />
          <p className="text-primary p-[10px] ml-[6px]">18 Oktober 2023</p>
        </div>
      </div>
    </>
  );
};

export default CardAgenda;
