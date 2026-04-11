import React from "react";
import { Link } from "react-router-dom";
import style from '../../styles/card.module.css'

function AssetCard({ title, para, icon, btnText = "Explore More" }) {
  return (
    <Link className="">
      <div className=" px-6 py-6  bg-[#0D2440] border border-[#ffffff1a] group hover:text-white hover:shadow-md transition-all hover:shadow-blue-primary/20 shadow-sm rounded-lg">
        <div className={`${style.assetIcon}`}>
          {icon}
        </div>
        <div className="py-5 ">
        <h1 className="text-xl font-bold text-[#F7F7F8] lg:pt-7 pb-3">
          {title}
        </h1>
        <p className=" text-[#94949e] text-[17px] font-medium lg:pb-7">
          {para}
        </p>
        </div>
        <Link to="../contact" className="border-[2px] border-[#94949e] font-medium text-sm px-3 py-1 rounded-lg transition delay-150 duration-300 linear text-[#F7F7F8]">
          {btnText}
        </Link>
      </div>
    </Link>
  );
}

export default AssetCard;
