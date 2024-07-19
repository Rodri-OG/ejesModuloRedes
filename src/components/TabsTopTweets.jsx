'use client'
import { useState, Suspense, useEffect } from "react"
//Components
import TopTweets from "./TopTweets";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsTopTweets({ idMetricas }) {

  const [metrics, setMetrics] = useState([]);
  const [defaultTab, setDefaultTab] = useState('');

  useEffect(() => {
    setMetrics(idMetricas);
    if (idMetricas && idMetricas.length > 0) {
      setDefaultTab(idMetricas[0]?.nombre_metrica);
    }
  }, [idMetricas]);

  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        {defaultTab && (
          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="w-full rounded-xl">
              <TabsList className="grid grid-cols-1 grid-rows-4 gap-4 h-full md:grid-cols-4 md:grid-rows-1 md:p-1 md:gap-2 rounded-xl">
                {metrics && metrics.map((item, index) => (
                  <TabsTrigger key={index} value={item?.nombre_metrica} className="flex w-full rounded-xl">
                    {item?.nombre_metrica}
                  </TabsTrigger>
                )).slice(0, 4)}
              </TabsList>
            </div>

            <div className="w-full">
              {metrics && metrics.map((item, index) => (
                <TabsContent key={index} value={item?.nombre_metrica} className="p-4">
                  <div className="grid md:grid-cols-3 md:grid-rows-1 md:gap-4 md:p-0">
                    <TopTweets idMetric={item.id_metrica} criterio="user_posts" title="Con más posteos" />
                    <TopTweets idMetric={item.id_metrica} criterio="user_followers" title="Con más seguidores" />
                    <TopTweets idMetric={item.id_metrica} criterio="posts" title="Últimos posteos" />
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </Suspense>
    </>
  )
}
