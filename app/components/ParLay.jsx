import React from "react";
import Partenaires from "./partenaire";
import { getPartenaire } from "@/sanity/sanity-utils";

const ParLay = async () => {
  const partern = await getPartenaire();
  return (
    <div>
      <Partenaires partern={partern} />{" "}
    </div>
  );
};

export default ParLay;
