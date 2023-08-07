import React from "react";
import SingleService from "./mini/SingleService";

const Services = () => {
  return (
    <div className="">
      <div className=" flex  justify-between flex-col lg:flex-row">
        <h1 className=" text-3xl font-bold">Les different ofres et services</h1>
        <div className=" bg-white  flex flex-row w-fit px-1 py-1 rounded-3xl gap-1">
          <h1 className=" bg-light text-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer h-fit">
            Infographie
          </h1>
          <h1 className=" bg-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer h-fit">
            Shooting
          </h1>
          <h1 className=" bg-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer  h-fit">
            Formation
          </h1>
        </div>
      </div>
      <div className=" transform transition duration-500 hover:scale-110  mt-2 w-fit  text-2xl px-2 py-1 outline rounded-3xl outline-light text-light capitalize cursor-pointer hover:text-white hover:bg-light">
        Voir tout
      </div>
      <div className="mt-8 flex md:flex-wrap gap-3  w-full  justify-between flex-col md:flex-row">
        <SingleService />
        <SingleService />
        <SingleService />
      </div>
    </div>
  );
};

export default Services;
