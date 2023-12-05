import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinEvent = () => {
  const [formData, setFormData] = useState({
    nameevent: "",
    inputcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang telah dimasukkan, seperti menghantar ke API atau memprosesnya.
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto">
      <div className="mx-[6rem] my-[4rem]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Nama Event
            </label>
            <input
              placeholder="Masukan nama Event"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1">
              Masukan Kode
            </label>
            <input
              placeholder="cth : wys-2910-saj"
              type="text"
              id="inputcode"
              name="inputcode"
              value={formData.inputcode}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>
          <div className="flex justify-center">
            <Link
              to="/fitur_panitia"
              type="submit"
              className="py-2 px-4 mt-[1rem] bg-blue-500 text-white rounded w-[264px] text-center"
            >
              Gabung Event
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinEvent;
