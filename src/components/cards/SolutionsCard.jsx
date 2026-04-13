import React from 'react'
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

const SolutionsCard = ({ title, para, icon, theme="dark" }) => {
    const isLight = theme === "light";
    return (
        <div className="h-full">
            <div className={`h-full flex flex-col px-7 py-8 border transition-all duration-500 rounded-xl relative overflow-hidden group hover:-translate-y-2 ${isLight 
                ? 'bg-white border-navy-main/25 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)]' 
                : 'bg-navy-main border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]'}`}>
                
                {/* Accent line on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-primary/0 via-blue-primary/50 to-blue-primary/0`}></div>

                <div className={`${style.assetIcon} ${isLight ? 'text-blue-primary' : ''} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                    {icon}
                </div>
               <div className="text-left relative z-10 flex-1">
               <h1 className={`text-xl font-bold lg:pt-4 lg:pb-3 tracking-tight ${isLight ? 'text-navy-main' : 'text-white'}`}>
                    {title}
                </h1>
                <p className={`py-1 text-base font-medium leading-relaxed lg:pb-4 ${isLight ? 'text-[#4B5563]' : 'text-[#94949e]'}`}>
                    {para}
                </p>
               </div>
            </div>
        </div>
    )
}

export default SolutionsCard