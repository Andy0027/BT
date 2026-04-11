import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md'


const PartnerCard = ({icon, title , heading}) => {
    return (
        <div className="w-[33%] py-10 h-full p-4 rounded-md bg-[#0d0d17]">
            <div className=" text-3xl ">{icon}</div>
            <h2 className='text-2xl font-bold mt-2 py-2'>{title}</h2>
            <h3 className='py-2 pr-8 text-lg text-[#94949e]'>{heading}</h3>
        </div>
    )
}

export default PartnerCard