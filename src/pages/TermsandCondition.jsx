import React from "react";

import { BsDot } from "react-icons/bs";

import { Link } from "react-router-dom";

function TermsAndUse() {
  return (
    <>
      <div className="min-h-screen bg-navy-main bg-scroll py-12 px-6 sm:px-12 lg:px-32 text-white overflow-hidden">
        {/* Radial gradient background effect */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center -top-20">
            <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-primary/30 via-navy-main to-navy-main rounded-full blur-3xl opacity-60" />
          </div>
          <div className="flex flex-col relative z-40 pt-24 lg:pt-32 max-w-5xl mx-auto">
              <div className="flex justify-center text-center">
                <h2 className="mb-5  text-center md:text-5xl text-3xl font-medium text-white">
                 Terms and Conditions
                </h2>
              </div>
              <div className="text-base sm:text-lg font-medium mt-8 tracking-tight mb-8 text-gray-300">
                Brilliant Technologies ("Company," "we," "us," or "our") is dedicated to providing high-quality services while ensuring transparency in our operations. These Terms and Conditions outline the rules and regulations for the use of our website <a href="https://www.brilliantweb.us" className="text-blue-primary underline">(www.brilliantweb.us)</a> and all related services.
              </div>
              <div className="text-sm sm:text-lg font-normal tracking-tight mb-5 text-gray-400">
                By using our Services, you agree to these Terms and Conditions. If you do not agree, please do not use our Services.
                <div className=" mt-10">
                  <button className="text-lg rounded-full px-8 py-3 bg-blue-primary text-white border border-blue-primary/50 shadow-lg shadow-blue-primary/20 hover:bg-blue-soft hover:shadow-blue-primary/40 hover:-translate-y-1 transition-all duration-300 font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
        </div>


        <div className="max-w-5xl mx-auto py-12 relative z-40">
          <div className="lg:mx-0">
            <ul>
              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  1. ACCEPTANCE OF TERMS
                </h1>
                <p className="text-md lg:text-lg  text-[#c9c9d2] lg:py-3 py-1">
                  By accessing or using our Services, you
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Confirm that you are at least 18 years old (or the legal
                    age of majority in your jurisdiction).
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Acknowledge that you have read and understood these
                    Terms and agree to be bound by them.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Agree to comply with all applicable laws, regulations,
                    and industry standards when using our Services.
                  </p>
                </div>
                <p className="text-[#c9c9d2]">
                  
                  If you are using the Services on behalf of an
                  organization, you represent and warrant that you have the
                  authority to bind that organization to these Terms.
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white]  ">
                  2. MODIFICATIONS TO TERMS
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  Brilliant Technologies may modify, update, or revise these
                  Terms at any time. If changes occur, we will notify users
                  by:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Posting updates on this page.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Sending an email notification if applicable.
                  </p>
                  <p className="text-[#c9c9d2]">
                    
                    Your continued use of our Services after any
                    modifications constitutes acceptance of the updated
                    Terms.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  3. USE OF OUR SERVICES
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  When using our Services, you agree NOT to:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Use the Services for any illegal, fraudulent, or
                    unauthorized purpose.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Copy, modify, distribute, or resell any part of our
                    Services without permission.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Attempt to interfere with or disrupt the Services,
                    servers, or networks.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Access or attempt to access another user’s account
                    without authorization.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Use automated systems (e.g., bots, scrapers) to collect
                    data from our Services.
                  </p>
                  <p className="text-[#c9c9d2]">
                    
                    We reserve the right to suspend or terminate your access
                    if we determine you have violated these Terms.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  4. USER ACCOUNTS & SECURITY
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  To access certain features, you may be required to create
                  an account. When registering:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You must provide accurate and complete information.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You are responsible for maintaining the security of your
                    account credentials.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You must notify us immediately if you suspect
                    unauthorized access to your account.
                  </p>
                  <p className="text-[#c9c9d2]">
                    
                    We are not responsible for losses caused by unauthorized
                    account use if it results from your failure to safeguard
                    credentials.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  5. INTELLECTUAL PROPERTY RIGHTS
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  All content on our website and Services, including but not
                  limited to:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Text, graphics, images, software, and code
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Trademarks, service marks, and logos
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Proprietary technologies and algorithms
                  </p>
                  <p className="text-[#c9c9d2]">
                    
                    These are owned or licensed by Brilliant Technologies and
                    protected under U.S. and international copyright laws.
                  </p>
                </div>

                <div>
                  <h1 className="font-semibold text-[#c9c9d2] mt-3">
                    🔹 Restrictions on Use:
                    <span className="block text-[#c9c9d2] font-normal">
                      You may not reproduce, copy, distribute, or modify our
                      content without prior written permission.
                    </span>
                  </h1>
                  <h1 className="font-semibold text-[#c9c9d2] mt-2">
                    🔹 Limited License:
                    <span className="block text-[#c9c9d2] font-normal">
                      Brilliant Technologies grants you a non-exclusive,
                      revocable license to use our Services for personal or
                      business use. This does not transfer ownership rights.
                    </span>
                  </h1>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  6. THIRD-PARTY SERVICES & LINKS
                </h1>
                <p className="my-2 text-[#c9c9d2]">
                  Our Services may contain links to third-party websites,
                  products, or services. We do not endorse or control
                  third-party content, and we are not responsible for any
                  damages or issues arising from external sites.
                </p>
                <p className="text-[#c9c9d2]">
                  We encourage users to review the terms & privacy policies
                  of any third-party services they access.
                </p>
              </li>

              <li className="mb-10 ">
                <h1 className="text-lg lg:text-2xl text-[#c9c9d2] font-bold ">
                  7. DISCLAIMERS & LIMITATIONS OF LIABILITY
                </h1>
                <h2 className="text-lg font-bold text-white pt-3">
                  7.1 &nbsp; Disclaimer of Warranties
                </h2>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  Brilliant Technologies PROVIDES ITS SERVICES “AS IS” AND “AS
                  AVAILABLE.” WE DO NOT GUARANTEE:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    That our Services will be error-free, uninterrupted, or
                    secure.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    That any content, information, or results obtained will
                    be accurate or reliable.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    That our software or systems are completely free from
                    vulnerabilities or cyber threats.
                  </p>
                </div>
                <h2 className="text-lg text-[#c9c9d2] font-bold pt-3">
                  7.2 &nbsp; Limitation of Liability
                </h2>
                <p className="text-[#c9c9d2]">
                  To the fullest extent permitted by law, Brilliant Technologies
                  Technologies will not be liable for
                </p>
                <p className="text-[#c9c9d2]">
                  ❌ Direct, indirect, incidental, special, or consequential
                  damages
                </p>
                <p className="text-[#c9c9d2]">
                  ❌ Loss of data, revenue, business, or profits
                </p>
                <p className="text-[#c9c9d2]">
                  ❌ Unauthorized access to user accounts or information
                </p>
                <p className="text-[#c9c9d2]">
                  Even if we were advised of the possibility of such
                  damages, our liability shall never exceed the amount paid
                  (if any) for our Services in the past 12 months.
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl  text-[white] font-bold ">
                  8. INDEMNIFICATION
                </h1>
                <p className="text-md text-[#c9c9d2] lg:text-lg  lg:py-3 py-1">
                  You agree to indemnify, defend, and hold harmless Brilliant Technologies
                  , its affiliates, directors, employees, and
                  agents from any claims, damages, liabilities, and legal
                  fees arising from:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Your violation of these Terms
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Your use or misuse of our Services
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    ✅ Any breach of applicable laws
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  9. GOVERNING LAW & DISPUTE RESOLUTION
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  These Terms are governed by the laws of the State of
                  [Insert State], USA, without regard to conflict of law
                  principles.
                </p>
                <div>
                  <h1 className="font-semibold text-[#c9c9d2] mt-3">
                    🔹 Dispute Resolution Process:
                    <span className="block text-[#bed3e0] font-normal">
                      Any disputes shall be resolved exclusively through
                      binding arbitration in [Insert State], except for
                      cases where:
                    </span>
                  </h1>
                </div>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You have violated our intellectual property rights.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    A legal or regulatory action requires a different
                    resolution process.
                  </p>
                  <p className="text-[#c9c9d2]">
                    YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS-ACTION
                    LAWSUITS AGAINST US.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  10. TERMINATION
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  We may suspend or terminate your access to our Services at
                  any time if:
                </p>
                <div>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You violate these Terms.
                  </p>
                  <p className=" flex  text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    You engage in activities that harm our company, users,
                    or infrastructure.
                  </p>
                  <p className=" flex text-[#c9c9d2] items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    We discontinue or modify the Services.
                  </p>
                  <p className="text-[#c9c9d2]">
                    Termination will not waive any rights or liabilities
                    accrued before the termination date.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg lg:text-2xl text-[white] font-bold ">
                  11. PRIVACY POLICY
                </h1>
                <p className="text-md lg:text-lg text-[#c9c9d2]  lg:py-3 py-1">
                  Your use of our Services is also governed by our
                  <Link
                    to="../privacy-policy"
                    className="text-blue-primary underline underline-offset-1"
                  >
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and protect your
                  data.
                </p>
              </li>
            </ul>
          </div>
        </div>


      </div>


    </>
  );
}

export default TermsAndUse;