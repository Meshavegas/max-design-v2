import React from "react";
import Image from "next/image";

const SingleService = () => {
  return (
    <div className="border border-dark-grey rounded-xl w-full md:w-5/12  lg:w-2/6 p-2 cursor-pointer">
      <div className="w-full overflow-hidden rounded-xl">
        <h1 className=" z-30 absolute ml-3 mt-3 bg-white w-fit px-2 py-1 rounded-2xl hover:cursor-pointer h-fit">
          Infographie
        </h1>
        <Image
          src="/hero.jpg"
          alt="logo"
          width={1080}
          height={1080}
          className="transform  h-72 object-cover rounded-2xl hover:scale-150 transition duration-500"
        />
      </div>
      <h1 className=" font-bold text-2xl mt-2 ">carte de visite</h1>
      <div className="line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        pariatur doloribus deserunt veritatis ut totam necessitatibus quidem
        velit. Unde, distinctio.
      </div>
    </div>
  );
};

export default SingleService;
