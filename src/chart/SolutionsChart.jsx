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

const labels = ['', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Status 1',
      data: [12, 19, 20],
      backgroundColor: 'rgb(242, 113, 40)',
    },
    {
      label: 'Status 2',
      data: [12, 19, 20],
      backgroundColor: 'rgba(247, 247, 250)',
    },
  ],
};

export function SolutionsChart() {
  return <Bar options={options} data={data} />;
}