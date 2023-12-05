import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    category: "",
    committee: "",
    eventCode: "",
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
              Judul
            </label>
            <input
              placeholder="isi judul acara/event"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Deksripsi
            </label>
            <textarea
              placeholder="isi deksripsi acara"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1">
              Tanggal
            </label>
            <input
              type="date"
              placeholder="isi tanggal acara"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1">
              Kategori
            </label>
            <input
              placeholder="pilih kategori acara"
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="committee" className="block mb-2">
              Panitia
            </label>
            <input
              placeholder="masukan nama panitia"
              type="text"
              id="committee"
              name="committee"
              value={formData.committee}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>

          <input type="file" className="file-input w-full max-w-xs mb-2" />
          <div className="mb-4">
            <label htmlFor="eventCode" className="block mb-1">
              Masukan Kode Acara
            </label>
            <input
              placeholder="Buat kode acara manual"
              type="text"
              id="eventCode"
              name="eventCode"
              value={formData.eventCode}
              onChange={handleChange}
              className="w-full p-2 border rounded border-solid border-black"
            />
          </div>
          <div className="flex justify-center">
            <Link
              to="/event"
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded w-[264px] text-center mt-[2rem]"
            >
              Buat Acara
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
