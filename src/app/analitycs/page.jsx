'use client'
import LineChartLight from "@/components/LineChartLight";


export default function Analitycs() {
  return (
    <div className="grid gap-2 p-4 grid-cols-1 grid-rows-1  md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-4">
      <div className="flex w-full justify-center col-span-2 col-start-3 col-end-5  p-4 m-4 bg-[#fefdfd] rounded-lg xl:mb-0 shadow-lg">
      <LineChartLight/>
      </div>
    </div>
  )
}
