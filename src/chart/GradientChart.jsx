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

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Backup A',
      data: [12, 19, 40, 55, 62],
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96, 165, 250, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Backup B',
      data: [19, 25, 45, 49, 52],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    },
  ],
};

export function GradientChart() {
  return (
    <div className="w-full h-full p-4">
      <Line options={options} data={data} />
    </div>
  );
}
