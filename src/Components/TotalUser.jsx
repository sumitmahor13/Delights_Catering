import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TotalUser = () => {
  const { getAllUser } = useContext(AppContext);
  console.log(getAllUser);
  return (
    <>
      <div className="w-full overflow-x-auto mx-2">
        <h1 className="text-xl font-semibold text-gray-400 my-3">
          Dashboard &#62; <span className="text-green-700">Users</span>
        </h1>
        {/* table  */}
        <table className="w-full mt-3 text-left text-xs md:text-sm lg:text-md lg:text-md md:text-md border border-collapse sm:border-separate border-green-100 text-green-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >No.</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >Name</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >Email Address</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >User ID</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >Role</th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-200 text-slate-700 bg-green-100 font-bold fontPara"
              >Date</th>
            </tr>
            {getAllUser.map((value, index) => {
              return (
                <tr key={index} className="text-green-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500 ">
                    {index + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {value.firstName} {value.lastName}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500 cursor-pointer ">
                    {value.email}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500  cursor-pointer ">
                    {value.uid}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500  cursor-pointer ">
                    {value.role}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-200 stroke-slate-500 text-slate-500 cursor-pointer ">
                    {value.date}
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

export default TotalUser;
