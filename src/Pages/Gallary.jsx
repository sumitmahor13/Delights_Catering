import React from "react";
import gallary from "../data/GallaryData"

const Gallary = () => {
  return (
    <>
      <div className="flex-col text-center my-24 items-center justify-center max-w-[1728px] w-10/12 mx-auto bg-white">
        <div className="uppercase">What we do</div>
        <h1 className="text-5xl md:text-6xl lg:text-6xl mx-auto font-bold">
          Our <span className='text-green-700'>Gallary</span>
        </h1>
        <div className="flex flex-col flex-wrap mb-44 mt-10 md:flex-row lg:flex-row items-center justify-between gap-5 mx-auto">
          {gallary.map((image, index) => {
            return (
              <div key={index} className=" flex flex-col lg:w-[25rem] gap-2 image-shadow transition-all ease-in-out duration-300 hover:lg:scale-105">
                <img src={image.url} className="cover " />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallary;
