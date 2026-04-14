import React, { useRef, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaHandshake, FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { Send } from "lucide-react";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formBtnText, setFormBtnText] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormBtnText("Submitting...");

    const obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      console.log("Form Submitted successfully!", obj);
      setFormBtnText("Message Sent!");
      e.target.reset();
    } catch (err) {
      console.log(err);
      setFormBtnText("Error Try Again");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormBtnText("Send Message");
      }, 3000);
    }
  };

  return (
    <section className="bg-[#E7F0FA] min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background Decorations */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-soft/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-40 pt-24 lg:pt-28 pb-20 px-6 sm:px-12 lg:px-32">
        
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">

          <h1 className="text-3xl md:text-5xl font-semibold text-[#0D2440] leading-tight mb-4">
             Connect With Our <br /> <span className="text-blue-primary">Expert Team</span>
          </h1>
          <p className="text-base text-gray-600 font-medium leading-relaxed">
            Have a question? Our team is here to 
            provide the technical clarity you need.
          </p>
        </div>

        {/* Main Content: Info + Form */}
        <div className="h-auto flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto px-6 sm:px-6 md:px-16 lg:px-32 pt-0 py-8 bg-[#E7F0FA] text-[#0D2440] relative">
          
          {/* Left: Contact Info Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4" data-aos="fade-right">
             {[
               { icon: <BiSupport className="text-2xl" />, title: "Technical Support", desc: "For technical queries", email: "support@brilliantweb.us" },
               { icon: <FaHandshake className="text-2xl" />, title: "Partnerships", desc: "Collaboration opportunities", email: "support@brilliantweb.us" },
               { icon: <FaRegEnvelope className="text-2xl" />, title: "General Enquiries", desc: "For anything else", email: "support@brilliantweb.us" }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-primary/5 flex items-center justify-center text-blue-primary mb-3">
                     {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0D2440] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs font-medium mb-2">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="text-blue-primary font-bold text-xs hover:underline">{item.email}</a>
               </div>
             ))}
          </div>

          {/* Right: Premium Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white relative" data-aos="fade-left">
             <div className="absolute top-0 right-0 p-6 opacity-5">
                <Send className="w-24 h-24 text-[#0D2440]" />
             </div>
             <h2 className="text-2xl font-bold text-[#0D2440] mb-1">Send us a message</h2>
             <p className="text-gray-500 text-sm font-medium mb-8">We typically respond within 24 hours.</p>
 
             <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Full Name</label>
                      <input 
                        ref={nameRef} 
                        required 
                        type="text" 
                        placeholder="Johnny Bravo" 
                        className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium" 
                      />
                   </div>
                   <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Email Address</label>
                      <input 
                        ref={emailRef} 
                        required 
                        type="email" 
                        placeholder="johnny@example.com" 
                        className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium" 
                      />
                   </div>
                </div>
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Your Message</label>
                   <textarea 
                     ref={messageRef} 
                     required 
                     placeholder="Tell us about your project or enquiry..." 
                     className="w-full px-5 py-3.5 h-28 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium resize-none" 
                   />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className={`w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 border ${isSubmitting ? 'bg-blue-soft border-blue-soft/30' : 'bg-[#0D2440] border-white/10 shadow-xl hover:bg-blue-primary hover:border-blue-primary/50 hover:shadow-blue-primary/30'}`}
                >
                  {formBtnText}
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
             </form>
          </div>
        </div>



      </div>
    </section>
  );
}

export default Contact;