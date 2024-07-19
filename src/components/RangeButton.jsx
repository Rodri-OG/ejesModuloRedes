"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function RangeButton({ onValueChange }) {
  
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Rango" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7">7 días</SelectItem>
        <SelectItem value="15">15 días</SelectItem>
        <SelectItem value="30">30 días</SelectItem>
        <SelectItem value="45">45 días</SelectItem>
      </SelectContent>
    </Select>
  )
}

