import React from "react";
import { MdVerified } from "react-icons/md";
import { PiCookingPotFill } from "react-icons/pi";
import { RiServiceFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const boxs = [
    {
      icon: <PiCookingPotFill className="text-2xl" />,
      heading: "Authentic Taste",
      desc: "Enjoy our traditional recipes, inspired by rich culinary heritage.",
    },
    {
      icon: <RiServiceFill className="text-2xl" />,
      heading: "Service Excellence",
      desc: "Outstanding service and unforgettable experiences. .",
    },
    {
      icon: <MdVerified className="text-2xl" />,
      heading: "Best Quality",
      desc: "Top quality standards, excellence in every bite.",
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      heading: "Heritage",
      desc: "Delight caterings blends food and heart, rooted in family traditions.",
    },
  ];
  return (
    <>
      <div className="flex-col text-center mb-20 items-center justify-center w-10/12 mx-auto max-w-[1728px] bg-white">
        <div className="uppercase">Why Choose Us</div>
        <h1 className=" text-5xl md:text-6xl lg:text-6xl w-11/12 mx-auto font-bold">
          Leave <span className="text-green-700">your guests</span> speechless
          with our Fabulous food!
        </h1>
        <div className="flex flex-col mt-10 md:flex-row lg:flex-row items-center justify-between gap-5 mx-auto">
          {boxs.map((box, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-2 justify-center gap-3 items-center h-[18rem] w-[20rem] border-black border-2"
              >
                <div className="p-3 bg-green-700 text-white rounded-full">
                  {box.icon}
                </div>
                <h1 className="text-3xl font-bold">{box.heading}</h1>
                <p className="mt-3">{box.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
