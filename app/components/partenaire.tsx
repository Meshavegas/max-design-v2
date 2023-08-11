import React from "react";
import NbClients from "./mini/nbClients";
import { getPartenaire } from "@/sanity/sanity-utils";

const Partenaires = async () => {
  const partern = await getPartenaire();
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
      <div className=" mt-20 flex flex-row gap-4 items-center justify-center">
        {partern.map((item, index) => {
          return (
            <div
              key={index}
              className="transform transition duration-500 hover:scale-110   md:w-[20%] w-1/2 "
            >
              <img
                src={item.logo}
                alt={item.nom}
                className="object-fit w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partenaires;
