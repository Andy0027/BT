import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
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

const labels = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Performance',
      data: [12, 19, 20, 27, 32, 40, 42],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#3B82F6',
    },
  ],
};

export function LineChart() {
  return (
    <div className="w-full h-full p-4">
      <Line options={options} data={data} />
    </div>
  );
}
