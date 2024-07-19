'use client'
import { useState, Suspense, useEffect } from "react"
//Components
import CardStats from "./CardStats";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabCardStats({ metricsData }) {

  const [metrics, setMetrics] = useState([]);
  const [defaultTab, setDefaultTab] = useState('');

  useEffect(() => {
    setMetrics(metricsData);
    if (metricsData.length > 0) {
      setDefaultTab(metricsData[0]?.nombre_metrica);
    }
  }, [metricsData]);

  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        {defaultTab && (
          <Tabs defaultValue={defaultTab} className="grid grid-rows-[0.1fr_1fr] gap-4 w-full">
            <div className="row-start-1 row-end-2 w-full rounded-xl">
              <TabsList className="grid grid-cols-1 grid-rows-4 gap-4 h-full md:grid-cols-4 md:grid-rows-1 md:p-1 md:gap-2 rounded-xl">
                {metrics.map((item, index) => (
                  <TabsTrigger key={index} value={item?.nombre_metrica} className="flex w-full rounded-xl">
                    {item?.nombre_metrica}
                  </TabsTrigger>
                )).slice(0, 4)}
              </TabsList>
            </div>

            <div className="w-full p-4">
              {metrics.map((item, index) => (
                <TabsContent key={index} value={item?.nombre_metrica} className="p-4">
                  <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4 md:justify-center p-4">
                    <CardStats statNumber={item?.kpis?.posts.ultimas_24_hs} statPercent={item?.kpis?.posts.variacion} id_metrica={item?.id_metrica} nombreKpi="Posteos" />
                    <CardStats statNumber={item?.kpis?.users.ultimas_24_hs} statPercent={item?.kpis?.users.variacion} id_metrica={item?.id_metrica} nombreKpi="Usuarios" />
                    <CardStats statNumber={item?.kpis?.alcance.ultimas_24_hs} statPercent={item?.kpis?.alcance.variacion} id_metrica={item?.id_metrica} nombreKpi="Alcance" />
                    <CardStats statNumber={item?.kpis?.prints.ultimas_24_hs} statPercent={item?.kpis?.prints.variacion} id_metrica={item?.id_metrica} nombreKpi="Impactos" />
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </Suspense>
    </>
  );
}
