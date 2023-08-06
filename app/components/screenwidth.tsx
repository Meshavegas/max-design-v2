import React from "react";

const Screenwidth = ({ children, background }: any) => {
  return (
    <div className={` px-5 py-10 md:px-40 md:py-12 ${background} `}>
      {children}
    </div>
  );
};

export default Screenwidth;
