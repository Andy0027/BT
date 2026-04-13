import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md'


const PartnerCard = ({icon, title , heading}) => {
    return (
        <div className="w-full md:w-[33%] py-10 h-auto p-8 rounded-2xl bg-[#0D2440] border border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-primary/10 rounded-full blur-3xl -z-0 group-hover:bg-blue-primary/20 transition-colors duration-500"></div>
            <div className="text-4xl text-blue-primary mb-6 transition-transform duration-500 group-hover:scale-110 relative z-10">{icon}</div>
            <h2 className='text-2xl font-bold mt-2 py-2 text-white tracking-tight relative z-10'>{title}</h2>
            <h3 className='py-2 pr-4 text-base text-[#94949e] font-medium leading-relaxed relative z-10'>{heading}</h3>
        </div>
    )
}

export default PartnerCard