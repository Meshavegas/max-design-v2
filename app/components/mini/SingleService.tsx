import React from "react";
import Image from "next/image";
import { service } from "@/app/modele/modele";
import { PortableText } from "@portabletext/react";

const SingleService = (props: { service: service }) => {
  // console.log(props.service.category);

  return (
    <div className="border border-[#fadced] rounded-xl w-full lg:w-[32%] md:w-[48%]  p-2 cursor-pointer">
      <div className="w-full overflow-hidden rounded-xl">
        <h1 className=" z-30 bg-orange absolute ml-3 mt-3 text-white w-fit px-3 py-1 rounded-2xl hover:cursor-pointer h-fit">
          {props.service.category.title}
        </h1>
        {props.service.photo && (
          <Image
            src={props.service.photo}
            alt="logo"
            width={1080}
            height={1080}
            className="transform  h-72 object-cover rounded-2xl hover:scale-150 transition duration-500"
          />
        )}
      </div>
      <h1 className=" font-bold text-2xl mt-2 ">{props.service.title}</h1>
      <div className="line-clamp-3">
        <PortableText value={props.service.content} />
      </div>
    </div>
  );
};

export default SingleService;
