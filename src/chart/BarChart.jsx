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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#cbd5e1',
        font: { size: 10, weight: 'bold' }
      }
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#94a3b8', font: { size: 9 } }
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#94a3b8', font: { size: 9 } }
    }
  }
};

const labels = ['Region A', 'Region B', 'Region C'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Active Nodes',
      data: [18, 22, 25],
      backgroundColor: '#3B82F6',
      borderRadius: 6,
    },
    {
      label: 'Standby Nodes',
      data: [12, 10, 8],
      backgroundColor: '#1E293B',
      borderRadius: 6,
    },
  ],
};

export function BarChart() {
  return (
    <div className="w-full h-full p-4">
      <Bar options={options} data={data} />
    </div>
  );
}
