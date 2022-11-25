import React from "react";

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <input
        className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none bg-light"
        type="text"
        placeholder="Nombre*"
      />
      <input
        className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none bg-light"
        type="text"
        placeholder="Correo*"
      />
      <input
        className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none bg-light"
        type="text"
        placeholder="Telefono*"
      />
      <textarea
        className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none bg-light"
        type="text"
        placeholder="Mensaje*"
        />
      <div className="flex gap-x-2">
        <button
          className="bg-[#094067] hover:bg-[#11598C] text-white rounded p-4 text-sm w-full transition"
          type="submit"
        >
          Enviar Mensaje
        </button>
        <button className="border border-[#094067] text-[#11598C] hover:border-[#11598C] hover:text-[#11598C] rounded p-4 text-sm w-full transition">
          Llamar
        </button>
      </div>
    </form>
  );
};
