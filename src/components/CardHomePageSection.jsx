import React from "react";
import { Link } from "react-router-dom";

const CardHomePageSection = () => {
  return (
    <section className="bg-[url('/src/assets/footer-bg.svg')] bg-cover flex justify-around">
      <div className="card card-side shadow-xl bg-[#0B4FAA] flex   gap-8 my-[7rem] mx-[15rem] p-5 h-[20rem] ">
        <div>
          <img src="/src/assets/hero-img4.svg" alt="Movie" />
        </div>
        <div className="card-body w-3/4">
          <p className="card-title text-white font-thin">
            Rencanakan event dengan mudah menggunakan alat penjadwalan intuitif
            kami. Tak ada konflik atau kebingungan hanya koordinasi yang lancar!
          </p>
          <div className="card-actions justify-start">
            <Link to="/login" className="btn btn-primary">
              Buat Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHomePageSection;
