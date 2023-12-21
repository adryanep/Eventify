import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={data.foto} alt="Shoes" />
        </figure>
        <Link to="/detailevent">
          <div className="card-body">
            <h2 className="card-title">{data.deskripsi}</h2>
            <p>{data.kategori}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
