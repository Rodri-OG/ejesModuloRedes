'use client'
import { Suspense } from "react"
//Components
import BarChartAlcance from "./BarChartAlcance";
import BarChartPosts from "./BarChartPosts";
import BarChartUsers from "./BarChartUsers";
import BarChartPrints from "./BarChartPrints";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function TabsBarCharts({ idMetricas }) {


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
            <TabsContent value="alcance" className=" p-4">
            <div className=" w-full rounded-xl"> <BarChartAlcance idMetricas={idMetricas} /></div>
            </TabsContent>
            <TabsContent value="posteos" className=" p-4">
              <div className=" w-full rounded-xl"><BarChartPosts idMetricas={idMetricas} /></div>
            </TabsContent>
            <TabsContent value="usuarios" className=" p-4">
              <div className=" w-full rounded-xl"><BarChartUsers idMetricas={idMetricas} /></div>
            </TabsContent>
            <TabsContent value="impactos" className=" p-4">
              <div className=" w-full rounded-xl"><BarChartPrints idMetricas={idMetricas} /></div>
            </TabsContent>
          </div>
      </Tabs>
    </Suspense>

    </>
  )
}
