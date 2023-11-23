import React from "react";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className=" flex justify-between items-center text-light">
        <h1 className=" text-3xl font-bold text-light flex justify-center items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={1080}
              height={1080}
              className=" h-[70px] w-[60px] "
            />
          </Link>
          MAX DESIGN
        </h1>
        <h1 className=" text-2xl text-light flex gap-4">
          <a href="#">
            <SlSocialInstagram />
          </a>
          <a href="https://www.facebook.com/maxdesign237/" target="_blank">
            <SlSocialFacebook />
          </a>
          <a href="#">
            <SlSocialTwitter />
          </a>
        </h1>
      </div>
      <div className=" border-b border-light my-3"></div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className=" w-full md:w-1/5">
          <div className=" text-2xl font-bold text-light">
            Service d&apos;infographie et Design pour tous
          </div>
          <div className=" bg-light rounded-2xl w-fit px-3 py-2 mt-2 text-2xl transform transition duration-500 hover:scale-x-110 hover:bg-light hover:text-white hover:border hover:cursor-pointer">
            Nous engager
          </div>
        </div>
        <div className=" flex flex-wrap mt-2 md:justify-end gap-7 text-light md:w-3/5  px-2">
          <div className=" cursor-pointer">
            <h1 className=" text-xl font-bold">Resources</h1>
            <h2 className="cursor-pointer">Commander</h2>
            <h2 className="cursor-pointer">Nous contacter</h2>
            <h3 className="cursor-pointer">Resources</h3>
          </div>
          <div className="cursor-pointer">
            <h1 className="text-xl font-bold">Notre Companie</h1>
            <h2 className="cursor-pointer">Commander</h2>
            <h2 className="cursor-pointer">Nous contacter</h2>
            <h3 className="cursor-pointer">Resources</h3>
          </div>
          <div className="cursor-pointer">
            <h1 className="text-xl font-bold">Support</h1>
            <h2 className="cursor-pointer">Help Center</h2>
            <h2 className="cursor-pointer">FAQ</h2>
            <h3 className="cursor-pointer">Plus de questions</h3>
            <h3 className="cursor-pointer">Tarification</h3>
          </div>
        </div>
      </div>
      <div className=" border-b border-light my-3"></div>
      <div className=" flex flex-col  md:flex-row justify-between items-end">
        <div className="md:w-1/5 w-full ">
          <h1 className=" font-bold text-light mt-2 mb-2">
            Souscrire a notre newsLetter
          </h1>
          <div className="flex hover:cursor-pointer hover:text-orange w-fit border rounded-3xl">
            <input
              type="text"
              className=" rounded-3xl h-10 px-4  opacity-50 md:w-[400px]"
              placeholder="Votre addresse E-mail"
            ></input>
            <div className="  -ml-14 bg-light w-fit px-5 h-10 rounded-3xl flex justify-center items-center ">
              <BsArrowUpRight
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </div>
          </div>
        </div>
        <div className="cursor-pointer mt-2 flex flex-col md:flex-row md:justify-end  gap-4 md:gap-16 font-bold text-light w-full md:w-3/5">
          <h1 className="cursor-pointer ">Politique de confidentialite</h1>
          <h1 className="cursor-pointer ">conditions et services</h1>
          <h1 className="cursor-pointer ">cookies</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
