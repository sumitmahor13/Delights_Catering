import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const footer = [
    {
      id: 1,
      header: "Our Website",
      content1:
        "Delight Catering is one of the biggest catering service web application for booking occations, we will provide best service to you.",
    },
    {
      id: 2,
      header: "Quick Links",
      content1: "Our Services",
      content2: "Our Menu",
      content3: "Gallary",
      content4: "About Us",
    },
    {
      id: 3,
      header: "Information",
      content1: "Privacy Policy",
      content2: "Refund Policy",
      content3: "Date Change",
      content4: "Terms & Condition",
    },
    {
      id: 4,
      header: "Let's Get In Touch",
      content1: "Sign Up and receive 30% off on first booking your",
    },
  ];

  return (
    <>
      <div>
      <div className="bg-black pt-10 pb-5 max-w-[1728px] mx-auto ">
        <div className="w-10/12 m-auto">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between py-14 gap-8">
            {footer.map((item, key) => (
              <div className="text-gray-500 w-3/6" key={key}>
                <h1 className="text-2xl mb-5 text-green-700">{item.header}</h1>
                <p className="mt-1 w-40">{item.content1}</p>
                <p className="mt-1 w-40">{item.content2}</p>
                <p className="mt-1 w-40">{item.content3}</p>
                <p className="mt-1 w-40">{item.content4}</p>
              </div>
            ))}
          </div>
          <p className="text-white text-center">Made 💚 with Sumit Mahor</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
