import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import { getFirestore, Timestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  //context consuming
  const { loading, setLoading, showPassword, setShowPassword } = useContext(AppContext);
  const [userSignup, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });

  const db = getFirestore(app); //instance of db
  const auth = getAuth(app); //instance of auth
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    //validation
    if (
      userSignup.firstName == "" ||
      userSignup.lastName == "" ||
      userSignup.email == "" ||
      userSignup.password == ""
    ) {
      return toast.error("All fields are required !");
    }
    if (userSignup.password.length < 6) {
      return toast.error("Password length should be grater then 6");
    }

    setLoading(true);
    try {
      //create user entry in firebase
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      //create user data object
      const user = {
        firstName: userSignup.firstName,
        lastName: userSignup.lastName,
        email: userSignup.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-Us", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //add this user data to firestore
      const docRef = collection(db, "user");
      await addDoc(docRef, user);

      //reset form
      setUserSignUp({ firstName: "", lastName: "", email: "", password: "" });

      toast.success("Register Succesfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row lg:flex-row items-start lg:items-center justify-start mt-16 lg:justify-center h-[90.8vh] max-w-[1728px] mx-auto">
        {loading && <div className="loader top-[45%] left-[45%] absolute z-5"></div>}
        {/* Left */}
        <div className="signupbg lg:w-[70%] h-[35vh] w-full lg:h-full bg-cover text-white"></div>
        {/* Right */}
        <div className="w-screen md:w-[30%] lg:w-[30%] flex items-center mt-5 lg:mt-0 md:mt-0 justify-center">
          <form onSubmit={submitHandler} className=" flex w-[80%] flex-col gap-5 text-lg bg-white">
            <h1 className="text-4xl font-bold">SignUp</h1>
            <lable>
              <h3>First Name<sup>*</sup></h3>
              <input
                type="text"
                onChange={(e) =>
                  setUserSignUp({ ...userSignup, firstName: e.target.value })
                }
                value={userSignup.firstName}
                placeholder="Enter First Name"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </lable>
            <lable>
              <h3>Last Name<sup>*</sup></h3>
              <input
                type="text"
                onChange={(e) =>
                  setUserSignUp({ ...userSignup, lastName: e.target.value })
                }
                value={userSignup.lastName}
                placeholder="Enter Last Name"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </lable>
            <lable>
              <h3>Email<sup>*</sup></h3>
              <input
                type="email"
                onChange={(e) =>
                  setUserSignUp({ ...userSignup, email: e.target.value })
                }
                value={userSignup.email}
                placeholder="Enter Email"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </lable>
            <lable className="relative">
              <h3>Password<sup>*</sup></h3>
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setUserSignUp({ ...userSignup, password: e.target.value })
                }
                value={userSignup.password}
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
            <button type="submit" className="py-3 px-2 text-white bg-green-700 rounded-sm">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
