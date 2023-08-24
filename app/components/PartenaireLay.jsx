import React from "react";
import { getPartenaire } from "@/sanity/sanity-utils";
import Partenaires from "./partenaire";
const PartenaireLay = async () => {
  const partern = await getPartenaire();
  return (
    <div>
      <Partenaires partern={partern} />
    </div>
  );
};

export default PartenaireLay;
