"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
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

const Heros2 = () => {
  //   const [screenSize, setScreenSize] = useState(window.screen.width);
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transistion: { duration: 2 },
    },
    hidden: { opacity: 0, scale: 1, y: 0, x: 200 },
  };
  const boxVariant2 = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transistion: { duration: 2 },
    },
    hidden: { opacity: 0, scale: 0, y: 200, x: -200 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
      console.log("inView", inView);
    }
  }, [inView]);

  //   useEffect(() => {
  //     const handleResize = () => {
  // //       setScreenSize(window.screen.width);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => window.removeEventListener("resize", handleResize);
  // //   }, [screenSize]);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="">
        <SwiperSlide>
          <motion.div
            ref={ref}
            className="bg-light lg:px-0 lg:py-60 px-5 py-28 w-full  gap-5 justify-center flex items-center md:flex-row flex-col"
          >
            <p className=" w-5/6 md:w-1/3">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-2xl font-extrabold text-white"
              >
                Nos performance agreable
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                eos repellat quibusdam, natus et labore dignissimos quisquam
                perspiciatis sequi dicta officia doloremque, vel tenetur.
                Possimus quaerat porro reiciendis necessitatibus alias?
              </motion.p>
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className=" w-5/6 transform transition duration-500 -rotate-6 hover:-rotate-0 back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 md:px-8  rounded-xl md:w-1/3 "
            >
              <Image
                src="/hero.jpg"
                alt="logo"
                width={1080}
                height={1080}
                className=" lg:w-full rounded-[3rem] shadow-2xl shadow-black"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            ref={ref}
            className="bg-light lg:px-0 lg:py-60 px-5 py-28 w-full  gap-5 justify-center flex items-center md:flex-row flex-col"
          >
            <p className=" w-5/6 md:w-1/3">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-2xl font-extrabold text-white"
              >
                Nos performance agreable
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                eos repellat quibusdam, natus et labore dignissimos quisquam
                perspiciatis sequi dicta officia doloremque, vel tenetur.
                Possimus quaerat porro reiciendis necessitatibus alias?
              </motion.p>
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className=" w-5/6 transform transition duration-500 -rotate-6 hover:-rotate-0 back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 md:px-8  rounded-xl md:w-1/3 "
            >
              <Image
                src="/hero.jpg"
                alt="logo"
                width={1080}
                height={1080}
                className=" lg:w-full rounded-[3rem] shadow-2xl shadow-black"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            ref={ref}
            className="bg-light lg:px-0 lg:py-60 px-5 py-28 w-full  gap-5 justify-center flex items-center md:flex-row flex-col"
          >
            <p className=" w-5/6 md:w-1/3">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-2xl font-extrabold text-white"
              >
                Nos performance agreable
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                eos repellat quibusdam, natus et labore dignissimos quisquam
                perspiciatis sequi dicta officia doloremque, vel tenetur.
                Possimus quaerat porro reiciendis necessitatibus alias?
              </motion.p>
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className=" w-5/6 transform transition duration-500 -rotate-6 hover:-rotate-0 back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 md:px-8  rounded-xl md:w-1/3 "
            >
              <Image
                src="/hero.jpg"
                alt="logo"
                width={1080}
                height={1080}
                className=" lg:w-full rounded-[3rem] shadow-2xl shadow-black"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            ref={ref}
            className="bg-light lg:px-0 lg:py-60 px-5 py-28 w-full  gap-5 justify-center flex items-center md:flex-row flex-col"
          >
            <p className=" w-5/6 md:w-1/3">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-2xl font-extrabold text-white"
              >
                Nos performance agreable
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                eos repellat quibusdam, natus et labore dignissimos quisquam
                perspiciatis sequi dicta officia doloremque, vel tenetur.
                Possimus quaerat porro reiciendis necessitatibus alias?
              </motion.p>
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className=" w-5/6 transform transition duration-500 -rotate-6 hover:-rotate-0 back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 md:px-8  rounded-xl md:w-1/3 "
            >
              <Image
                src="/hero.jpg"
                alt="logo"
                width={1080}
                height={1080}
                className=" lg:w-full rounded-[3rem] shadow-2xl shadow-black"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            ref={ref}
            className="bg-light lg:px-0 lg:py-60 px-5 py-28 w-full  gap-5 justify-center flex items-center md:flex-row flex-col"
          >
            <p className=" w-5/6 md:w-1/3">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-2xl font-extrabold text-white"
              >
                Nos performance agreable
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" text-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                eos repellat quibusdam, natus et labore dignissimos quisquam
                perspiciatis sequi dicta officia doloremque, vel tenetur.
                Possimus quaerat porro reiciendis necessitatibus alias?
              </motion.p>
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className=" w-5/6 transform transition duration-500 -rotate-6 hover:-rotate-0 back flex flex-col justify-center items-center gap-4 bg-light py-10 px-3 md:py-10 md:px-8  rounded-xl md:w-1/3 "
            >
              <Image
                src="/hero.jpg"
                alt="logo"
                width={1080}
                height={1080}
                className=" lg:w-full rounded-[3rem] shadow-2xl shadow-black"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Heros2;
