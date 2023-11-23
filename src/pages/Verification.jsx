import React from "react";
import NavbarForm from "../components/NavbarForm";
import FooterForm from "../components/FooterForm";

const Verification = () => {
  return (
    <>
      <NavbarForm />
      <div className="card shadow-lg border-2 bg-[#1A73E8] w-[25rem] h-[25rem] wx-[25rem]">
        <div className="flex items-center justify-center h-screen">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 mx-2 text-4xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 mx-2 text-4xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 mx-2 text-4xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 mx-2 text-4xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <FooterForm />
    </>
  );
};

export default Verification;
