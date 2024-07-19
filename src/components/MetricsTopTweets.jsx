'use client'
import { useState, useEffect, Suspense } from "react";
import {getMetricTopTweets} from "@/lib/apiService"

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import TabsTopTweets from "./TabsTopTweets";


export default function MetricsTopTweets({ idMetricas }) {

  const [metricsData, setMetricsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  

  /*El useEffect se usa para recorrer el array de metricas, por cada uno de los ids se llama a la función getMetrics, 
  se obtienen los datos y esos datos se guardan en el estado metricsData. 
  Se usa Promise.all para que se completen todas las solicitudes.
  Se usa filter() para evitar los casos que devuelva null.
  */
  useEffect(() => {
    const fetchAllMetrics = async () => {
      setLoading(true);
      const metricsPromises = idMetricas.map(id=> getMetricTopTweets(id, 'user_posts'));
      const metricsPromisesUserFollowers = idMetricas.map(id=> getMetricTopTweets(id, 'user_followers'));
      const metricsPromisesPost = idMetricas.map(id=> getMetricTopTweets(id, 'posts'));

      await Promise.all([metricsPromises, metricsPromisesPost, metricsPromisesUserFollowers])
      .then(
        (values) => {
          setMetricsData(values);
        }
     )
     setLoading(false);
    };

    fetchAllMetrics();
  }, [idMetricas]);

  if (loading) {
    return <SkeletonCard/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="grid w-full lg:grid-cols-1 lg:grid-rows-1 gap-4 grid-cols-1 grid-rows-1">
        <Suspense fallback={<SkeletonCard />}>
            <TabsTopTweets metricsData={metricsData} idMetrics={idMetricas}/>
        </Suspense>
      </div>
    </>
  );
}
