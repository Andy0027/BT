import React from 'react'
import { CiSettings } from 'react-icons/ci'

const SquareCard = ({ title, para, icon }) => {
  return (
    <div className='px-1 py-4 group'>
        <div className="bg-white border border-navy-main/30 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="bg-navy-main shadow-lg text-2xl rounded-xl text-blue-soft flex py-3 justify-center w-14 border border-white/10 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>
            
           <div className="relative z-10">
           <h2 className='text-2xl font-bold text-navy-main py-2 tracking-tight'>{title}</h2>
           <h3 className='text-base text-[#4B5563] font-medium leading-relaxed pr-4'>{para}</h3>
           </div>
        </div>
    </div>
  )
}

export default SquareCard