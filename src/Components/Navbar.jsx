import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Squash as Hamburger } from 'hamburger-react'
import Logo from "../../public/Assets/Logo.svg"
import Avatar from "../../public/Assets/Avatar.png"

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false)

  const handleLogout = () => {
    //clear local storage
    localStorage.clear("users");
    toast.success("Logged Out");
    navigate("/");
  };

  // navList Data
  const navList = (
    <ul className="flex flex-col md:flex-row lg:flex-row items-center text-2xl md:text-sm lg:text-[1rem] text-center gap-5 md:gap-0 lg:gap-3 p-10 md:p-0 lg:p-0 space-x-3 transition duration-500 ease-in-out text-gray-800 text-md px-5 ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/menu/Starter"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/gallary"}>Gallary</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      {/* User-Dashboard */}
      {user?.role == "user" && (
        <li>
          <Link to={"/dashboard"} className="flex items-center gap-1">
            <img src={Avatar} className="w-8 md:w-7 md:h-7 lg:w-7 lg:h-7 rounded-full"/>
            {user?.firstName}
          </Link>
        </li>
      )}
      {/* Admin-Dashboard */}
      {user?.role == "admin" && (
        <li>
          <NavLink to={"/admin-dashboard"} className="flex items-center gap-1">  
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
  return (
    <>
      <div className="max-w-[1728px] mx-auto">
        <nav className=" bg-white shadow z-10 top-0 fixed w-full max-w-[1728px] mx-auto">
          <div className="lg:flex lg:justify-between items-center md:py-3 lg:py-3 px-3 ">
            <div className="left flex w-[100%] justify-between items-center lg:py-0">
              {/* Left/logo */}
              <div>
                <Link to="/"><img src={Logo} className="w-[5rem] lg:w-[6rem] md:w-[6rem]"/></Link>
              </div>
              {/* Center/NavList */}
              <div className="hidden md:flex lg:flex lg:justify-center lg:items-center lg:mb-0">
                {navList}
              </div>
              
              {/* Right */}
              <div className="hidden md:flex lg:flex gap-4">
                {/* cart */}
                {user?.role == "user" && (
                  <div className="flex items-center text-gray-700">
                    <Link className="text-2xl" to={"/cart"}>
                      <AiOutlineShoppingCart />
                    </Link>
                    <div className="relative animate-bounce flex justify-center items-center text-xs rounded-full -top-2 -left-2 text-white bg-green-600 h-5 w-5">
                      {cartItems.length}
                    </div>
                  </div>
                )}
                {/* login/signup buttons */}
                {!user ? (
                  <div className="flex gap-3 transition-all ease-in-out duration-300">
                    <button className="px-3 py-2 rounded-sm hover:bg-green-800 bg-green-700 text-white">
                      <Link to="/signUp">SignUp</Link>
                    </button>
                    <button className="px-4 py-2 rounded-sm bg-white border-2 text-green-700 border-green-700">
                      <Link to="/login">LogIn</Link>
                    </button>
                  </div>
                ) : (
                  <button onClick={handleLogout} className="px-3 py-2 rounded-sm bg-black text-white">
                    Logout
                  </button>
                  
                )}
              </div>
              <div className="block md:hidden lg:hidden">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`fixed w-full z-10 transition-all ease-in-out duration-300 ${isOpen ? 'top-12' : '-top-[32rem]'}`}>
          <div onClick={() => setOpen(false)} className="top-2 bg-gray-100 md:hidden lg:hidden">
            {navList}
          {!user ? (
                  <div className="flex gap-3 justify-center items-center">
                    <button className="px-3 py-2 mb-5 rounded-sm  bg-white border-2 text-green-700 border-green-700">
                      <Link to="/signUp">SignUp</Link>
                    </button>
                    <button className="px-4 py-2 mb-5 rounded-sm text-white bg-green-700">
                      <Link to="/login">LogIn</Link>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center gap-3 pb-5 items-center">
                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 rounded-sm bg-black text-white"
                    >
                      Logout
                    </button>
                    {/* cart */}
                {user?.role == "user" && (
                  <div className="flex items-center text-gray-700">
                    <Link className="text-2xl" to={"/cart"}>
                      <AiOutlineShoppingCart />
                    </Link>
                    <div className="relative animate-bounce flex justify-center items-center text-xs rounded-full -top-2 -left-2 text-white bg-green-600 h-5 w-5">
                      {cartItems.length}
                    </div>
                  </div>
                )}
                    
                  </div>
                )}
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
