import React from "react";
import Pie from "../chart/Pie";
// import { motion } from "framer-motion";

const ScrollAnimation = ({title,spanTitle,para,chartItem,text}) => {
  return (
    // <motion.div
    //   className="rounded-lg "
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ duration: 0.8 }}
    // >
   
    // </motion.div>
        <div className=" bg-[#E7F0FA] rounded-lg px-5 py-3  lg:py-7 lg:px-8">
        <h1 className="text-[22px] font-bold text-navy-main" data-aos="fade-up"
            data-aos-duration="1200">
         {title} <span className="text-blue-primary">{spanTitle} <br/><span>{text}</span></span>
        </h1>
       <p className="text-md text-[#61616b] pt-3" data-aos="fade-up"
           data-aos-duration="1300">
        {para}
       </p>
       <div className="bg-[#FFFFFF] rounded-lg p-6 mt-7">
      
             <div className="w-full h-44 flex justify-center" data-aos="fade-up"
           data-aos-duration="1500">
           {chartItem}
             </div>
           
       
       </div>
     </div>
  );
};

export default ScrollAnimation;
