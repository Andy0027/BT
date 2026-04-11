import React from 'react'
import { CiSettings } from 'react-icons/ci'

const SquareCard = ({ title, para, icon }) => {
  return (
    <div className='px-1 p-1 py-6 '>

        <div className=" ">
            
            <div className=" bg-navy-main  shadow-md text-xl  rounded-md text-blue-soft flex py-2 justify-center w-12 border border-[#FFFFFF0D]">
            {icon}
            </div>
            
           <div className="">
           <h2 className='text-2xl pt-5 pb-3 font-bold'>{title}</h2>
           <h3 className='text-base text-[#94949e] pr-7'>{para}</h3>
           </div>
        </div>
    </div>
  )
}

export default SquareCard