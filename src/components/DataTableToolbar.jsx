"use client"
//Components
import { useState, useEffect } from "react"
import DataTableViewOptions from "./DataTableViewOptions"

//UI Components
import { Cross2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

 
export default function DataTableToolbar({ table, dateRange }) {
  const [loading, setLoading] = useState(false)

  const isFiltered = table.getState().columnFilters.length > 0

  useEffect(() => {
    
    setLoading(true)

    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 1000) 

    return () => clearTimeout(timeoutId)
  }, [table.getFilteredRowModel().rows.length])

  return (
    <div className="flex items-center gap-1 justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrar palabra"
          value={table.getColumn("full_text")?.getFilterValue() ?? ""}
          onChange={event =>
            table.getColumn("full_text")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="text-[#546E7A] font-semibold text-sm">
          Items totales: {table.getFilteredRowModel().rows.length}
        </div>
        {loading && <Spinner />}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex justify-center gap-2 items-center px-4 py-1 rounded-md text-sm border text-[#546E7A] border-slate-200 outline-slate-500">
        <div>
          <span className="font-bold">Desde:</span> {dateRange.desde}
        </div>
        <div>
          <span className="font-bold">Hasta:</span> {dateRange.hasta}
        </div>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
