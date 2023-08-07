import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Heros = () => {
  return (
    <div className=" back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 bg-opacity-60 md:px-8  rounded-2xl w-fit ">
      <h1 className=" text-3xl md:text-5xl text-white text-center font-extrabold">
        We are a creative agency : le design vous rend visible
      </h1>
      <div className="flex flex-col items-center gap-4 md:w-full">
        <h1 className=" text-2xl underline underline-offset-4 text-orange gap-4 md:text-4xl">
          Nous Contacter
        </h1>
        <div className=" flex gap-4 text-2xl flex-col mt-2 lg:flex-row lg:w-1/2">
          <div className=" sm:text-xl text-lg transform transition duration-500 hover:scale-100 h1 flex gap-4 outline cursor-pointer px-4 py-3 rounded-2xl text-white lg:w-1/2 items-center hover:outline-orange">
            <BiPhoneCall /> +237 681 41 52 23
          </div>
          <div className=" sm:text-xl text-lg transform transition duration-500 hover:scale-100 h1 flex gap-4 bg-white cursor-pointer px-4 py-3 rounded-2xl text-light items-center lg:w-1/2 hover:bg-orange hover:text-white">
            {" "}
            <FaWhatsapp />
            Message Whatsapp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
