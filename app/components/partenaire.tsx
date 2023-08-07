import React from "react";
import NbClients from "./mini/nbClients";

const Partenaires = () => {
  return (
    <div className="borer">
      <div className=" flex gap-4 flex-wrap  items-center justify-center border">
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
        <NbClients nombre={104} type="Clients" classname="w-1/3 md:w-1/5" />
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
      <div className=" mt-2 flex flex-row flex-wrap gap-4 justify-center">
        <div className="w-1/3 h-28 bg-black md:w-1/5">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
        <div className="w-1/3 h-28 bg-black md:w-1/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
        <div className="w-1/3 h-28 bg-black md:w-1/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
        <div className="w-1/3 h-28 bg-black md:w-1/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
        <div className="w-1/3 h-28 bg-black md:w-1/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
        <div className="w-1/3 h-28 bg-black md:w-1/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam vel
          voluptates atque ipsum.
        </div>
      </div>
    </div>
  );
};

export default Partenaires;
