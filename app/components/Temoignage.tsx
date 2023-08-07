import React from "react";
import SingleTemoignange from "./mini/SingleTemoignange";

const Temoignage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-4xl font-bold">Témoignage</div>
      <div className="flex flex-wrap gap-1 justify-center mt-2">
        <SingleTemoignange />
        <SingleTemoignange />
        <SingleTemoignange />
        <SingleTemoignange />
      </div>
    </div>
  );
};

export default Temoignage;
