"use client";
import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
type faqtype = {
  question: string;
  reponse: string;
};
type faqType2 = {
  data: faqtype[];
};
const FAQ = ({ data }: faqType2) => {
  //   console.log(data);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <div className=" text-center font-bold text-3xl uppercase font-b93 text-orange tracking-[0.2em]">
        Foire aux questions
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="rounded-lg border border-white">
            <div
              className="flex justify-between w-full bg-blue-500 text-white rounded-lg  py-2 px-4 cursor-pointer bg-light-100"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-bold text-2xl text-light">
                {item.question}
              </span>

              <span>
                {activeIndex === index ? (
                  <IoIosArrowDropup
                    style={{ fontSize: "1.8rem", color: "#005BAA" }}
                  />
                ) : (
                  <IoIosArrowDropdown
                    style={{ fontSize: "1.8rem", color: "#005BAA" }}
                  />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-100 p-4 rounded-lg text-2xl font-bahn">
                <p>{item.reponse}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
