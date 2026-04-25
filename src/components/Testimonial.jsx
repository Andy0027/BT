import { useEffect, useRef } from "react";
import { testimonial } from "../data/Alldata";

export default function Testimonial() {
  const scrollRef = useRef(null);
  const speed = 1;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += speed;

          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-transparent px-4 sm:px-6 lg:px-24 pt-10 pb-6 sm:pt-16 sm:pb-10">
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-400 pb-2 lg:whitespace-nowrap"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Performance, Savings, Success – <span className="text-white">Hear it from those who built with us</span>
        </h2>
        <p
          className="text-slate-400 text-base sm:text-lg pt-4 sm:pt-5 max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          We're trusted by industry leaders and startups alike. Our clients' stories of infrastructure transformation and operational excellence speak for themselves.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="mt-10 flex justify-center overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll py-10 scrollbar-hide px-1 sm:px-2 w-full max-w-[95%]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonial.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 min-w-[280px] sm:min-w-[320px] md:min-w-[400px] max-w-[90vw] p-8 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full object-cover"
                />
                <div className="text-left">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.name}
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base px-1 sm:px-2 font-medium leading-relaxed">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for WebKit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}