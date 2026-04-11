import React from 'react'
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

const SolutionsCard = ({ title, para, icon }) => {
    return (
        <div>
            <div className=" px-6 py-6 bg-navy-main border border-[#FFFFFF0D] group hover:text-white hover:shadow-md transition-all hover:shadow-blue-primary/20 shadow-sm rounded-lg">
                <div className={`${style.assetIcon}`}>
                    {icon}
                </div>
               <div className="py-4 lg:py-2 text-left">
               <h1 className="text-xl font-bold text-[#F7F7F8] lg:pt-7 lg:pb-3">
                    {title}
                </h1>
                <p className=" text-[#94949e] py-1 pr-4  text-[17px] font-medium lg:pb-7">
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