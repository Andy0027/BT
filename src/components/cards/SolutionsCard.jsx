import React from 'react'
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

const SolutionsCard = ({ title, para, icon, theme="dark" }) => {
    const isLight = theme === "light";
    return (
        <div>
            <div className={`px-6 py-6 border transition-all shadow-sm rounded-lg ${isLight ? 'bg-white border-gray-200 hover:shadow-lg hover:shadow-blue-primary/10 text-[#0D2440]' : 'bg-navy-main border-[#FFFFFF0D] group hover:text-white hover:shadow-md hover:shadow-blue-primary/20'}`}>
                <div className={`${style.assetIcon} ${isLight ? 'text-blue-primary' : ''}`}>
                    {icon}
                </div>
               <div className="py-4 lg:py-2 text-left">
               <h1 className={`text-xl font-bold lg:pt-7 lg:pb-3 ${isLight ? 'text-[#0D2440]' : 'text-[#F7F7F8]'}`}>
                    {title}
                </h1>
                <p className={`py-1 pr-4 text-[17px] font-medium lg:pb-7 ${isLight ? 'text-gray-600' : 'text-[#94949e]'}`}>
                    {para}
                </p>
               </div>
                {/* <Link className="border-[2px] border-[#94949e] font-medium text-sm px-3 py-1 rounded-lg transition delay-150 duration-300 linear text-[#F7F7F8]">
 Know More
 </Link> */}
            </div>
        </div>
    )
}

export default SolutionsCard