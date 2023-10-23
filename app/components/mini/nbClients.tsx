import React from "react";
import CountUp from "react-countup";
type props = {
  nombre: number;
  type: string;
  classname: string;
};
const NbClients = ({ nombre, type, classname }: props) => {
  return (
    <div
      className={`flex flex-row gap-3 ${classname} justify-center items-center  font-kazy`}
    >
      <div className=" text-4xl font-bold ">
        <CountUp end={nombre} duration={15} />
      </div>
      <div className=" text-4xl">{type}</div>
    </div>
  );
};

export default NbClients;
