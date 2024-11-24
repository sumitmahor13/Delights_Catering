import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";

const Menu = () => {
  const { loading, getData, categoryList } = useContext(AppContext);

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false)
  //load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <div className="loader" />}
      <div className="relative flex flex-col mt-16 lg:flex-row md:flex-row max-w-[1728px] mx-auto">
        {/* Categories */}
        <ul className="hidden lg:h-[85vh] w-[97%] lg:w-[20%] md:w-[20%] m-2 p-3 md:m-5 lg:m-5 md:flex lg:flex flex-col gap-1 bg-green-700 text-white">
        <h2 className="text-4xl font-bold">Menu</h2>
          {categoryList.map((category, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/menu/${category}`)}
                className="cursor-pointer border-b-2 border-white"
              >
                {category}
              </li>
            );
          })}
        </ul>

        {/* For Mobile menu */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="fixed z-10 cursor-pointer bottom-5 right-3 bg-gray-400 rounded-full px-3 py-3 lg:hidden md:hidden"
        >
          {isOpen ? <MdOutlineRestaurantMenu size={25} /> : <BiSolidFoodMenu size={25} />}
        </div>
        {isOpen && (
          <div onClick={() => setOpen(false)} className="sticky w-[90%] p-3 top-[15%] left-[5%] text-white bg-green-700 lg:hidden md:hidden">
          <h2 className="text-5xl font-bold">Menu</h2>
            {categoryList.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() => navigate(`/menu/${category}`)}
                  className="cursor-pointer flex border-b-2"
                >
                  {category}
                </li>
              );
            })}
          </div>
        )}
        {/* Items */}
        <Outlet />
      </div>
    </>
  );
};
export default Menu;
