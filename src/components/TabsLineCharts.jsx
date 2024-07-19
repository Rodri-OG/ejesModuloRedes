'use client'
import { useState, Suspense } from "react"
//Components

import LineChartAlcance from "./LineChartAlcance";
import LineChartPosts from "./LineChartPosts";
import LineChartUsers from "./LineChartUsers";
import LineChartPrints from "./LineChartPrints";
import LineChartAlcance15 from "./LineChartAlcance15";
import LineChartPosts15 from "./LineChartPosts15";
import LineChartUsers15 from "./LineChartUsers15";
import LineChartPrints15 from "./LineChartPrints15";
import LineChartAlcance30 from "./LineChartAlcance30";
import LineChartPosts30 from "./LineChartPosts30";
import LineChartUsers30 from "./LineChartUsers30";
import LineChartPrints30 from "./LineChartPrints30";
import LineChartAlcance45 from "./LineChartAlcance45";
import LineChartPosts45 from "./LineCHartPosts45";
import LineChartUsers45 from "./LineChartUsers45";
import LineChartPrints45 from "./LineChartPrints45";



//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"




export default function TabsLineCharts({ idMetricas, range }) {


  return (
    <>
    <Suspense fallback={<SkeletonCard />}>
      <Tabs defaultValue="alcance" className="grid grid-rows-[0.1fr_1fr] w-full h-full p-6">
        <div className=" w-full rounded-xl">
          <TabsList className=" flex w-full h-full rounded-xl">
            <TabsTrigger value="posteos" className="w-full rounded-xl">Posteos</TabsTrigger>
            <TabsTrigger value="usuarios" className="w-full rounded-xl">Usuarios</TabsTrigger>
            <TabsTrigger value="alcance" className="w-full rounded-xl">Alcance</TabsTrigger>
            <TabsTrigger value="impactos" className="w-full rounded-xl">Impactos</TabsTrigger>
          </TabsList>
        </div>
        
          {range == '15' 
            ?<div className="w-full h-full">
                <TabsContent value="alcance" className=" h-full w-full p-4">
                  <LineChartAlcance15 idMetricas={idMetricas}/>
                </TabsContent>
                <TabsContent value="posteos" className=" p-1">
                  <LineChartPosts15 idMetricas={idMetricas} />
                </TabsContent>
                <TabsContent value="usuarios" className=" p-1">
                  <LineChartUsers15 idMetricas={idMetricas} />
                </TabsContent>
                <TabsContent value="impactos" className=" p-1">
                  <LineChartPrints15 idMetricas={idMetricas} />
                </TabsContent>
              </div>
          : range == '30'
          ?<div className="w-full h-full">
              <TabsContent value="alcance" className=" p-1">
                <LineChartAlcance30 idMetricas={idMetricas}/>
              </TabsContent>
              <TabsContent value="posteos" className=" p-1">
                <LineChartPosts30 idMetricas={idMetricas} />
              </TabsContent>
              <TabsContent value="usuarios" className=" p-1">
                <LineChartUsers30 idMetricas={idMetricas} />
              </TabsContent>
              <TabsContent value="impactos" className=" p-1">
                <LineChartPrints30 idMetricas={idMetricas} />
              </TabsContent>
            </div>
            : range == '45'
            ?<div className="w-full h-full">
            <TabsContent value="alcance" className=" p-1">
              <LineChartAlcance45 idMetricas={idMetricas}/>
            </TabsContent>
            <TabsContent value="posteos" className=" p-1">
              <LineChartPosts45 idMetricas={idMetricas} />
            </TabsContent>
            <TabsContent value="usuarios" className=" p-1">
              <LineChartUsers45 idMetricas={idMetricas} />
            </TabsContent>
            <TabsContent value="impactos" className=" p-1">
              <LineChartPrints45 idMetricas={idMetricas} />
            </TabsContent>
          </div>
        : <div className="w-full h-full">
            <TabsContent value="alcance" className=" p-1">
              <LineChartAlcance idMetricas={idMetricas}/>
            </TabsContent>
            <TabsContent value="posteos" className=" p-1">
              <LineChartPosts idMetricas={idMetricas} />
            </TabsContent>
            <TabsContent value="usuarios" className=" p-1">
              <LineChartUsers idMetricas={idMetricas} />
            </TabsContent>
            <TabsContent value="impactos" className=" p-1">
              <LineChartPrints idMetricas={idMetricas} />
            </TabsContent>
          </div>
        }

      </Tabs>
    </Suspense>

    </>
  )
}
