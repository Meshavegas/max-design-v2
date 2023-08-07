import React from "react";
import Image from "next/image";

const Promotions = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-end items-center">
      <div className="lg:w-1/2 w-full mt-4 lg:mt-0">
        <Image
          src="/promo.jpg"
          alt="logo"
          width={1080}
          height={1080}
          className=" lg:w-full"
        />
      </div>
      <div className="lg:w-1/2 lg:px-24 lg:h-2/3 flex  flex-col">
        <h1 className="text-3xl font-bold text-dark-grey mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        </h1>
        <div className="pt-4 text-xl">
          inventore asperiores cum porro similique rem vel saepe, sit
          necessitatibus, quos accusamus ab. Cumque pariatur placeat eius earum
          ullam nemo possimus.
        </div>
        <div className=" transform transition duration-500 hover:scale-110 text-lg sm:text-2xl mt-4 outline w-fit px-4 py-1 rounded-2xl outline-light hover:bg-light hover:text-white hover:cursor-pointer ">
          Profiter de la promotion
        </div>
      </div>
    </div>
  );
};

export default Promotions;
