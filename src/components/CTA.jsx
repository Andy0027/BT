import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div>
            <div className="relative border border-[#2E5E9920] rounded-xl px-4 md:px-32 py-16 md:py-20 flex flex-col justify-center items-center text-center md:text-left overflow-hidden bg-blue-light-2">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-primary/10 rounded-full blur-[100px] -z-0"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-primary/5 rounded-full blur-[100px] -z-0"></div>

                <div className="flex flex-col md:flex-row w-full relative z-10 gap-12 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-navy-main leading-tight" data-aos="fade-up" data-aos-duration="1000">
                            Infrastructure, Security,<br/> Innovation
                        </h2>
                        <h2 className="text-center lg:text-start font-semibold text-xl lg:text-2xl text-[#2E5E99] mt-6" data-aos="fade-up" data-aos-duration="1200">
                            Performance You Can Trust
                        </h2>
                        <p className="text-lg sm:text-xl text-[#4B5563] mt-4 md:mt-6 max-w-lg" data-aos="fade-up" data-aos-duration="1300">
                            We're Experts, and Here's the Proof. Join 500+ enterprises scaling their cloud with confidence.
                        </p>
                        <Link to="/contact" className="mt-8 md:mt-12" data-aos="fade-up" data-aos-duration="1500">
                            <button className="relative group bg-[#2E5E99] text-white font-bold py-4 px-10 rounded-full border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-[#3b76bb] hover:shadow-[0_0_30px_rgba(46,94,153,0.6)] shadow-[0_0_15px_rgba(46,94,153,0.3)] flex items-center gap-3">
                                <span>Get Started</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center relative space-y-8">
                        {/* Stat 1 */}
                        <div className="w-full sm:w-[80%] md:w-[70%] h-auto md:h-[140px] bg-white border border-navy-main/30 flex flex-col p-5 items-center justify-center shadow-lg rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-left" data-aos-duration="1000">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-primary/5 rounded-full blur-2xl -z-0"></div>
                            <span className="text-3xl md:text-5xl font-semibold text-blue-primary drop-shadow-[0_4px_10px_rgba(46,94,153,0.1)] group-hover:scale-110 transition-transform duration-500 relative z-10">
                                99.9%
                            </span>
                            <h2 className="text-sm md:text-base text-center font-normal text-navy-main mt-2 tracking-tight relative z-10">
                                Uptime Guarantee for Your Infrastructure
                            </h2>
                        </div>

                        {/* Stat 2 */}
                        <div className="w-full sm:w-[80%] md:w-[85%] h-auto md:h-[140px] bg-white border border-navy-main/30 flex flex-col p-5 items-center justify-center shadow-lg rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-left" data-aos-duration="1200">
                            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-primary/5 rounded-full blur-2xl -z-0"></div>
                            <span className="text-3xl md:text-5xl font-semibold text-blue-primary drop-shadow-[0_4px_10px_rgba(46,94,153,0.1)] group-hover:scale-110 transition-transform duration-500 relative z-10">
                                24/7
                            </span>
                            <h2 className="text-sm md:text-base text-center font-normal text-navy-main mt-2 tracking-tight relative z-10">
                                Real-time Monitoring & Global Support
                            </h2>
                        </div>

                        {/* Stat 3 */}
                        <div className="w-full sm:w-[80%] md:w-[75%] h-auto md:h-[140px] bg-white border border-navy-main/30 flex flex-col p-5 items-center justify-center shadow-lg rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,36,64,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-left" data-aos-duration="1400">
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-primary/5 rounded-full blur-2xl -z-0"></div>
                            <span className="text-3xl md:text-5xl font-semibold text-blue-primary drop-shadow-[0_4px_10px_rgba(46,94,153,0.1)] group-hover:scale-110 transition-transform duration-500 relative z-10">
                                500+
                            </span>
                            <h2 className="text-sm md:text-base font-normal text-center text-navy-main mt-2 tracking-tight relative z-10">
                                Global Deployments Fully Managed
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA