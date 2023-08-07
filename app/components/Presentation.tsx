import React from "react";
import Image from "next/image";

const Presentation = () => {
  return (
    <div className="flex md:flex-row flex-col justify-end items-center">
      <div className="md:w-1/2 md:px-24 md:h-2/3 flex  flex-col">
        <h1 className="text-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        </h1>
        <div className="pt-4">
          inventore asperiores cum porro similique rem vel saepe, sit
          necessitatibus, quos accusamus ab. Cumque pariatur placeat eius earum
          ullam nemo possimus.
        </div>
        <div className=" mt-4 outline w-fit px-4 py-1 rounded-2xl outline-light hover:bg-light hover:text-white hover:cursor-pointer hover:outline-none">
          Nous engager
        </div>
      </div>
      <div className="md:w-1/2 w-full mt-4 md:mt-0">
        <Image
          src="/hero.jpg"
          alt="logo"
          width={1080}
          height={1080}
          className=" md:w-full"
        />
      </div>
    </div>
  );
};

export default Presentation;
