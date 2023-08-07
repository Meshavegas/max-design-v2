import React from "react";

const Screenwidth = ({ children, background, padding }: any) => {
  // console.log(padding);

  const paddin = padding ? padding : " md:px-40 md:py-12 px-5 py-10";
  return <div className={` ${paddin} ${background} `}>{children}</div>;
};

export default Screenwidth;
