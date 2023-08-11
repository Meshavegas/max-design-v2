import React from "react";
import Services from "./Services";
import { getServices } from "@/sanity/sanity-utils";

export const ServicesGet = async () => {
  const service = await getServices();
  return (
    <div>
      <Services service={service} />
    </div>
  );
};
