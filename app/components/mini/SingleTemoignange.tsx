import React from "react";
import Image from "next/image";
import { BsQuote } from "react-icons/bs";
const SingleTemoignange = () => {
  return (
    <div className="md:w-2/5 w-full gap-2 flex-col bg-light-grey p-8 rounded-2xl">
      <div className="flex gap-2 items-center">
        <Image
          src="/hero.jpg"
          alt="logo"
          width={1080}
          height={1080}
          className=" w-20 h-20 rounded-full bg-cover"
        />
        <div className="">
          <h1 className=" text-2xl font-bold">Mesha vegas</h1>
          <h1 className=" text-xl font-light">
            Lorem ipsum dolor sit, amet consectetur
          </h1>
        </div>
      </div>
      <div className="">
        <p className="">
          <BsQuote style={{ fontSize: "3rem" }} />
        </p>
        <p className=" text-2xl md:text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          laboriosam necessitatibus ex perferendis ullam unde ipsam veniam
          quibusdam commodi blanditiis. SingleTemoignange Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque laboriosam necessitatibus ex
          perferendis ullam unde ipsam veniam quibusdam commodi blanditiis.
          SingleTemoignange
        </p>
      </div>
    </div>
  );
};

export default SingleTemoignange;
