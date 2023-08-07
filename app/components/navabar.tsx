"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
export const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/#services" },
  { name: "Partenaires", to: "/#partenaires" },
  { name: "Contacts", to: "/#contact" },
  { name: "Réalisations", to: "/realisations" },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavigate = () => {
    setIsOpen(false);
  };
  return (
    <div className="sticky top-0 w-full bg-light h-[80px] z-40">
      {/* <ScrollToHashElement /> */}
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold underline underline-offset-8 text-white">
          <Link href="/">
            <Image
              src="/vercel.png"
              alt="logo"
              width={1080}
              height={1080}
              className=" md:w-40 w-20"
            />
          </Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6 text-white text-bold text-2xl">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name + to}
              href={to}
              className="text-white hover:text-light"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-white hover:text-black focus:outline-none justify-center align-middle">
            <a
              href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
              className="flex items-center"
              target="_blank"
            >
              Contacter
              <BsCart3 className="ml-2" />
            </a>
          </div>
          <div className="rounded"></div>
        </div>

        <div className=" pr-2 md:hidden">
          {isOpen ? (
            <MdOutlineClose
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          ) : (
            <FiMenu
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-light p-4 z-40 absolute w-full md:hidden  ">
          <ul className=" flex flex-col items-start gap-4">
            {navLinks.map(({ name, to }) => (
              <Link
                key={name + to}
                href={to}
                className="text-white hover:text-light"
              >
                {name}
              </Link>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-white hover:text-black focus:outline-none justify-center align-middle">
              <a
                href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
                target="_blank"
                className="flex"
              >
                Contacter
                <BsCart3 />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
