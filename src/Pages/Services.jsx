import React from 'react'
import serviceData from "../data/ServiceData"

const OurServices = () => {
  return (
    <>
        <div className='flex-col text-center my-24 items-center justify-center max-w-[1728px] w-10/12 mx-auto bg-white'>
            <div className='uppercase'>What we do</div>
            <h1 className='text-5xl md:text-6xl lg:text-6xl mx-auto font-bold'><span className='text-green-700'>Premium</span> catering services</h1>
            <div className='flex flex-col flex-wrap mb-44 mt-10 md:flex-row lg:flex-row items-center justify-between gap-5 mx-auto'>
                {
                    serviceData.map((service,index)=>{
                        return(
                                <div key={index} className='flex flex-col lg:w-[25rem] gap-2'>
                                    <img src={service.imageUrl} className='cover'/>
                                    <h1 className='text-start text-2xl font-semibold'>{service.title}</h1>
                                    <p className='text-start'>{service.description}</p>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default OurServices