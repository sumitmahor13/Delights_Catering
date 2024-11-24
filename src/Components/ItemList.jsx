import React, { useContext, useEffect } from "react";
import { app } from "../FirebaseConfig";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { AppContext } from "../context/AppContext";

const ItemList = () => {
  const { loading, itemData, getData } = useContext(AppContext);

  const db = getFirestore(app); //intance of firestore database
  const storage = getStorage(app); //intance of storage
  const navigate = useNavigate();

  // function for delete data
  const deleteData = async (id, itemName) => {
    try {
      //delete image
      const desertRef = ref(storage, `images/${itemName}`); //create refrence to delete file
      deleteObject(desertRef); //delete file
      //delete data
      await deleteDoc(doc(db, "Items", id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  //load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto ml-2">
        <h1 className="text-xl font-semibold text-gray-400 my-3">Dashboard &#62; <span className="text-green-500">Total Items</span></h1>
        <table className="w-full mt-3 text-left text-xs md:text-sm lg:text-md lg:text-md md:text-md border border-collapse sm:border-separate border-green-300 text-green-700">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 text-center text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >No.</th>
              <th
                scope="col"
                className="h-12 px-5 text-md text-center border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Image</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Item Name</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Category</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Item Price</th>
              <th
                scope="col"
                className="h-12 px-6 text-center text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Update</th>
              <th
                scope="col"
                className="h-12 px-6 text-center text-md border-l first:border-l-0 border-green-300 text-slate-700 bg-green-100 font-bold fontPara"
              >Delete</th>
            </tr>
            {itemData.map((item, index) => {
              return (
                <tr key={index} className="text-green-300">
                  <td className="h-12 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 ">
                    {index + 1}
                  </td>
                  <td className="h-12 w-24 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <img src={item.imageUrl} className="lg:h-24 lg:w-24"></img>
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                    {item.itemName}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                    {item.category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                    ₹ {item.itemPrice.toLocaleString('en-IN')}
                  </td>
                  <td className="h-12 text-center text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                    <button className='bg-green-600 rounded-sm text-md px-3 py-2 text-white' onClick={()=>{navigate('/admin-dashboard/updateItem',{state:item})}}>Update</button>
                  </td>
                  <td className="h-12 text-center text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                    <button className='bg-red-600 rounded-sm text-md px-3 py-2 text-white' onClick={()=>{deleteData(item.id, item.itemName)}}>Delete</button>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemList;
