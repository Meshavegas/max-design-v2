import React from "react";
type props = {
  nombre: number;
  type: string;
  classname: string;
};
const NbClients = ({ nombre, type, classname }: props) => {
  return (
    <div
      className={`flex flex-col ${classname} justify-center items-center boder`}
    >
      <div className=" text-4xl font-bold">{nombre}M</div>
      <div className=" text-3xl">{type}</div>
    </div>
  );
};

export default NbClients;
