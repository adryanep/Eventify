import React from "react";

const SideSection = () => {
  return (
    <div>
      <p className="text-xl font-bold my-[2rem]">Event yang belum di ikuti</p>
      <div className="card w-96 bg-base-100 shadow-xl rounded-[15px] mb-[2rem] flex-row items-center border-2">
        <div className="pl-[2rem]">
          <img className="w-[5rem]" src="/src/assets/note.svg"></img>
        </div>
        <div className="card-body text-black">
          <h2 className="card-title text-base">Desain welk</h2>
          <p className="font-light">Agenda: Senin 12 November 2023 12.00 WIB</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-[15px] mb-[2rem] flex-row items-center border-2">
        <div className="pl-[2rem]">
          <img className="w-[5rem]" src="/src/assets/note.svg"></img>
        </div>
        <div className="card-body text-black">
          <h2 className="card-title text-base">Sprint Stop</h2>
          <p className="font-light">Agenda: Senin 12 November 2023 12.00 WIB</p>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
