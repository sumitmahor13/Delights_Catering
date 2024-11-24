import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../FirebaseConfig";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import AddImage from "../../public/Assets/Add.jpg"

const AddItem = () => {
  const db = getFirestore(app); //instance of firestore database
  const storage = getStorage(app); //instance of storage

  const [item, setItem] = useState({
    itemName: "",
    itemPrice: "",
    image: null,
    category: "",
  });
  const { loading, setLoading, categoryList } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        (item.itemName == "" || item.itemPrice == "" || item.image == null,
        item.category == "")
      ) {
        return toast.error("All Fields are required !");
      }
      setLoading(true);
      //for image
      const storageRef = ref(storage, `images/${item.itemName}`);
      await uploadBytes(storageRef, item.image); //upload image to storage
      const imgURL = await getDownloadURL(storageRef); //get the image Url

      // for Data
      const docRef = addDoc(collection(db, "Items"), {
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        imageUrl: imgURL,
        category: item.category,
      });

      setLoading(false);
      toast.success("Item Added Successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <h1 className="text-xl font-semibold ml-2 text-gray-400 my-3">
          Dashboard &#62; <span className="text-green-700">Add Item</span>
        </h1>
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center bg-gray justify-around mx-2 h-full">
          {loading && <div className="loader absolute" />}
          <img src={AddImage} className="w-[52rem]"/>
          <form onSubmit={handleSubmit} className="flex w-[23rem] flex-col p-5 m-5 gap-5 text-lg bg-white">
            <label>
              <p>Item Name<sup>*</sup></p>
              <input
                onChange={(e) => setItem({ ...item, itemName: e.target.value })}
                type="text"
                // required
                placeholder="Enter Item Name"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </label>
            <label>
              <p>Item Price<sup>*</sup></p>
              <input
                onChange={(e) =>
                  setItem({ ...item, itemPrice: e.target.value })
                }
                type="number"
                // required
                placeholder="Enter Item Price"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              />
            </label>
            <label>
              <p>Select Image<sup>*</sup></p>
              <input
                // onChange={handleFileChange}
                onChange={(e) => setItem({ ...item, image: e.target.files[0] })}
                type="file"
                required
                placeholder="Select Item Image"
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
                
              />
            </label>
            <label>
              <p>Select Category<sup>*</sup></p>
              <select
                required
                onChange={(e) => setItem({ ...item, category: e.target.value })}
                className="border-b-2 text-sm text-gray-500 w-full outline-none"
              >
                <option hidden>Select Category</option>
                {categoryList.map((category) => (
                  <option>{category}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="py-3 px-2 text-white bg-green-700 rounded-sm">Add Item</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
