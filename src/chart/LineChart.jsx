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
  plugins: {
    legend: {
      position: 'top' ,
    },
 
  },
};

const labels = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'System Performance',
      data: [12, 19, 20, 27, 32, 40, 42],
      backgroundColor: 'rgba(46, 94, 153, 0.6)', // blue-primary with alpha
    },
  
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
