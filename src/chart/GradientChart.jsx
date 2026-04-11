import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
      position: 'top'
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Incremental Backup',
      data: [12, 19, 40, 55, 62],
      backgroundColor: '#0D2440', // navy-main
    },
    {
      label: 'Full Backup',
      data: [19, 25, 45, 49, 52],
      backgroundColor: '#2E5E99', // blue-primary
    },
  ],
};

export function GradientChart() {
  return <Line options={options} data={data} />;
}
