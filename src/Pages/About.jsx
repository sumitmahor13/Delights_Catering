import React from "react";
import AboutUsComp from "../Components/AboutUsComp";
import Testimonial from "../Components/Testimonial"
import { Link } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
import Aboutcater from "../../public/Assets/Aboutcater.png"
import CEO from "../../public/Assets/CEO.png"
import Founder from "../../public/Assets/Founder.jpg"
import Manager from "../../public/Assets/Manager.jpg"
import Team from "../../public/Assets/Team.jpg"
const About = () => {
  return (
    <>
      <div className="md:mt-32 lg:mt-32 mt-20 max-w-[1728px] mx-auto">
        <AboutUsComp />
        <div className="flex flex-col-reverse lg:flex-row gap-5 md:flex-row mx-auto w-10/12 my-20">
          <div className="lg:w-[60%] md:w-[60%]">
            <h1 className="text-5xl lg:text-6xl font-bold">A <span className="text-green-700">Quality-Driven</span> Catering Company</h1>
            <p className="mt-5 text-gray-700">
              We have been one of the successful names in the business when it
              comes to providing catering and services. Our team has completed
              all the events on large and medium scales just the way it has been
              asked by the client. Whether you need service indoors or outdoors,
              we can take care of it just the way you want.
            </p>
            <Link to="/menu/Starter" className="lg:mx-0 mx-auto"><button className="px-4 py-3 flex items-center gap-2 mt-10 bg-green-700 hover:bg-green-800 text-white rounded-sm">Our Menu<BiSolidFoodMenu /></button></Link>
          </div>
          <div>
            <img src={Aboutcater}/>
          </div>
        </div>
        {/* Team */}
        <div className='flex-col text-center my-10 items-center justify-center w-10/12 mx-auto bg-white'>
            <div className='uppercase'>Always Quality</div>
            <h1 className=' text-5xl md:text-6xl lg:text-6xl w-11/12 mx-auto font-bold'>Our <span className="text-green-700">Team</span></h1>
            <div className="flex flex-col justify-center lg:flex-row md:flex-row gap-3 mt-5">
              <div><img src={CEO} className=" w-[23rem]"/><h1 className="text-2xl font-bold">CEO</h1></div>
              <div><img src={Founder} className=" w-[23rem]"/><h1 className="text-2xl font-bold">Founder</h1></div>
              <div><img src={Manager} className=" w-[23rem]"/><h1 className="text-2xl font-bold">Manager</h1></div>
            </div>
            <div className="flex justify-center mt-5"><img src={Team} className="w-[71rem]"/></div>
            <h1 className="text-2xl text-center font-bold">Our Team</h1>
        </div>
        <Testimonial/>
      </div>
    </>
  );
};

export default About;
