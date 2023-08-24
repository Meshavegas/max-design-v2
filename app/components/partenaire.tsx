"use client";
import React from "react";
import NbClients from "./mini/nbClients";

import { Swiper, SwiperSlide } from "swiper/react";
import style from "@/app/styles/swiper.module.css";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import { Pagination, EffectFade, Navigation, FreeMode } from "swiper";
import { partenaire } from "../modele/modele";

const Partenaires = async (props: { partern: partenaire[] }) => {
  const { partern } = props;
  return (
    <div className="">
      <div className=" flex gap-4 flex-wrap  items-center justify-center ">
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
        <NbClients nombre={104} type="Projects " classname="w-1/3 md:w-1/5" />
      </div>
      <div className=" border-b border-b-orange mt-2"></div>
      <div className="">
        <div className=" text-3xl mt-2 md:text-4xl font-bold">
          Nos Partenaires{" "}
        </div>
        <div className=" text-2xl mt-2 md:text-3xl">
          ceux qui avec nous colaborons sainement
        </div>
      </div>
      {/* <div className=" mt-20 flex flex-row gap-4 items-center justify-center"> */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        freeMode={true}
        slidesPerView={3}
        modules={[Pagination, EffectFade, Navigation]}
        className="mySwiper"
      >
        {partern.map((item, index) => {
          return (
            <SwiperSlide key={index} className={style.swiperSlide}>
              <img
                src={item.logo}
                alt={item.nom}
                className="object-fit w-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Partenaires;
