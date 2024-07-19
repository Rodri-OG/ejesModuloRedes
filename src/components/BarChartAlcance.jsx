'use client'
import { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';
import {getMetricDataSerie} from '@/lib/apiService'

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function BarChartAlcance({ idMetricas }) {

  const [metricsData, setMetricsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: []
  });


  useEffect(() => {
    const fetchAllMetrics = async () => {
      setLoading(true);
      const metricsPromises = idMetricas.map(id => getMetricDataSerie(id));
      const allMetricsData = await Promise.all(metricsPromises);
      setMetricsData(allMetricsData);
      setLoading(false);
    };

    fetchAllMetrics();
  }, [idMetricas]);


  
  useEffect(() => {
    if (metricsData.length > 0) {
      const labels = metricsData.map((item) => {return item.nombre_metrica});
      
      const datasets = metricsData.map((metric, index) => {
        const dataMetric = metric.totales.alcance;
        const metricName = metric.nombre_metrica;
        const colors = [
          '#F47E36',
          '#497B8E',   
          '#EDD789',   
          '#676767',  
         '#D49587']

        return {
          label: metricName,
          data: [{key: metricName, value: dataMetric},],
          backgroundColor: `${colors[index]}`,
          borderWidth: 1,
          parsing: {
            xAxisKey: 'key',
            yAxisKey: 'value'
          }
        };
      });

      setDataChart({
        labels: labels,
        datasets,
      });
    }
  }, [metricsData]);

  if (loading) {
    return <SkeletonCard/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const options = {
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        color: "black",
        labels: {
          title: {
            font: {
              weight: "bold"
            }
          }
        },
        anchor: "end",
        align: "-90"
      },
      legend: {
        position: "top",
        labels: {
          boxHeight: 5,
          boxWidth: 5
        }
      }
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: true,
        }
      }
    }
  };

  return <Bar options={options} data={dataChart} />;
}
