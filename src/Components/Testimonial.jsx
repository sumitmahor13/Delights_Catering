import React from "react";
import Slider from "react-slick";
import TestimonialData from "../data/TestimonialData";

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows:false
  };

  return (
    <>
      <div className="testimonialbg bg-cover overflow-x-hidden w-full text-white flex flex-col items-center mt-20 md:pt-20 lg:pt-20 lg:pb-10 md:pb-10 mx-auto justify-between gap-5 max-w-[1728px] ">
        <div className="flex flex-col justify-center items-center mt-10 mx-5">
            <div className='uppercase'>Testimonial</div>
            <h1 className=' text-5xl md:text-6xl lg:text-6xl font-bold text-center'>What <span className="text-green-600">People's Say</span>  About us ?</h1>
        </div>
        <div className="slider-container text-xs lg:text-lg w-11/12 lg:w-6/12 mx-auto text-justify p-10 py-10">
          <Slider {...settings}>
          {
            TestimonialData.map((testimonial, index)=>{
              return(
                <div key={index}>
                <p>
                  {testimonial.review}
                  <h1 className="text-end font-bold text-green-600">{testimonial.user}</h1>
                </p>
              </div>
              )
            })
          }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
