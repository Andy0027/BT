import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Increased Load", "Optimized", "Low Load"],
  datasets: [
    {
      data: [35, 45, 20],
      backgroundColor: [
        '#3B82F6', // Blue 500
        '#60A5FA', // Blue 400
        '#2563EB', // Blue 600
      ],
      hoverBackgroundColor: [
        '#2563EB',
        '#3B82F6',
        '#1D4ED8',
      ],
      borderWidth: 0,
    },
  ],
};

function Pie() {
  const options = {
    cutout: '65%',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#cbd5e1',
          font: {
            size: 10,
            weight: 'bold'
          },
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#fff',
        bodyColor: '#cbd5e1',
        borderColor: '#1e293b',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
      }
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="w-full h-full p-4">
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default Pie
