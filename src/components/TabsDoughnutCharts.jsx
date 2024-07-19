'use client'
import { useState, useEffect, Suspense } from "react"
//Components
import DoughnutChartPosts from "./DoughnutChartPosts";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import DoughnutChartAlcance from "./DoughnutChartAlcance";
import DoughnutChartUsers from "./DoughnutChartUsers";
import DoughnutChartPrints from "./DoughnutChartPrints";


export default function TabsDoughnutCharts({ idMetricas }) {

  const [ metrics, setMetrics ] = useState([]);

  useEffect(()=>{
    setMetrics(idMetricas)
  },[idMetricas]);


  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
      <Tabs defaultValue="alcance" className="w-full">
        <div className=" w-full rounded-xl">
          <TabsList className=" flex w-full rounded-xl">
            <TabsTrigger value="posteos" className="w-full rounded-xl">Posteos</TabsTrigger>
            <TabsTrigger value="usuarios" className="w-full rounded-xl">Usuarios</TabsTrigger>
            <TabsTrigger value="alcance" className="w-full rounded-xl">Alcance</TabsTrigger>
            <TabsTrigger value="impactos" className="w-full rounded-xl">Impactos</TabsTrigger>
          </TabsList>
        </div>

          <div className="w-full">
            <TabsContent value="alcance" className="p-4">
              <div className="w-full rounded-xl"> 
                <DoughnutChartAlcance idMetricas={idMetricas} />
              </div>
            </TabsContent>
            <TabsContent value="posteos" className=" p-4">
              <div className=" w-full rounded-xl"><DoughnutChartPosts idMetricas={idMetricas} /></div>
            </TabsContent>
            <TabsContent value="usuarios" className=" p-4">
              <div className=" w-full rounded-xl"><DoughnutChartUsers idMetricas={idMetricas} /></div>
            </TabsContent>
            <TabsContent value="impactos" className=" p-4">
              <div className=" w-full rounded-xl"><DoughnutChartPrints idMetricas={idMetricas} /></div>
            </TabsContent>
          </div>
      </Tabs>
    </Suspense>


    </>
  )
}
