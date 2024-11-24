import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HomeAbout from "../../public/Assets/HomeAbout.jpg"
import HomeAbout2 from "../../public/Assets/HomeAbout2.jpg"

const AboutUsComp = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col justify-between lg:flex-row mt-7 md:mt-20 lg:mt-20 w-10/12 mx-auto max-w-[1728px]">
        <div className="w-1/2 flex ">
          <img
            src={HomeAbout}
            className=" md:[12rem] lg:w-[19rem] bg-cover"
          />
          <img
            src={HomeAbout2}
            className=" md:[12rem] lg:w-[19rem]  bg-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left lg:px-5 mt-5 lg:mt-0 flex flex-col">
          <div className="uppercase">About Us</div>
          <div className=" text-5xl md:text-6xl lg:text-6xl mx-auto font-bold">
            Elevating Your <span className="text-green-700">Events</span> with Exceptional Food.
          </div>
          <p className="w-full mt-5 text-gray-700">
            Delight catering is the place where Food is Celebrated over 25 Years. We Love
            to create Unforgettable Culinary Experiences.
          </p>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="text-xl mt-5"><span className="text-5xl text-green-700 font-bold">25<br/></span> Years of Experience</div>
            <div className="text-xl mt-5"><span className="text-5xl text-green-700 font-bold">500+<br/></span> Successfull Weddings</div>
            <div className="text-xl mt-5"><span className="text-5xl text-green-700 font-bold">89%<br/></span> Repeated Customers</div>
          </div>
          <Link to="/about" className="lg:mx-0 mx-auto"><button className="px-4 py-3 flex items-center gap-2 mt-10 bg-green-700 hover:bg-green-800 text-white rounded-sm">More About Us<FaArrowRight /></button></Link>
        </div>
      </div>
    </>
  );
};

export default AboutUsComp;
