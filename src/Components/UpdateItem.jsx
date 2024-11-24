import React, { useContext, useState } from "react";
import { app } from "../FirebaseConfig";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import UpdateImage from "../../public/Assets/Update.jpg"

import toast from "react-hot-toast";

const UpdateItem = () => {
  const { loading, setLoading, getData } = useContext(AppContext);

  const db = getFirestore(app);
  const location = useLocation();
  const navigate = useNavigate();

  const [itemName, setItemName] = useState(location.state.itemName);
  const [itemPrice, setItemPrice] = useState(location.state.itemPrice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateDoc(doc(db, "Items", location.state.id), {
        itemName: itemName,
        itemPrice: itemPrice,
      });
      getData();
      setLoading(false);
      toast.success("Update Successfully");
    } catch (error) {
      console.error(error);
    }
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <h1 className="text-xl font-semibold ml-2 text-gray-400 my-3">
          Dashboard &#62; <span className="text-green-700">Update Item</span>
        </h1>
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center bg-gray justify-around mx-2 h-full">
          {loading && <div className="loader absolute" />}
          <img src={UpdateImage} className="w-[52rem]"/>
          <form onSubmit={handleSubmit} className="flex w-[23rem] flex-col p-5 m-5 gap-5 text-lg bg-white">
            <label>
              <p>Item Name<sup>*</sup></p>
              <input
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                type="text"
                placeholder="Enter Item Name"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </label>
            <label>
              <p>Item Price<sup>*</sup></p>
              <input
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                type="number"
                placeholder="Enter Item Price"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </label>
            <button type="submit" className="py-3 px-2 text-white bg-green-700 rounded-sm">Update Item</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
