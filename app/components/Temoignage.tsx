"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SingleTemoignange from "./mini/SingleTemoignange";
import { Carousel } from "react-responsive-carousel";

const Temoignage = () => {
  const state = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const [screenSize, setScreenSize] = useState(1024);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    setScreenSize(window.screen.width);
  }, []);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className=" text-4xl font-bold pb-5 text-orange">Témoignage</div>

      <div className="flex flex-wrap gap-4 justify-center  mt-2">
        <SingleTemoignange />
        <SingleTemoignange />
        <SingleTemoignange />
      </div>
    </div>
  );
};

export default Temoignage;
