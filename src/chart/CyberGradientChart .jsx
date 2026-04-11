import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 40, 55],
      borderColor: 'white',        // ✅ white line
      backgroundColor: 'white',    // ✅ needed for point fill
      fill: false,                 // ✅ no area fill
      tension: 0.4,                // optional: curve
    },
    {
      label: 'Dataset 2',
      data: [19, 25, 45, 49, 52, 56],
      borderColor: 'rgb(46, 94, 153)',    // primary blue line
      backgroundColor: 'rgb(242, 113, 40)',// point fill
      fill: false,                         // no area fill
      tension: 0.4,
    },
  ],
};

export function CyberGradientChart() {
  return <Line options={options} data={data} />;
}