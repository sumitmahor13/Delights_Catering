import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const { loading, setLoading, showPassword, setShowPassword } = useContext(AppContext);

  const db = getFirestore(app); //instance of db
  const auth = getAuth(app); //instance of auth

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    //validation
    if (userLogin.email == "" || userLogin.password == "") {
      return toast.error("Please Enter email & password");
    }

    setLoading(true);

    try {
      //login with firebase methord
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        //return that data which match "where" condition
        const q = query(
          collection(db, "user"),
          where("uid", "==", users?.user?.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          //store user data in localstorage
          localStorage.setItem("users", JSON.stringify(user));

          //reset form
          setUserLogin({ name: "", email: "" });

          setLoading(false);
          toast.success("Login Successfully..");

          {
            user.role == "user"
              ? navigate("/")
              : navigate("/admin-dashboard");
          }
          return () => data;
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect Password or Email");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row items-start lg:items-center justify-start mt-16 lg:justify-center h-[90.8vh] max-w-[1728px] mx-auto">
        {loading && (
          <div className="loader top-[45%] left-[45%] absolute z-5" />
        )}
        {/* Left */}
        <div className="loginbg lg:w-[70%] h-[30vh] w-full lg:h-full bg-cover"></div>
        {/* Right */}
        <div className="w-screen md:w-[30%] lg:w-[30%] flex items-center justify-center mt-5 lg:mt-0 md:mt-0">
          <form
            onSubmit={submitHandler}
            className=" flex w-[80%] flex-col gap-5 text-lg bg-white"
          >
            <h1 className="text-4xl font-bold">Login</h1>
            <lable>
              <h3>
                Email<sup>*</sup>
              </h3>
              <input
                type="email"
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
                value={userLogin.email}
                placeholder="Enter Email"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </lable>
            <lable className="relative">
              <h3>
                Password<sup>*</sup>
              </h3>
              <input
                
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
                placeholder="Enter Password"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
              {/* Password Eye */}
              {showPassword ? (
                <IoMdEye onClick={()=>setShowPassword(!showPassword)} className="absolute top-9 right-1 cursor-pointer text-gray-500 text-xl" />
              ) : (
                <IoMdEyeOff onClick={()=>setShowPassword(!showPassword)} className="absolute top-9 right-1 cursor-pointer text-gray-500 text-xl" />
              )}
            </lable>
            <button
              type="submit"
              className="py-3 px-2 text-white bg-green-700 rounded-sm"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
