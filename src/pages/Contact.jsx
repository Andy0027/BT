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
      // Simulating API call for visual feedback
      await new Promise(resolve => setTimeout(resolve, 1500));
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

      <div className="relative z-40 pt-32 pb-20 px-6 sm:px-12 lg:px-32">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-blue-primary/10 text-blue-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-primary/20">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D2440] leading-tight mb-6">
             Connect With Our <br /> <span className="text-blue-primary">Expert Team</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Have a question about our cloud solutions? Our dedicated team is here to 
            provide the technical clarity and support you need to scale efficiently.
          </p>
        </div>

        {/* Main Content: Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-7xl mx-auto">
          
          {/* Left: Contact Info Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6" data-aos="fade-right">
             {[
               { icon: <BiSupport className="text-3xl" />, title: "Technical Support", desc: "For technical queries & troubleshooting", email: "support@brilliantweb.us" },
               { icon: <FaHandshake className="text-3xl" />, title: "Partnerships", desc: "Explore collaboration opportunities", email: "support@brilliantweb.us" },
               { icon: <FaRegEnvelope className="text-3xl" />, title: "General Enquiries", desc: "For anything else on your mind", email: "support@brilliantweb.us" }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-primary/5 flex items-center justify-center text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-colors mb-4">
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2440] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-3">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="text-blue-primary font-bold text-sm hover:underline">{item.email}</a>
               </div>
             ))}
          </div>

          {/* Right: Premium Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-white relative" data-aos="fade-left">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Send className="w-32 h-32 text-[#0D2440]" />
             </div>
             <h2 className="text-3xl font-extrabold text-[#0D2440] mb-2">Send us a message</h2>
             <p className="text-gray-500 font-medium mb-10">We typically respond within 24 business hours.</p>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0D2440] ml-1">Full Name</label>
                      <input 
                        ref={nameRef} 
                        required 
                        type="text" 
                        placeholder="Johnny Bravo" 
                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium" 
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0D2440] ml-1">Email Address</label>
                      <input 
                        ref={emailRef} 
                        required 
                        type="email" 
                        placeholder="johnny@example.com" 
                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium" 
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-[#0D2440] ml-1">Your Message</label>
                   <textarea 
                     ref={messageRef} 
                     required 
                     placeholder="Tell us about your project or enquiry..." 
                     className="w-full px-6 py-4 h-40 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none text-[#0D2440] font-medium resize-none" 
                   />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className={`w-full py-5 rounded-xl font-extrabold text-white text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-blue-soft' : 'bg-[#0D2440] hover:bg-blue-primary hover:shadow-blue-primary/30'}`}
                >
                  {formBtnText}
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
             </form>
          </div>
        </div>

        {/* Locations Section */}
        <section className="mt-40 bg-[#0D2440] rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-white border border-white/5 shadow-2xl">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
           
           <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="w-full lg:w-1/2" data-aos="fade-up">
                 <h2 className="text-blue-soft text-sm font-bold tracking-widest uppercase mb-4">OUR LOCATIONS</h2>
                 <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 text-white">
                    Planning a visit? <br />
                    Stay connected globally.
                 </h2>
                 <p className="text-lg text-gray-300 font-medium leading-relaxed pr-0 lg:pr-12">
                   Whether you're attending a workshop, meeting our consultants, or 
                   just dropping by, we're ready to welcome you at any of our global nodes.
                 </p>
              </div>

              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { city: "Dallas, TX, USA", time: "Mon-Fri 8 AM - 5 PM (EST)" },
                   { city: "Toronto, ON, Canada", time: "Mon-Fri 8 AM - 5 PM (EST)" },
                   { city: "New Delhi, India", time: "Mon-Fri 8 AM - 5 PM (IST)" }
                 ].map((loc, idx) => (
                   <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 150}>
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-blue-primary/20 rounded-lg text-blue-soft">
                            <IoLocationOutline size={20} />
                         </div>
                         <h4 className="font-bold text-lg">{loc.city}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                         <MdAccessTime size={18} />
                         <span>{loc.time}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </section>
  );
}

export default Contact;