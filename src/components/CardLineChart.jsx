'use client'

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      stacked: false,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    },
    x: {
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }
  }
};

export default function CardLineChart({ dataChart }) {
    return (
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Line data={dataChart} options={options} />
        </div>
    );
}
