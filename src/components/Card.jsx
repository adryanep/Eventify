import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src="/src/assets/content.svg" alt="Shoes" />
        </figure>
        <Link to="/detailevent">
          <div className="card-body">
            <h2 className="card-title">
              Pekan Olahraga Mahasiswa STIE BANK BPD Jateng Tahun 2023
            </h2>
            <p>Sport</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
