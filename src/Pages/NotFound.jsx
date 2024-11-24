import React from 'react'
import NotFoundimg from "../../public/Assets/NotFound.jpg"

const NotFound = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <img src={NotFoundimg} className='w-[80%] lg:w-[40%] md:w-[40%] mt-10'/>
      </div>
    </>
  )
}

export default NotFound