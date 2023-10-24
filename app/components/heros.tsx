import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Heros = () => {
  return (
    <div className="  flex flex-col justify-center items-center rounded-xl gap-4 bg-[#ffffff] py-10 px-3 md:py-10  md:px-8  md:w-[60%] w-[80%]">
      <h1 className=" text-3xl md:text-5xl text-orange text-center font-extrabold font-b93 tracking-[0.1em] uppercase">
        Le Design Vous Rend Visible!
      </h1>
      <div className="flex flex-col items-center gap-4 md:w-full">
        <h1 className=" text-2xl underline underline-offset-4 text-light gap-4 md:text-4xl font-kazy">
          Nous Contacter
        </h1>
        <div className=" flex gap-4 text-2xl flex-col mt-2 lg:flex-row lg:w-1/2">
          <div className=" sm:text-xl text-lg transform transition duration-500 hover:scale-x-90 h1 flex gap-4 border-light outline cursor-pointer px-4 py-3 rounded-2xl text-light lg:w-1/2 items-center hover:outline-orange hover:text-orange">
            <BiPhoneCall /> +237 693 25 19 21
          </div>
          <div className=" sm:text-xl text-lg  transform transition duration-500 hover:scale-x-90 h1 flex gap-4 bg-light cursor-pointer px-4 py-3 rounded-2xl text-white items-center lg:w-1/2 hover:bg-orange hover:text-white">
            {" "}
            <FaWhatsapp />
            <a
              href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
              className="flex items-center"
              target="_blank"
            >
              Message Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
