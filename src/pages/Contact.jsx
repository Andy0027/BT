import React, { useRef, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);
  const [formBtnText, setFormBtnText] = useState("Submit")
  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormBtnText("Submitting...")
    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    try{
      const response = fetch("/api/contact", { method: "POST", body: JSON.stringify(obj), headers: {'Content-Type': "application/json"} });
      console.log("Form Submitted successfully!");
      setFormBtnText("Submitted")
      e.target.reset();
    }catch(err){
      console.log(err);
    }

    setTimeout(()=>{
      setFormBtnText("Submit")
    }, 2000)
  }


  return (
    <section>
      <div className="min-h-screen bg-navy-main py-12 px-6 sm:px-6 md:px-12 lg:px-32 text-white relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-60" />
        </div>

        <div className="pt-24 relative z-40">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center" data-aos="fade-up" data-aos-duration="300">
            Connect with us
          </h2>
          <h2 className="text-base sm:text-lg text-center text-[#c9c9d2] py-5" data-aos="fade-up" data-aos-duration="300">
            Feel free to reach out to us using the options below,
            <br className="hidden md:block" /> and our dedicated team will respond to your inquiries promptly.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row  relative z-40 my-12" data-aos="fade-up" data-aos-duration="400">
          <div className="flex-1 relative  overflow-hidden contact_bg min-[300px]:  lg:min-h-[634px]">
            <div className="absolute bottom-10 px-6">
              <h2 className="text-lg sm:text-xl font-semibold pb-6">
                This software simplifies the website building process,
                <br /> making it a breeze to manage our online presence.
              </h2>
              <p className="text-[#ccc]">Brilliant Technologies</p>
            </div>
          </div>

          <div className="flex-1 bg-navy-main shadow-md text-white px-6 sm:px-8 py-10 ">
            <h2 className="text-sm tracking-wide text-blue-soft">CONTACT US</h2>
            <p className="text-3xl font-bold py-4">How can we help?</p>
            <h2 className="text-[#94949e] text-base">
              Have a question? Fill out the form below, and we'll get back to you as soon as possible.
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input ref={nameRef} type="text" placeholder="Name" className="w-full px-4 py-4 rounded-lg focus:ring bg-navy-main border border-[#FFFFFF0D]" />
              <input ref={emailRef} type="text" placeholder="Email" className="w-full px-4 py-4 rounded-lg focus:ring bg-navy-main border border-[#FFFFFF0D]" />
              <textarea ref={messageRef} placeholder="Message" className="w-full px-4 py-4 h-40 rounded-lg focus:ring bg-navy-main border border-[#FFFFFF0D]" />
              <div className="text-center bg-blue-primary hover:bg-blue-soft transition py-3 rounded-lg">
                <button type="submit" className="text-white font-semibold">{formBtnText}</button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col   lg:flex-row justify-between gap-6 text-white mt-10">
          {[{
            icon: <BiSupport />, title: "Customer support", email: "support@brilliantweb.us"
          }, {
            icon: <FaHandshake />, title: "Clients & Partners", email: "support@brilliantweb.us"
          }, {
            icon: <BiSupport />, title: "Enquiries", email: "support@brilliantweb.us"
          }].map((item, index) => (
            <div key={index} className="w-full lg:w-[33%] flex gap-5 items-center" data-aos="fade-up" data-aos-duration={600 + index * 100}>
              <div className="flex items-center h-12 w-12 justify-center rounded-lg bg-[#FFFFFF0D]">
                <span className="text-2xl text-[#94949E]">{item.icon}</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <h2 className="text-sm text-[#94949E]">{item.email}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-auto w-full px-7 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-28 bg-navy-main border-t border-[#FFFFFF0D]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-3 h-auto lg:h-[50vh]">

          {/* Left Section */}
          <div
            className="w-full lg:w-1/2 h-auto lg:h-full lg:pt-16 pr-0 lg:pr-28"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="text-blue-soft text-sm">OUR LOCATIONS</h2>
            <h2 className="text-3xl sm:text-4xl font-bold lg:pt-8 text-white leading-tight py-3">
              Planning a visit? Here's our location
            </h2>
            <h3 className="text-[#94949E] text-base pr-0 lg:pt-8 lg:pr-14">
              Whether you're attending a scheduled meeting, workshop, or just
              dropping by, use the following directions to reach our office.
            </h3>

            {/* <div className="py-7">
              <h2 className="text-white text-base font-semibold">Address:</h2>
              <h3 className="text-base text-[#94949E]">
                Dallas, TX, USA, <br /> NY 10075, USA
              </h3>
            </div> */}
            {/* <div>
              <h2 className="text-white text-base font-semibold">Working hours</h2>
              <h3 className="text-base text-[#94949E]">Monday - Friday: 8AM - 5PM</h3>
            </div> */}
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:w-1/2 rounded-md h-auto lg:h-full"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 lg:gap-17 pt-10 lg:pt-14">

              {/* Box 1 */}
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-[#FFFFFF0D] p-4 rounded-lg text-white">
                  <div>
                    <div className="flex items-center pb-2">
                      <IoLocationOutline size={20} className="mr-2" />
                      <span className="mr-2">Dallas, TX, USA</span>
                    </div>
                    <div className="flex items-center ">
                      <MdAccessTime size={20} className="mr-2" />
                      <span>Mon-Fri 8 AM to 5 PM (EST)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="bg-[#FFFFFF0D] p-4 rounded-lg text-white">
                  <div>
                    <div className="flex items-center ">
                      <IoLocationOutline size={22} className="mr-2" />
                      <span className="mr-2">Toronto, ON, Canada</span>
                    </div>
                    <div className="flex items-center ">
                      <MdAccessTime size={20} className="mr-2" />
                      <span>Mon-Fri 8 AM to 5 PM (EST)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div data-aos="fade-up" data-aos-duration="1500">
                <div className="bg-[#FFFFFF0D] p-4 rounded-lg text-white">
                  <div>
                    <div className="flex items-center">
                      <IoLocationOutline size={22} className="mr-2" />
                      <span className="mr-2">New Delhi, India</span>
                    </div>
                    <div className="flex items-center ">
                      <MdAccessTime size={20} className="mr-2" />
                      <span>Mon-Fri 8 AM to 5 PM (IST)</span>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Contact;