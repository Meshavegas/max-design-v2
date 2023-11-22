"use client";
import React, { useState } from "react";
import Image from "next/image";
import { service } from "@/app/modele/modele";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

const SingleService = (props: { service: service }) => {
  const [showMore, setShowMore] = useState(false);
  // console.log(props.service.category);

  return (
    <motion.div className="border border-[#fadced] rounded-xl w-full lg:w-[32%] md:w-[48%]  p-2 cursor-pointer">
      <div className="w-full overflow-hidden rounded-xl">
        <h1 className=" z-30 bg-orange absolute ml-3 mt-3 text-white w-fit px-3 py-1 rounded-2xl hover:cursor-pointer h-fit font-b93">
          {props.service.category.name}
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
      <h1 className=" text-2xl mt-2 text-light font-b93 tracking-[0.14em]">
        {props.service.title}
      </h1>
      <div
        className={` font-bahn ${showMore ? "show-all-text" : "line-clamp-3"}`}
        onClick={() => setShowMore(!showMore)}
      >
        <PortableText value={props.service.content} />
      </div>
      {!showMore && (
        <span
          onClick={() => setShowMore(true)}
          className=" text-orange font-bold"
        >
          Voir plus
        </span>
      )}
      <div className=" py-2 px-4 bg-light text-white my-2 w-fit  text-2xl font-kazy rounded-3xl">
        <a
          target="_blank"
          className=""
          href={`https://wa.me/237677899380?text=Bonjour+Monsieur%2C%0AJ%27ai+r%C3%A9cemment+d%C3%A9couvert+votre+service+sur+votre+site+web+et+je+suis+tr%C3%A8s+int%C3%A9ress%C3%A9%28e%29.%0APourriez-vous+me+fournir+plus+d%27informations+sur+*${props.service.title}*+%3F`}
        >
          Demander un devis
        </a>
      </div>
    </motion.div>
  );
};

export default SingleService;
