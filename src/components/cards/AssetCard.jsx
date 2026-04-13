import React from "react";
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

function AssetCard({ title, para, icon, btnText = "Explore More" }) {
  return (
    <Link className="">
      <div className="px-6 py-6 bg-white border border-navy-main/30 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)] transition-all duration-500 shadow-sm rounded-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-primary/0 via-blue-primary/50 to-blue-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`${style.assetIcon} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
          {icon}
        </div>
        <div className="py-2 ">
        <h1 className="text-xl font-semibold text-navy-main lg:pt-4 pb-3 tracking-tight">
          {title}
        </h1>
        <p className=" text-[#4B5563] text-base font-medium leading-relaxed lg:pb-7">
          {para}
        </p>
        </div>
        <Link to="../contact" className="inline-flex items-center justify-center border-2 border-blue-primary font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 text-blue-primary hover:bg-blue-primary hover:text-white hover:shadow-lg hover:shadow-blue-primary/30">
          {btnText}
        </Link>
      </div>
    </Link>
  );
}

export default AssetCard;
