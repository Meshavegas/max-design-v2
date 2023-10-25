"use client";
import React, { useEffect, useState } from "react";
import SingleService from "./mini/SingleService";
import { service } from "../modele/modele";
import { motion } from "framer-motion";

const Services = (props: { service: service[] }) => {
  const [services, setServices] = useState(props.service);
  // console.log(services);
  const [filtreFonction, setFiltreFonction] = useState("");
  useEffect(() => {
    //  service
    if (filtreFonction !== "") {
      let catfilItems = [];
      for (let i = 0; i < props.service.length; i++) {
        if (props.service[i].category.title === filtreFonction) {
          catfilItems.push(props.service[i]);
        }
      }

      setServices(catfilItems);

      // console.log(res);
    } else {
      setServices(props.service);
    }
  }, [filtreFonction]);

  return (
    <>
      {services.length > 0 ? (
        <div className="">
          <div className=" flex  justify-between flex-col lg:flex-row">
            <h1 className=" text-4xl font-bold font-b93 text-orange  tracking-[0.2em]">
              Nos Services
            </h1>
            <div className=" bg-white  flex flex-row w-fit px-1 py-1 rounded-3xl gap-1 flex-wrap font-b93">
              <h1
                className={` transition-colors duration-500  w-[70px] px-3 py-1 text-center rounded-2xl hover:cursor-pointer h-fit ${
                  filtreFonction === ""
                    ? " bg-light text-white"
                    : " bg-white text-black"
                }`}
                onClick={() => setFiltreFonction("")}
              >
                All
              </h1>
              <h1
                className={`transition-colors duration-500  w-fit px-2 py-1 rounded-2xl hover:cursor-pointer h-fit ${
                  filtreFonction === "Infographie"
                    ? " bg-light text-white"
                    : " bg-white text-black"
                }`}
                onClick={() => setFiltreFonction("Infographie")}
              >
                Infographie
              </h1>
              <h1
                className={`transition-colors duration-500  w-fit px-2 py-1 rounded-2xl hover:cursor-pointer h-fit ${
                  filtreFonction === "Shooting"
                    ? " bg-light text-white"
                    : " bg-white text-black"
                }`}
                onClick={() => setFiltreFonction("Shooting")}
              >
                Shooting
              </h1>
              <h1
                className={`transition-colors duration-500   w-fit px-2 py-1 rounded-2xl hover:cursor-pointer  h-fit  ${
                  filtreFonction === "Formations"
                    ? " bg-light text-white"
                    : " bg-white text-black"
                }`}
                onClick={() => setFiltreFonction("Formations")}
              >
                Formation
              </h1>
            </div>
          </div>
          {/* <div className=" transform transition duration-500 hover:scale-110  mt-2 w-fit  text-2xl px-2 py-1 outline rounded-3xl outline-light text-light capitalize cursor-pointer hover:text-white hover:bg-light">
            Voir tout
          </div> */}
          <motion.div
            layout
            className="mt-8 flex md:flex-wrap gap-4  w-full flex-col md:flex-row"
          >
            {services.map((item, index) => {
              return <SingleService key={index} service={item} />;
            })}
          </motion.div>
        </div>
      ) : (
        <div className="">vide</div>
      )}
    </>
  );
};

export default Services;
