import React, { useState } from "react";
import ranImg from "../assets/images/software_development_team.png"

function Resources() {
  const [isBlog, setIsBlog] = useState(true);

  return (
    <main>
      <section>
        <div className="min-h-screen bg-navy-main lg:py-12 px-6 sm:px-6 md:px-12 lg:px-32 text-white relative">
          {/* Radial gradient background */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-primary/40 via-navy-main to-navy-main rounded-full blur-3xl opacity-60" />
          </div>

          {/* Heading */}
          <div className="pt-24 relative z-40">
            <h2 className="text-3xl sm:text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="300">
              Reputation Insights and Resources
            </h2>
            <h2 className="text-base sm:text-lg text-center text-[#c9c9d2] py-5" data-aos="fade-up" data-aos-duration="300">
              Expert advice, research, and tools to manage your online reputation
              <br className="hidden sm:block" /> Stay ahead of the curve with our latest insights.
            </h2>
          </div>

          {/* Blog Section */}
          <section>
            <div className="h-auto flex flex-col items-center relative z-40">
              <div className="flex flex-col lg:flex-row gap-8 pt-8 lg:pt-14 w-full">
                {(isBlog ? [
                  {
                    img: "https://img.freepik.com/premium-photo/professional-team-programmer-working-project-software-development-computer-it-company_229060-90.jpg",
                    title: "The Importance of Code Review in Software Development",
                    text: "Code review ensures code is readable, maintainable, and follows best practices.",
                    date: "March 20, 2025"
                  },
                  {
                    img: "https://cdn.prod.website-files.com/63e68240c81766f184041441/64541dcc1a2f50cd7f9789e2_Security-Awareness-for-Vulnerable-Employees.jpg",
                    title: "The Dangers of Unpatched Software: Why Updates Matter?",
                    text: "Outdated software can lead to malware infections and financial losses.",
                    date: "March 20, 2025"
                  },
                  {
                    img: ranImg,
                    title: "How to Prevent a Social Media Crisis from Happening?",
                    text: "Set up alerts for your brand name, competitors, and keywords.",
                    date: "March 20, 2025"
                  }
                ] : [
                  {
                    img: "https://tannergrey.com/wp-content/uploads/2023/10/10-Witty-Ways-To-Ask-For-A-Review-From-A-Customer.jpeg",
                    title: "Implement review response process and improve customer service.",
                    text: "Engage users and encourage positive reviews across platforms.",
                    date: "March 20, 2025"
                  },
                  {
                    img: "https://yellow.ai/wp-content/uploads/2024/01/Customer-service-strategy.webp",
                    title: "Analysis of threat actors, tactics, and motivations",
                    text: "Monitor network traffic for suspicious activity and block threats.",
                    date: "March 20, 2025"
                  },
                  {
                    img: "https://media.licdn.com/dms/image/v2/D4D12AQFgWovvAmRQhg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718257097544?e=2147483647&v=beta&t=2q-5G2pEdzM0DP4IzhurM3FqkW73-dJKA--g8Khdc3A",
                    title: "Metrics and statistics demonstrating the solution's impact",
                    text: "Improved efficiency, analytics, and measurable ROI.",
                    date: "March 20, 2025"
                  }
                ]).map((item, i) => (
                  <div key={i} className="w-full lg:w-[33%] h-auto p-5 bg-navy-main border border-[#FFFFFF0D] rounded-lg" data-aos="fade-up" data-aos-duration={1300 + i * 300}>
                    <div className="w-full h-[30vh] mb-4">
                      <img src={item.img} alt="blog" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h1 className="text-xl font-semibold text-white py-2">{item.title}</h1>
                    <p className="text-[#94949e] text-base font-light pb-3">{item.text}</p>
                    <p className="text-blue-primary text-sm">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Resources;
