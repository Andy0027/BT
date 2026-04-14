import React from "react";
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

function AssetCard({ title, para, icon, btnText = "Explore More" }) {
  return (
    <Link className="block h-full">
      <div className="h-full p-8 bg-white border border-white group hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(13,36,64,0.12)] transition-all duration-500 shadow-sm rounded-[2rem] relative overflow-hidden flex flex-col min-h-[380px] sm:min-h-[420px]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-primary via-blue-soft to-blue-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`${style.assetIcon} mb-8 transform group-hover:scale-110 transition-transform duration-500 shrink-0`}>
          {icon}
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-[#0D2440] mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-[#4B5563] text-base font-medium leading-relaxed pb-8">
            {para}
          </p>
        </div>
        <div className="mt-auto">
          <Link to="../contact" className="inline-flex items-center justify-center border-2 border-blue-primary font-bold text-sm px-7 py-3 rounded-xl transition-all duration-300 text-blue-primary hover:bg-blue-primary hover:text-white hover:shadow-lg hover:shadow-blue-primary/20">
            {btnText}
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default AssetCard;
