'use client'
import { useState, useEffect, Suspense } from 'react';
import SkeletonCard from "./SkeletonCard";
import { getMetricDataSerie } from "@/lib/apiService.js"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChartPrints({ idMetricas }) {

  const [metricsData, setMetricsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchAllMetrics = async () => {
      setLoading(true);
      try {
        const metricsPromises = idMetricas.map(id => getMetricDataSerie(id));
        const allMetricsData = await Promise.all(metricsPromises);
        setMetricsData(allMetricsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMetrics();
  }, [idMetricas]);

  useEffect(() => {
    if (metricsData.length > 0) {
      const labels = metricsData.map(item => item.nombre_metrica);
      const totalPrints = metricsData.reduce((acc, metric) => acc + metric.totales.prints, 0);
      const colors = [
        '#F47E36',
        '#497B8E',   
        '#EDD789',   
        '#676767',  
       '#D49587']

      const data = metricsData.map(metric => {
        const percentage = (metric.totales.prints / totalPrints) * 100;
        return percentage;
      });

      const datasets = [{
        label: 'Posts (%)',
        data: data,
        backgroundColor: metricsData.map((_, index) => `${colors[index]}`),
        borderWidth: 1,
      }];

      setDataChart({
        labels: labels,
        datasets: datasets,
      });
    }
  }, [metricsData]);

  if (loading) {
    return <SkeletonCard />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
  };


  return <div className="relative w-full h-full min-h-[300px] sm:min-h-[20rem] md:min-h-[20rem] lg:min-h-[20rem]">
  <Doughnut data={dataChart} options={options} />
</div>;
}
