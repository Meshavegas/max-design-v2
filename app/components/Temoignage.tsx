"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SingleTemoignange from "./mini/SingleTemoignange";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import { motion, useAnimation, useInView } from "framer-motion";

const Temoignage = () => {
  const state = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const [screenSize, setScreenSize] = useState(1024);

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    setScreenSize(window.screen.width);
  }, []);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    // Appelez la fonction initiale pour définir la valeur initiale lors du montage du composant
    updateSlidesPerView();

    // Attachez l'événement de redimensionnement pour mettre à jour le nombre d'éléments par vue
    window.addEventListener("resize", updateSlidesPerView);

    // Nettoyez l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className=" text-4xl font-bold pb-5 text-orange uppercase font-b93 tracking-[0.2em]">
        Témoignage
      </div>

      <div className="flex flex-wrap gap-4 justify-center  mt-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 10000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SingleTemoignange />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTemoignange />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTemoignange />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Temoignage;
