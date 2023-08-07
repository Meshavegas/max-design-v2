import React from "react";

const Services = () => {
  return (
    <div className="border">
      <div className=" flex border justify-between flex-col md:flex-row">
        <h1 className=" text-3xl font-bold">Les different ofres et services</h1>
        <div className=" bg-brown flex flex-col md:flex-row w-fit px-1 py-1 rounded-3xl gap-1">
          <h1 className=" bg-light text-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer">
            Infographie
          </h1>
          <h1 className=" bg-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer">
            Shooting
          </h1>
          <h1 className=" bg-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer my-2">
            Formation
          </h1>
        </div>
      </div>
      <div className="">Voir tout</div>
    </div>
  );
};

export default Services;
