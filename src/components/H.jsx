import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const H = () => {
  return (
    <header className="relative bg-[#1A73E8] h-[3rem]">
      <div className="absolute inset-0 bg-[#1A73E8] opacity-30"></div>
      <div className="absolute top-0 right-[3rem] h-[3rem] flex items-center">
        <div className="py-[0.6rem] px-[1rem]">
          <FontAwesomeIcon icon={faTimes} size="2x" color="#fff" />
        </div>
      </div>
    </header>
  );
};

export default H;
