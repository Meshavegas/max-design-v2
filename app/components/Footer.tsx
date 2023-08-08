import React from "react";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";
import { BsArrowUpRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl font-bold text-white">Max-Design</h1>
        <h1 className=" text-2xl text-white flex gap-4">
          <a href="#">
            <SlSocialInstagram />
          </a>
          <a href="#">
            <SlSocialFacebook />
          </a>
          <a href="#">
            <SlSocialTwitter />
          </a>
        </h1>
      </div>
      <div className=" border-b border-white my-3"></div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className=" w-full md:w-1/5">
          <div className=" text-2xl font-bold text-white">
            Service d'infographie et Design pour tous
          </div>
          <div className=" bg-white rounded-2xl w-fit px-3 py-1 mt-2 text-2xl transform transition duration-500 hover:scale-x-110 hover:bg-light hover:text-white hover:border hover:cursor-pointer">
            Nous engager
          </div>
        </div>
        <div className=" flex flex-wrap mt-2 md:justify-end gap-7 text-white md:w-3/5  px-2">
          <div className="">
            <h1 className=" text-xl font-bold">Resources</h1>
            <h2 className="">Commander</h2>
            <h2 className="">Nous contacter</h2>
            <h3 className="">Resources</h3>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Notre Companie</h1>
            <h2 className="">Commander</h2>
            <h2 className="">Nous contacter</h2>
            <h3 className="">Resources</h3>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Support</h1>
            <h2 className="">Help Center</h2>
            <h2 className="">FAQ</h2>
            <h3 className="">Plus de questions</h3>
            <h3 className="">Tarification</h3>
          </div>
        </div>
      </div>
      <div className=" border-b border-white my-3"></div>
      <div className=" flex flex-col  md:flex-row justify-between items-end">
        <div className="md:w-1/5 w-full ">
          <h1 className=" font-bold text-white mt-2 mb-2">
            Souscrire a notre newsLetter
          </h1>
          <div className="flex hover:cursor-pointer hover:text-orange w-fit">
            <input
              type="text"
              className=" rounded-3xl h-10 px-4  opacity-50"
              placeholder="Votre addresse E-mail"
            ></input>
            <div className="  -ml-14 bg-white w-fit px-5 h-10 rounded-3xl flex justify-center items-center ">
              <BsArrowUpRight
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </div>
          </div>
        </div>
        <div className=" mt-2 flex flex-col md:flex-row md:justify-end  gap-4 md:gap-16 font-bold text-white w-full md:w-3/5">
          <h1>Politique de confidentialite</h1>
          <h1>conditions et services</h1>
          <h1>cookies</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
