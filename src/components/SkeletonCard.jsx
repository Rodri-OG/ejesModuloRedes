import { Skeleton } from "@/components/ui/skeleton"


export default function SkeletonCard() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-32 w-60 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-auto" />
          <Skeleton className="h-4 w-auto" />
        </div>
      </div>
    </div>
  )
}
