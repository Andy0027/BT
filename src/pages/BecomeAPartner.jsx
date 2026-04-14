import React, { useRef, useState } from "react";
import { Handshake, Send, CheckCircle, ArrowRight } from "lucide-react";

function BecomeAPartner() {
  const [formBtnText, setFormBtnText] = useState("Submit Application");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormBtnText("Processing...");
	
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send application.");
      }

      setIsSuccess(true);
      setFormBtnText("Application Sent!");
    } catch (err) {
      console.log(err);
      setFormBtnText("Error Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#E7F0FA] flex items-center justify-center px-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-xl border border-white" data-aos="zoom-in">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-[#0D2440] mb-4">Application Received!</h2>
          <p className="text-gray-600 font-medium mb-10 text-lg">
            Thank you for your interest in partnering with Brilliant Technologies. 
            Our partnership team will review your application and reach out within 48 business hours.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-10 py-4 bg-[#0D2440] text-white rounded-full font-bold border border-white/10 hover:bg-blue-primary hover:border-blue-primary/50 hover:shadow-lg hover:shadow-blue-primary/20 transition-all duration-300 shadow-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#E7F0FA] min-h-screen relative overflow-hidden pt-24 lg:pt-28 pb-12">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-blue-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/2 -left-48 w-[500px] h-[500px] bg-blue-soft/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-40 px-6 sm:px-12 lg:px-32 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
             <span className="px-4 py-2 bg-blue-primary/10 text-blue-primary rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                Partnership Program 2026
             </span>
             <h1 className="text-3xl md:text-5xl font-semibold text-[#0D2440] leading-[1.1] mb-4">
                Grow Your Business <br />
                <span className="text-blue-primary text-2xl md:text-4xl">With Brilliant Technologies</span>
             </h1>
             <p className="text-base text-gray-600 font-medium leading-relaxed mb-6 pr-0 lg:pr-12">
                Join our ecosystem. We provide the tools and 
                infrastructure you need to deliver world-class cloud 
                solutions to your clients.
             </p>
             
             <ul className="space-y-4 mb-10">
                {[
                  "Co-selling and high-margin revenue shares",
                  "Dedicated technical account management",
                  "Early access to product roadmaps",
                  "Joint marketing and lead generation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#0D2440] font-bold text-sm">
                     <div className="p-1 bg-blue-primary/20 rounded-full text-blue-primary">
                        <CheckCircle size={14} />
                     </div>
                     {item}
                  </li>
                ))}
             </ul>

             <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0D2440] flex items-center justify-center text-white">
                   <Handshake size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-[#0D2440] text-sm">Need Help?</h4>
                   <p className="text-xs text-gray-500 font-medium">support@brilliantweb.us</p>
                </div>
             </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
             <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
                
                <h2 className="text-2xl font-bold text-[#0D2440] mb-6">Apply to Join</h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Full Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none font-medium text-[#0D2440]" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Company Email</label>
                        <input required name="email" type="email" placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none font-medium text-[#0D2440]" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Company Name</label>
                        <input required name="company" type="text" placeholder="Tech Solutions Inc." className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none font-medium text-[#0D2440]" />
                      </div>
                   </div>

                   <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Partnership Interest</label>
                      <select required name="interest" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none font-medium text-[#0D2440] appearance-none">
                         <option value="">Select Partnership Type</option>
                         <option value="growth">Growth-Driven Partnerships</option>
                         <option value="tech">Strategic Technology Alliances</option>
                         <option value="cloud">Cloud & Infrastructure Partners</option>
                         <option value="consult">Consulting & Integration Partners</option>
                         <option value="research">Innovation & Research Collaboration</option>
                         <option value="security">Security & Compliance Partners</option>
                      </select>
                   </div>

                   <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0D2440] ml-1 uppercase tracking-wider">Why join us?</label>
                      <textarea name="message" placeholder="Briefly describe your goals..." className="w-full px-5 py-3.5 h-24 rounded-xl bg-gray-50 border-none focus:ring-4 focus:ring-blue-primary/10 transition-all outline-none font-medium text-[#0D2440] resize-none" />
                   </div>

                   <button 
                     disabled={isSubmitting}
                     type="submit" 
                     className="w-full py-4 bg-[#0D2440] hover:bg-blue-primary text-white rounded-xl font-bold text-base border border-white/10 hover:border-blue-primary/50 shadow-xl hover:shadow-blue-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                   >
                     {formBtnText}
                     <ArrowRight size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                   </button>
                </form>

                <p className="text-center text-[10px] text-gray-400 mt-6 font-medium">
                   By submitting, you agree to our <a href="/privacy-policy" className="underline hover:text-blue-primary">Privacy Policy</a>
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BecomeAPartner;
