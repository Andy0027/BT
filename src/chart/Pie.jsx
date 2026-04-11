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
        '#2E5E99', // blue-primary
        '#7BA4D0', // blue-soft
        '#0D2440', // navy-main
      ],
      borderWidth: 1,
    },
  ],
};
function Pie() {
  return (
    <Doughnut data={data} />
  )
}

export default Pie
