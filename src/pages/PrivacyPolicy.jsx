import React from "react";

import { BsDot } from "react-icons/bs";

import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-navy-main bg-scroll py-12 px-6 sm:px-12 lg:px-32 text-white overflow-hidden">
        {/* Radial gradient background effect */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center -top-20">
            <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-primary/30 via-navy-main to-navy-main rounded-full blur-3xl opacity-60" />
          </div>
          <div className="flex flex-col relative z-40 pt-32 lg:pt-40 max-w-5xl mx-auto">
              <div className="flex justify-center text-center">
                <h2 className="mb-5  text-center md:text-5xl text-3xl font-medium text-white">
                  Privacy Policy
                </h2>
              </div>
              <div className="text-base sm:text-lg font-medium mt-8 tracking-tight mb-8 text-gray-300">
                Brilliant Technologies ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website <a href="https://www.brilliantweb.us" className="text-blue-primary underline">(www.brilliantweb.us)</a> or use our services (collectively, the "Services").
              </div>
              <div className="text-sm sm:text-lg font-normal tracking-tight mb-5 text-gray-400">
                By using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
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
                <h1 className="text-lg lg:text-2xl text-white font-bold ">
                  1. INFORMATION WE COLLECT
                </h1>
                <h2 className="text-md lg:text-lg text-[#c9c9d2]  pt-3">
                  1.1 &nbsp; Information You Provide Directly
                </h2>
                <p className="text-md lg:text-lg text-[#c9c9d2]  py-3">
                  We collect the following types of information:
                </p>

                <div className="text-[#c9c9d2]">
                  <div className="flex pb-2">
                    <BsDot size={30} />
                    <p>
                      <b>Personal Information – </b> Name, email, phone
                      number, company name, and address.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>Account Credentials – </b>If you create an account,
                      we collect login details such as usernames and
                      passwords.
                    </p>
                  </div>

                  <div className="flex ">
                    <BsDot size={30} />
                    <p className="">
                      <b>Payment Information – </b>If you purchase a product
                      or service, we collect billing and payment details via
                      secure third-party payment processors.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p className="">
                      <b>Customer Support Data – </b>
                      Communications, inquiries, and feedback shared with
                      our support team.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-[#c9c9d2] pt-3">
                  1.2 &nbsp; Information Collected Automatically
                </h2>
                <p className="text-[#c9c9d2]">
                  When you visit our website, we may automatically collect:
                </p>
                <div className="text-[#c9c9d2]">
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>Device & Usage Data – </b>
                      IP address, browser type, operating system, and
                      referring URLs.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p className=" ">
                      <b>Cookies & Tracking Data – </b>
                      We use cookies, pixels, and analytics tools to track
                      browsing behavior and preferences.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-[#c9c9d2] pt-3">
                  1.3 &nbsp; We may collect information from:
                </h2>
                <p className="text-[#c9c9d2]">
                  When you visit our website, we may automatically collect:
                </p>

                <div className="text-[#c9c9d2]">
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Business partners and resellers that offer our products.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Advertising networks that track your interactions with
                    our ads.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Publicly available sources and industry databases.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  2. HOW WE USE YOUR INFORMATION
                </h1>
                <p className="text-lg text-[#c9c9d2]  py-3">
                  We use your information for the following purposes:
                </p>
                <div className="text-[#c9c9d2]">
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>To Provide Services –</b>
                      Deliver products, process transactions, and provide
                      customer support.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>To Improve User Experience – </b>
                      Personalize content, optimize website performance, and
                      enhance security.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>To Communicate with You – </b>
                      Send updates, marketing messages, and responses to
                      inquiries.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>To Comply with Legal Obligations –</b>
                      Maintain records, prevent fraud, and respond to law
                      enforcement requests.
                    </p>
                  </div>

                  <p>
                    📍<b> Opt-Out:</b> You may opt out of marketing emails
                    at any time using the “unsubscribe” link.
                  </p>
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  3. SHARING & DISCLOSURE OF INFORMATION
                </h1>
                <p className="text-[#c9c9d2]">
                  We do not sell your personal data. However, we may share
                  information in the following situations:
                </p>
                <h2 className="text-lg text-[#c9c9d2]  pt-3">
                  3.1 &nbsp; With Service Providers
                </h2>
                <p className="text-lg text-[#c9c9d2] py-3">
                  We share information with third-party vendors who help us
                  operate, such as:
                </p>

                <div className="text-white">
                  <div className="flex">
                    <BsDot size={30} />
                    <p className="">
                      Payment processors <b>(Stripe, PayPal)</b>
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p className="">
                      Cloud storage and hosting services{" "}
                      <b>(AWS, Google Cloud)</b>
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p className="">
                      Analytics providers <b>(Google Analytics, Hotjar)</b>
                    </p>
                  </div>
                </div>

                <h2 className="text-lg text-[#c9c9d2]  pt-3">
                  3.2 &nbsp; For Legal & Security Reasons
                </h2>
                <p className="text-[#c9c9d2]">
                  We may disclose information:
                </p>
                <div className="text-[#c9c9d2]">
                  <div className="flex">
                    <BsDot size={30} />
                    <p className=" ">
                      If required by
                      <b>law, court order, or government regulation.</b>
                    </p>
                  </div>

                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      To investigate{" "}
                      <b>fraud, security breaches, or policy violations.</b>
                    </p>
                  </div>

                  <div className="flex">
                    <BsDot size={30} />
                    <p className=" ">
                      To protect the <b>rights, property, or safety</b> of
                      Brilliant Technologies or others.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg text-[#c9c9d2]  pt-3">
                  3.3 &nbsp; In Business Transfers
                </h2>
                <p className="text-[#c9c9d2]">
                  If Brilliant Technologies is involved in a merger,
                  acquisition, or sale of assets, your data may be
                  transferred.
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  4. COOKIES & TRACKING TECHNOLOGIES
                </h1>
                <p className="text-lg text-[#c9c9d2]  py-3">
                  We use cookies and tracking tools to:
                </p>
                <div className="text-[#c9c9d2]">
                  <p className=" flex items-center">
                    ✅ Improve website functionality
                  </p>
                  <p className=" flex items-center">
                    ✅ Personalize content
                  </p>
                  <p className=" flex items-center">
                    ✅ Analyze website traffic
                  </p>
                  <h2 className="font-semibold py-3">Your Choices:</h2>
                  We are not responsible for losses caused by unauthorized
                  account use if it results from your failure to safeguard
                  credentials.
                </div>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  5. DATA SECURITY & RETENTION
                </h1>
                <p className="text-lg text-[#c9c9d2]  py-3">
                  We implement security measures to protect your data,
                  including:
                </p>
                <div className="text-[#c9c9d2]">
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>Encryption & Secure Servers –</b>
                      All sensitive data is encrypted and stored securely.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      <b>Access Controls – </b>
                      Only authorized personnel can access personal
                      information.
                    </p>
                  </div>
                  <div className="flex">
                    <BsDot size={30} />
                    <p>
                      {" "}
                      <b>Regular Security Audits – </b>
                      We conduct routine security checks to detect
                      vulnerabilities.
                    </p>
                  </div>
                </div>
                <p className="text-[#c9c9d2]">
                  {" "}
                  We retain your data only <b>as long as necessary</b> for
                  the purposes stated in this policy, unless a longer
                  retention period is required by law.
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  6. YOUR PRIVACY RIGHTS
                </h1>
                <p className="text-lg text-[#c9c9d2] py-3">
                  If you are a <b>California resident (CCPA)</b>, you have
                  the right to:
                </p>
                <h2 className="text-lg text-[#c9c9d2]  pt-3">
                  6.1 &nbsp; U.S. Privacy Laws (CCPA & Others)
                </h2>

                <div className="text-[#c9c9d2]">
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Request access to your personal data.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Request deletion of your data.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Opt out of data sharing for targeted advertising.
                  </p>
                </div>

                <h2 className="text-lg text-[#c9c9d2]  pt-3">
                  6.2 &nbsp; GDPR (For EU Visitors, If Applicable)
                </h2>
                <p className="text-[#bed3e0]">
                  If you are in the European Economic Area (EEA), you have
                  the right to:
                </p>
                <div className="text-white">
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Access, correct, or delete your personal data.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Restrict or object to data processing.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Withdraw consent for marketing communications.
                  </p>
                </div>
              </li>

              <li className="mb-10 text-[#c9c9d2]">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  7. THIRD-PARTY LINKS & SERVICES
                </h1>
                <p>
                  Our Services may link to third-party websites. We do not
                  control or endorse their content or privacy policies.{" "}
                  <b>
                    Your interactions with third-party sites are at your own
                    risk.
                  </b>
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  8. CHILDREN’S PRIVACY
                </h1>
                <p className="text-[#c9c9d2]">
                  Our Services <b>are not intended for children under 13</b>
                  . We do not knowingly collect data from minors. If you
                  believe a child has provided us with personal information,{" "}
                  <b>contact us immediately</b> to request deletion.
                </p>
              </li>

              <li className="mb-10">
                <h1 className="text-lg text-white lg:text-2xl font-bold ">
                  9. CHANGES TO THIS PRIVACY POLICY
                </h1>
                <p className="text-[#c9c9d2]">
                  We may update this Privacy Policy as needed. If changes
                  are significant, we will:
                </p>
                <div className="text-[#c9c9d2]">
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>{" "}
                    Post updates on this page.
                  </p>
                  <p className=" flex items-center">
                    <span>
                      <BsDot size={30} />
                    </span>
                    Notify you via email if applicable.
                  </p>
                </div>
                <p className="text-[#c9c9d2]">
                  Your continued use of our Services after changes means you
                  accept the revised policy.
                </p>
              </li>
            </ul>
          </div>
        </div>


      </div>


    </>
  );
}

export default PrivacyPolicy;