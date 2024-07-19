'use client'
import LineChartLight from "@/components/LineChartLight";

export default function Bookmarks() {
  return (
    <div className="mb-8 grid gap-2 p-4 grid-cols-1  md:grid-cols-1 xl:grid-cols-4 xl:grid-rows-[0.5fr 1fr 1fr 1fr]">
      <div className="flex w-full justify-center col-span-2 col-start-1 col-end-3  p-4 m-4 bg-[#fefdfd] rounded-lg xl:mb-0 shadow-lg">
        <LineChartLight/>
      </div>
    </div>
  )
}
