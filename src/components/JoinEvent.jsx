import React, { useState } from "react";

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
    <div className="w-[1183px] mx-auto">
      <div className="border border-gray-300 rounded p-4">
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
              className="w-full p-2 border border-gray-300 rounded"
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
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded w-[264px]"
            >
              Gabung Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinEvent;
