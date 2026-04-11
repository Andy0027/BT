import React from "react";
import graph from '../assets/images/org_graph.avif'
import cyber from '../assets/images/cyber_video.mp4'
import {
  LineChart,
  Line,
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
  { time: "Sender", customers: 2 },
  { time: "Sender", customers: 3 },
  { time: "Encryption ", customers: 3 },
  { time: "Receiver", customers: 4 },
  { time: "Private Key", customers: 4 },
  { time: " Secure Channel", customers: 5 },
];

const data2 = [
  { month: "Nov", value: 30000 },
  { month: "Dec", value: 40000 },
  { month: "Jan", value: 30000 },
  { month: "Feb", value: 25765, event: "New AI models" },
  { month: "Mar", value: 30000 },
  { month: "Apr", value: 40000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white text-sm p-2 rounded shadow">
        <p>{payload[0].value.toLocaleString()}</p>
        {payload[0].payload.event && <p className="text-[#94949e]">{payload[0].payload.event}</p>}
      </div>
    );
  }
  return null;
};

export default function Cybersecurity() {

  const data = [
    { name: "Incident Response", value: 48345 },
    { name: "Reduced Risk", value: 42000 },
    { name: "Behavioral Analysis", value: 45798 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value));
  return (
    <div className="min-h-auto bg-[#0D0D17] text-white flex flex-col px-32 items-center justify-center  py-24 border-b-[0.7px] border-[#ffffff39]" >
      <div className="flex flex-col items-center">
          <h2
            className="text-[#fff] text-2xl font-medium"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {/* Cybersecurity */}
          </h2>
          <h2
            className="text-white text-4xl font-bold pt-3 pb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
          >
           Cybersecurity That Shields Your Business—
          </h2>
          <h2
            className="text-2xl font-semibold text-white pt-2"
            data-aos="fade-up"
            data-aos-duration="900"
          >
           Because Threats Never Rest
          </h2>
          <p
            className="text-[#61616b] text-lg font-normal text-center pt-5 lg:py-4 lg:px-32 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Cyber threats are constantly evolving—your defenses should too. We provide proactive, adaptive cybersecurity solutions that secure your business today and in the future.
          </p>
        </div>
      <div className="grid md:grid-cols-2 bg-[#1b1b25] rounded-md px-10 mt-10  py-10 gap-8 h-[400px]"    data-aos="fade-up"
            data-aos-duration="1000">
        <div className="flex flex-col justify-center" >
          <h2 className="text-2xl md:text-4xl font-semibold">
            Cloud Security <span className="text-[#f27128]">Solutions</span>
          </h2>
          <h3 className="mt-4 text-[#94949e] text-xl md:text-xl pr-12 font-normal">
            Protect your cloud environments with advanced security frameworks and compliance-driven safeguards.
          </h3>
        </div>

        <div className="bg-[#ffffff08] p-4  rounded-xl ">
          <div className="flex justify-between items-center mb-4">
          </div>
          <video
          src={cyber}
          autoPlay
          loop
          muted
          playsInline
          className="h-[300px] w-full object-cover"
        ></video>
        </div>
      </div>
      <div className=" h-[500px] flex py-4 gap-8 mt-4   w-full">
        <div className="w-1/2 px-10 bg-[#1b1b25]  rounded-md" data-aos="fade-up"
            data-aos-duration="1300">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl">Threat Detection & <span className="text-[#f27128]">Prevention</span></h2>
            <h3 className="mt-4 text-[#94949e] text-xl md:text-xl pr-12 font-normal">Stay ahead of cyber threats with proactive monitoring and real-time defense.</h3>
          </div>
          <div className=" h-[300px]">
            <div className="bg-[#ffffff08] text-white p-6 rounded-xl ">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Identify threats:</h2>
                <button className="bg-[#0D0D17] text-sm px-3 py-1 rounded-md">All time</button>
              </div>
              {data.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-800 h-4 rounded">
                    <div
                      className="bg-[#f27128] h-4 rounded"
                      style={{ width: `${(item.value / maxValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 px-10 bg-[#1b1b25] rounded-md" data-aos="fade-up"
            data-aos-duration="1300">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl">Data Protection & <span className="text-[#f27128]">Encryption</span></h2>
            <h3 className="mt-4 text-[#94949e] text-xl md:text-xl pr-12 font-normal">Secure sensitive information with cutting-edge encryption and access control strategies</h3>
          </div>
          <div className=" w-full  h-[300px]">
            <div className="bg-[#ffffff08] p-4 rounded-xl shadow-md w-full ">
              <div className="text-white text-lg font-semibold mb-2">Secure communication</div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data1} className="text-white">
                  <XAxis dataKey="time" stroke="#8884d8" />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1f1f2e", border: "none" }}
                    labelStyle={{ color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#ff6a00"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[500px] flex py-4 gap-8   w-full">
        <div className="w-1/2  px-10 bg-[#1b1b25] rounded-md" data-aos="fade-up"
            data-aos-duration="1700">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl">Incident Response & <span className="text-[#f27128]">Recovery</span></h2>
            <h3 className="mt-4 text-[#94949e] text-xl md:text-xl pr-12 font-normal">Minimize downtime and recover quickly with expert-led threat mitigation and response strategies.</h3>
          </div>
          <div className=" h-[240px] rounded-xl p-5 bg-[#ffffff08]">
            <img src={graph} alt="" className="pt-9" />
            <span className="flex  justify-around mt-3 text-sm text-[#94949e]">
              <p>Preparation</p>
              <p>Recovery</p>
              <p>Detection</p>
              <p>Eradication</p>
              <p>Post-Incident</p>
            </span>
          </div>
        </div>
        <div className="w-1/2 px-10 bg-[#1b1b25] rounded-md" data-aos="fade-up"
            data-aos-duration="1700">
          <div className="py-5">
            <h2 className="py-5 font-bold text-2xl">Penetration Testing & <span className="text-[#f27128]">Vulnerability Assessment</span></h2>
            <h3 className="mt-4 text-[#94949e] text-xl md:text-xl pr-12 font-normal">Identify security gaps before hackers do with in-depth testing and risk analysis.</h3>
          </div>
          <div className=" h-[240px] rounded-xl  bg-[#ffffff08]">
            <div className="w-full  p-4  ">

              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data3}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#f27128" strokeWidth={3}  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}