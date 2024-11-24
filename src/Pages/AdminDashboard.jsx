import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RxCalendar } from "react-icons/rx";
import { BiUser, BiMessage  } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { MdOutlineFormatListNumbered, MdDashboard } from "react-icons/md";

const Dashboard = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between max-w-[1728px] mt-16 overflow-x-hidden mx-auto'>
        <div className='hidden lg:block md:block h-[100vh] w-[35%] md:w-[13%] lg:w-[13%] text-sm lg:text-lg md:text-md p-3 bg-green-700'>
          <Link to=""><h3 className='pb-1 text-white'>Item List</h3></Link>
          <Link to="/admin-dashboard/addItem"><h3 className='pb-1 text-white'>Add Items</h3></Link>
          <Link to="/admin-dashboard/total-order"><h3 className='pb-1 text-white'>Total Order</h3></Link>
          <Link to="/admin-dashboard/total-user"><h3 className='pb-1 text-white'>Total User</h3></Link>
          <Link to="/admin-dashboard/queries"><h3 className='pb-1 text-white'>Queries</h3></Link>
        </div>
        
        <div className='h-[100vh] w-[100%] md:w-[87%] lg:w-[87%]'>
          <Outlet/>
        </div>

        
        
       {/* Mobile Menu */}
          <div>
            <div onClick={()=>{setOpen(false)}} className={`lg:hidden md:hidden fixed text-2xl p-3 rounded-full ${open ? 'bottom-[21rem]': 'bottom-4'} transition-all duration-300 ease-in-out  right-4 text-white bg-green-700`}>
              <Link to=""><MdOutlineFormatListNumbered /></Link>
            </div>
            <div onClick={()=>{setOpen(false)}} className={`lg:hidden md:hidden fixed text-2xl p-3 rounded-full ${open ? 'bottom-[17rem]': 'bottom-4'} transition-all duration-300 ease-in-out  right-4 text-white bg-green-700`}>
              <Link to="/admin-dashboard/addItem"><GrAdd /></Link>
            </div>
            <div onClick={()=>{setOpen(false)}} className={`lg:hidden md:hidden fixed text-2xl p-3 rounded-full ${open ? 'bottom-[13rem]': 'bottom-4'} transition-all duration-300 ease-in-out  right-4 text-white bg-green-700`}>
              <Link to="/admin-dashboard/total-order"><RxCalendar /></Link>
            </div>
            <div onClick={()=>{setOpen(false)}} className={`lg:hidden md:hidden fixed text-2xl p-3 rounded-full ${open ? 'bottom-[9rem]': 'bottom-4'} transition-all duration-300 ease-in-out  right-4 text-white bg-green-700`}>
              <Link to="/admin-dashboard/total-user"><BiUser /></Link>
            </div>
            <div onClick={()=>{setOpen(false)}} className={`lg:hidden md:hidden fixed text-2xl p-3 rounded-full ${open ? 'bottom-[5rem]': 'bottom-4'} transition-all duration-300 ease-in-out  right-4 text-white bg-green-700`}>
              <Link to="/admin-dashboard/queries"><BiMessage /></Link>
            </div>
        </div>

        <div className='lg:hidden md:hidden fixed text-2xl p-3 rounded-full bottom-4 right-4 text-white bg-green-700'>
          <MdDashboard onClick={()=>setOpen(!open)} />
        </div>

        
      </div>
    </>
  )
}

export default Dashboard