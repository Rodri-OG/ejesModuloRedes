'use client'
import { useState, useEffect } from 'react';
import SkeletonCard from "./SkeletonCard";
import { getMetricDataSerie } from "@/lib/apiService.js"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChartMetric({ idMetricas }) {

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
      const firstMetric = metricsData[0];
      if (firstMetric && firstMetric.tweet_source) {
        const tweetSources = firstMetric.tweet_source;
        const labels = Object.keys(tweetSources);
        const data = Object.values(tweetSources);
        const colors = [
          '#F47E36', '#497B8E', '#EDD789', '#676767', '#D49587',
          '#A8D5E2', '#FF6F61', '#6B5B95', '#88B04B', '#D65076',
          '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335', '#BC243C',
          '#DD4124', '#009473', '#DD4124', '#D4A5A5', '#00A9E0',
          '#FA9A85', '#F7CAC9', '#92A8D1', '#F4A6A6', '#CE3175'
        ];

        const datasets = [{
          label: 'Tweet Sources',
          data: data,
          backgroundColor: colors.slice(0, data.length),
          borderWidth: 1,
        }];

        setDataChart({
          labels: labels,
          datasets: datasets,
        });
      }
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
