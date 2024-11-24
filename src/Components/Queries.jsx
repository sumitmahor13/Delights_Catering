import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { app } from "../FirebaseConfig";
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import NoQuery from "../../public/Assets/NoQuery.jpg"

const Queries = () => {
  const db = getFirestore(app);  //instance of firestore
  const [queryData, setQueryData] = useState([]);

  const deleteQuery = async (id) => {
        try {
            await deleteDoc(doc(db, "Queries", id))
            getQueries();
            
        } catch (error) {
            console.log(error)
        }
    toast.success("Query Remove Successfully")
  }

  const getQueries = async () => {
    const docSnap = await getDocs(collection(db, "Queries"));
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    setQueryData(data);

  };

  useEffect(() => {
    getQueries();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        {/* text  */}
        <h1 className="text-xl font-semibold ml-2 text-gray-400 my-3">
          Dashboard &#62; <span className="text-green-700">Queries</span>
        </h1>
      </div>
      {
        queryData.length > 0 ? <div className="flex gap-5 justify-evenly gap-y-8 flex-wrap m-5">
        {/* Query Card */}
        {queryData.map((query, index) => {
          return (
            <div key={index} className="relative w-[25rem] h-[30rem] overflow-y-scroll overflow-x-hidden rounded-sm text-white bg-zinc-900 p-5">
              <div onClick={()=>{deleteQuery(query.id)}} className=" text-red-600 cursor-pointer text-xl absolute right-5">
                <RiDeleteBinLine />
              </div>
              <h3>
                <span className="font-bold">From:</span>{" "}
                <span className="text-green-700">{query.email}</span>
              </h3>
              <h3 className="mt-1">
                <span className="font-bold">Subject:</span>{" "}
                <span className="text-blue-700">
                  {query.subject}
                </span>
              </h3>
              <p className="text-justify mt-2">
                <span className="font-bold">Message: </span>{query.message}
              </p>
            </div>
          );
        })}
      </div>
      : 
      <div className='w-full h-[70vh] flex justify-center items-center'>
        <img src={NoQuery} className='md:w-[35%] lg:w-[35%]'/>
      </div>
      }
      
    </>
  );
};

export default Queries;
