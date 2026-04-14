import React from 'react'
import { CiSettings } from 'react-icons/ci'

const SquareCard = ({ title, para, icon, ...props }) => {
  return (
    <div className='px-1 py-4 group' data-aos={props['data-aos']} data-aos-duration={props['data-aos-duration']}>
        <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(13,36,64,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-primary via-blue-soft to-blue-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="bg-[#0D2440] shadow-lg text-2xl rounded-2xl text-blue-soft flex py-4 justify-center w-16 border border-white/10 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                {icon}
            </div>
            
           <div className="relative z-10">
           <h2 className='text-2xl font-bold text-[#0D2440] mb-3 tracking-tight'>{title}</h2>
           <p className='text-base text-gray-600 font-medium leading-relaxed'>{para}</p>
           </div>
        </div>
    </div>
  )
}

export default SquareCard