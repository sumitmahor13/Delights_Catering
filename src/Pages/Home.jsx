import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurServices from "../Components/OurServices";
import AboutUsComp from "../Components/AboutUsComp";
import Testimonial from "../Components/Testimonial";
import image1 from "../../public/Assets/image1.jpg"
import image2 from "../../public/Assets/image2.jpg"
import image3 from "../../public/Assets/image3.jpg"
import image4 from "../../public/Assets/image4.jpg"
import image5 from "../../public/Assets/image5.jpg"
import image6 from "../../public/Assets/image6.jpg"

const Home = () => {
  var settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const carouselImages = [image1,image2,image3,image4,image5,image6];

  return (
    <>
      <div className="relative bg-black overflow-x-hidden max-w-[1728px] mx-auto">
        {/* Carousel */}
          <Slider {...settings}>
            {carouselImages.map((image, index) => {
              return (
                  <div key={index} className="opacity-0.1">
                    <img src={image} className="bg-cover h-[50vh] md:h-screen lg:h-screen w-screen" />
                  </div>
              );
            })}
          </Slider>
          <div className="text-white absolute top-[15%] lg:top-[25%]">
            <div className="flex flex-col items-center justify-center w-10/12 mx-auto">
              <h1 className="text-center text-[2rem] lg:text-[5rem] greatVibes">Welcome to Delight Catering Service</h1>
              <h2 className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]">- A Real Diamond of Catering Industry</h2>
              <p className="text-center text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] mt-2 md:mt-3 lg:mt-3">Looking for a perfect food affair to complement your special occasion? Look no further! Delight Caterers provide a sumptuous food itinerary to fulfill your each and every catering need. Be it a large, mid or small sized event, our full-range of outdoor and indoor catering services cover complete food preparation and presentation for formal and informal gatherings.</p>
              <div className="md:mt-3 lg:mt-3">
                <Link to="/about"><button className="border px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-lg m-2">About Us</button></Link>
                <Link to="/menu"><button className="border px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-lg m-2">Explore &#10132;</button></Link>
              </div>
              <button className="hidden lg:inline mt-14 text-xl px-2 py-5 border rounded-full animate-bounce"><FaArrowDownLong /></button>
            </div>
          </div>  

        </div>
        <AboutUsComp/>
        <OurServices/>
        <WhyChooseUs/>
        <Testimonial/>   
    </>
  );
};

export default Home;
