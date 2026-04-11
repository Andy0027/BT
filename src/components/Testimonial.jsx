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
    <section className="bg-[#E7F0FA] shadow-inner px-4 sm:px-6 lg:px-24 py-10 sm:py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-primary pb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Performance, Savings, Success –
        </h2>
        <h3
          className="text-xl sm:text-2xl font-semibold text-navy-main"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          Hear it from those who built with us
        </h3>
        <p
          className="text-[#61616b] text-sm sm:text-base pt-4 sm:pt-5"
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
              className="bg-[#F7F7F8] min-w-[280px] sm:min-w-[320px] md:min-w-[400px] max-w-[90vw] p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full object-cover"
                />
                <div className="text-left">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-black">
                    {item.name}
                  </h2>
                </div>
              </div>
              <p className="text-[#94949e] text-sm sm:text-base px-1 sm:px-2">
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