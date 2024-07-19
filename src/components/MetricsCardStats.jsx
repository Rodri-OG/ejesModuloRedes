'use client'
import { useState, useEffect, Suspense } from "react";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import TabCardStats from "./TabCardStats";


export default function MetricsCardStats({ idMetricas }) {
  const [metricsData, setMetricsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  /*Función que obtiene los datos de cada metrica. Recibe el parametro id_metrica con el que hace la petición */
  async function getMetricDataToday(id_metrica) {
    try {
      const response = await fetch(`https://m.ejes.com/api/get_today/?id_metrica=${id_metrica}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { ...data, id_metrica };
    } catch (error) {
      setError(error);
      return null;
    }
  };


  /*El useEffect se usa para recorrer el array de metricas, por cada uno de los ids se llama a la función getMetrics, 
  se obtienen los datos y esos datos se guardan en el estado metricsData. 
  Se usa Promise.all para que se completen todas las solicitudes.
  Se usa filter() para evitar los casos que devuelva null.
  */
  useEffect(() => {
    const fetchAllMetrics = async () => {
      setLoading(true);
      const metricsPromises = idMetricas.map(id => getMetricDataToday(id));
      const allMetricsData = await Promise.all(metricsPromises);
      setMetricsData(allMetricsData.filter(data => data !== null));
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
      <div className="grid md:grid-cols-1 md:grid-rows-1 gap-4 grid-cols-1 grid-rows-1">
        {metricsData.length > 0 ? (
          <Suspense fallback={<SkeletonCard />}>
            <TabCardStats metricsData={metricsData} />
          </Suspense>
        ) : (
          <SkeletonCard/>
        )}
      </div>
    </>
  );
}
