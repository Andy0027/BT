import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const labels = ['Region A', 'Region B', 'Region C'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Active Nodes',
      data: [18, 22, 25],
      backgroundColor: '#2E5E99', // blue-primary
    },
    {
      label: 'Standby Nodes',
      data: [12, 10, 8],
      backgroundColor: '#0D2440', // navy-main
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
