'use client';
import { useState, useEffect, Suspense } from "react";
import columns from "./columns";
import DataTable from "./DataTable";
import SkeletonCard from "./SkeletonCard";
import RangeButton from "./RangeButton";

export default function FollowPage({ metric }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [range, setRange] = useState(7); 
  const [metricName, setMetricName] = useState("");
  const [dateRange, setDateRange] = useState({ desde: "", hasta: "" });

  const getFormattedDate = (date) => {
    return date.toISOString().split('T')[0] + " " + date.toTimeString().split(' ')[0];
  };

  useEffect(() => {
    // Obtener nombre de la métrica del localStorage
    const user = JSON.parse(sessionStorage.getItem('user'));
    const metricData = user?.metricas?.find(m => m.id_metrica === metric);

    setMetricName(metricData ? metricData.nombre_metrica : "Métrica no encontrada");

    const fetchInitialTweets = async () => {
      const now = new Date();
      const pastDate = new Date(now);
      pastDate.setDate(now.getDate() - range);

      const desde = getFormattedDate(pastDate);
      const hasta = getFormattedDate(now);
      setDateRange({ desde: pastDate.toLocaleDateString('es-AR'), hasta: now.toLocaleDateString('es-AR') });

      try {
        const response = await fetch(`https://m.ejes.com/api/get_tweets_page/?id_metrica=${metric}&desde=${desde}&hasta=${hasta}&page=1`, {
          method: "GET",
          headers: {
            "Authorization": "Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data.results);

        fetchRemainingTweets(desde, hasta, data.results, 2);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    const fetchRemainingTweets = async (desde, hasta, initialItems, startPage) => {
      let allItems = [...initialItems];
      let page = startPage;
      let morePages = true;

      try {
        while (morePages) {
          const response = await fetch(`https://m.ejes.com/api/get_tweets_page/?id_metrica=${metric}&desde=${desde}&hasta=${hasta}&page=${page}`, {
            method: "GET",
            headers: {
              "Authorization": "Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9",
            },
          });

          if (response.status === 404) {
            morePages = false;
            continue;
          }

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (data.results.length > 0) {
            allItems = [...allItems, ...data.results];
            page += 1;
            setItems(allItems); 
          } else {
            morePages = false;
          }
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchInitialTweets();
  }, [metric, range]);

  const handleRangeChange = (value) => {
    setRange(parseInt(value, 10));
  };

  if (loading) {
    return <SkeletonCard />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#546E7A]">Seguimiento:</h2>
            <h2 className="text-2xl font-normal text-[#64748B]">{metricName}</h2>
          </div>
          <RangeButton onValueChange={handleRangeChange} />
        </div>
        <Suspense fallback={<SkeletonCard />}>
          {items.length > 0 && <DataTable data={items} columns={columns} dateRange={dateRange} metricName={metricName} />}
        </Suspense>
      </div>
    </>
  );
}
