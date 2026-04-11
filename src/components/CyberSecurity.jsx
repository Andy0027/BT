import React from "react";
import graph from '../assets/images/org_graph.avif'
import CyberConstellation from "./CyberConstellation";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data3 = [
  { name: "", value: 400 },
  { name: "", value: 300 },
  { name: "", value: 500 },
  { name: "", value: 700 },
  { name: "", value: 700 },
  { name: "", value: 1000 },
];

const data1 = [
  { time: "Client", customers: 2 },
  { time: "Client", customers: 3 },
  { time: "Secure Pipe", customers: 3 },
  { time: "Host", customers: 4 },
  { time: "Auth Token", customers: 4 },
  { time: "Encrypted Tunnel", customers: 5 },
];

const backupData = [
  { name: 'Backup', value: 30 },
  { name: '', value: 30 },
  { name: 'Restore', value: 50 },
  { name: '', value: 50 },
  { name: 'Validate', value: 35 },
  { name: '', value: 35 },
  { name: 'Sanitize', value: 65 },
  { name: '', value: 65 },
  { name: '', value: 45 },
  { name: 'Complete', value: 45 },
  { name: '', value: 15 },
  { name: '', value: 15 },
  { name: '', value: 70 },
];

export default function Cybersecurity() {
  const data = [
    { name: "Incident Response", value: 48345 },
    { name: "Reduced Risk", value: 42000 },
    { name: "Behavioral Analysis", value: 45798 },
  ];
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="min-h-auto text-[#0D2440] flex flex-col px-6 sm:px-10 md:px-20 lg:px-32 items-center justify-center py-24 border-b border-[#2E5E9910] bg-[#E7F0FA]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[#0D2440] text-3xl md:text-4xl font-bold pt-3 pb-3">Enterprise-Grade Security for Your Infrastructure</h2>
        <h2 className="text-xl md:text-2xl font-semibold text-[#2E5E99] pt-2">Advanced Protection for the Modern Cloud</h2>
        <p className="text-[#334155] text-base md:text-lg font-normal text-center pt-5 px-2 lf:px-32">Protect your systems with advanced security protocols and real-time threat monitoring.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#E7F0FA] border border-[#2E5E9920] rounded-md px-6 md:px-10 mt-10 py-10 gap-6 md:gap-8 w-full" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0D2440]">Cloud Security <span className="text-blue-primary">Solutions</span></h2>
          <h3 className="mt-4 text-[#334155] text-base md:text-xl font-normal">Protect your cloud environments with advanced security frameworks and compliance-driven safeguards.</h3>
        </div>
        <div className="bg-[#0D2440] p-4 rounded-xl h-[350px] relative overflow-hidden border border-[#2E5E9920]">
          <CyberConstellation />
          
          {/* Tag 1: Data Security - Left */}
          <div className="absolute left-[10%] top-[25%] flex flex-col items-center animate-pulse">
            <span className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider mb-2 drop-shadow-lg scale-75 md:scale-100">Data Security</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#2E5E99] flex items-center justify-center shadow-[0_0_20px_rgba(46,94,153,0.5)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2E5E99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="w-[1.5px] h-10 md:h-14 bg-gradient-to-t from-[#2E5E99] to-transparent mt-1"></div>
          </div>

          {/* Tag 2: IAM Governance - Center Top */}
          <div className="absolute left-[40%] top-[10%] flex flex-col items-center animate-pulse" style={{ animationDelay: "0.5s" }}>
            <span className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider mb-2 drop-shadow-lg scale-75 md:scale-100">IAM Governance</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#2E5E99] flex items-center justify-center shadow-[0_0_20px_rgba(46,94,153,0.5)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2E5E99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="w-[1.5px] h-8 md:h-10 bg-gradient-to-t from-[#2E5E99] to-transparent mt-1"></div>
          </div>

          {/* Tag 3: Phishing Security - Right Top */}
          <div className="absolute right-[10%] top-[15%] flex flex-col items-center animate-pulse" style={{ animationDelay: "1s" }}>
            <span className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider mb-2 drop-shadow-lg scale-75 md:scale-100">Phishing Security</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#2E5E99] flex items-center justify-center shadow-[0_0_20px_rgba(46,94,153,0.5)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2E5E99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="w-[1.5px] h-10 md:h-14 bg-gradient-to-t from-[#2E5E99] to-transparent mt-1"></div>
          </div>

          {/* Tag 4: Threat Intelligence - Right Bottom */}
          <div className="absolute right-[30%] top-[60%] flex flex-col items-center animate-pulse" style={{ animationDelay: "1.5s" }}>
            <span className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider mb-2 drop-shadow-lg scale-75 md:scale-100">Threat Intel</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#2E5E99] flex items-center justify-center shadow-[0_0_20px_rgba(46,94,153,0.5)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2E5E99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="w-[1.5px] h-8 md:h-10 bg-gradient-to-t from-[#2E5E99] to-transparent mt-1"></div>
          </div>

          {/* Tag 5: DDoS Protection - Left Bottom */}
          <div className="absolute left-[25%] top-[70%] flex flex-col items-center animate-pulse" style={{ animationDelay: "2s" }}>
            <span className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider mb-2 drop-shadow-lg scale-75 md:scale-100">DDoS Protection</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#2E5E99] flex items-center justify-center shadow-[0_0_20px_rgba(46,94,153,0.5)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2E5E99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="w-[1.5px] h-6 md:h-8 bg-gradient-to-t from-[#2E5E99] to-transparent mt-1"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-6 w-full">
      <div className="w-full lg:w-1/2 px-6 md:px-10 bg-[#E7F0FA] border border-[#2E5E9920] rounded-md" data-aos="fade-up" data-aos-duration="1300">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl text-[#0D2440]">Threat Detection & <span className="text-blue-primary">Prevention</span></h2>
            <h3 className="text-[#334155] text-base md:text-xl font-normal">Stay ahead of cyber threats with proactive monitoring and real-time defense.</h3>
          </div>
          <div className="h-[300px]">
            <div className="bg-white/50 text-[#0D2440] p-6 rounded-xl border border-[#2E5E9910]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Identify threats:</h2>
                <button className="bg-white text-[#0D2440] text-sm px-3 py-1 rounded-md border border-[#2E5E9920]">All time</button>
              </div>
              {data.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{item.name}</span>
                    <span className="font-medium">{item.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-blue-primary h-full rounded-full" style={{ width: `${(item.value / maxValue) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 md:px-10 bg-[#E7F0FA] border border-[#2E5E9920] rounded-md" data-aos="fade-up" data-aos-duration="1300">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl text-[#0D2440]">Data Protection & <span className="text-blue-primary">Encryption</span></h2>
            <h3 className="text-[#334155] text-base md:text-xl font-normal">Secure sensitive information with cutting-edge encryption and access control strategies</h3>
          </div>
          <div className="h-[300px]">
            <div className="bg-white/50 p-4 rounded-xl shadow-sm border border-[#2E5E9910] w-full">
              <div className="text-[#0D2440] text-lg font-semibold mb-2 text-center">Secure communication</div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data1}>
                  <XAxis dataKey="time" stroke="#8884d8" />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: "#1f1f2e", border: "none" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#fff" }} />
                  <Line type="monotone" dataKey="customers" stroke="#2E5E99" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-6 w-full">
        <div className="w-full lg:w-1/2 px-6 md:px-10 bg-[#E7F0FA] border border-[#2E5E9920] rounded-md" data-aos="fade-up" data-aos-duration="1700">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl text-[#0D2440]">Backup & <span className="text-blue-primary">Disaster Recovery</span></h2>
            <h3 className="text-[#334155] text-base md:text-xl font-normal">Ensure business continuity with automated backups and rapid failover recovery systems.</h3>
          </div>
          <div className="lg:h-[240px] rounded-xl my-4 lg:mt-9 p-5 bg-white/50 border border-[#2E5E9910]">
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={backupData}>
                <defs>
                  <linearGradient id="colorBackup" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E5E99" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2E5E99" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="stepAfter" dataKey="value" stroke="#2E5E99" fillOpacity={1} fill="url(#colorBackup)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
            <span className="grid  grid-cols-5 text-center text-[10px] md:text-sm text-[#94949e] mt-2">
              <p>Backup</p>
              <p>Restore</p>
              <p>Validate</p>
              <p>Sanitize</p>
              <p>Complete</p>
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 md:px-10 bg-[#E7F0FA] border border-[#2E5E9920] rounded-md" data-aos="fade-up" data-aos-duration="1700">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl text-[#0D2440]">Access Control & <span className="text-blue-primary">IAM</span></h2>
            <h3 className="text-[#334155] text-base md:text-xl font-normal">Manage identities and enforce strict access policies with granular control.</h3>
          </div>
          <div className="h-[240px] rounded-xl my-4 bg-white/50 border border-[#2E5E9910]">
            <div className="w-full p-4">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data3}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#2E5E99" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}