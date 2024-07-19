"use client"
import DataTableColumnHeader from "./DataTableColumnHeader"
import DataTableRowActions from "./DataTableRowActions"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };
  return date.toLocaleDateString('es-AR', options)
}


const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "tweet_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fecha" />
    ), 
    cell: ({ row }) => (
      <div className="flex w-full">
        <span className="max-w-[32rem] font-light">
          {formatDate(row.getValue("tweet_date"))}
        </span>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  
  {
    accessorKey: "user_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cuenta" />
    ),
    cell: ({ row }) => {
      const userName = row.getValue("user_name");
      const userFollowers = row.original.user_followers;
      const userImage = row.original.user_image;
      const userUrl = row.original.user_url;

      return (
        <div className="flex items-center gap-3">
          <Link href={userUrl} target="_blank" rel="noopener noreferrer">
            <Avatar className="cursor-pointer">
              <AvatarImage src={userImage} alt={`Avatar of ${userName}`} />
              <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex flex-col gap-1">
            <span className="max-w-[500px] truncate font-medium">
              {`@${userName}`}
            </span>
            <p className="text-[#8c8b8b] font-normal text-xs">
              {`Seguidores: ${Intl.NumberFormat('es-AR').format(userFollowers)}`}
            </p>
          </div>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      return rowA.original.user_followers - rowB.original.user_followers;
    }
  },

  {
    accessorKey: "full_text",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Anticipo" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[500px] text-sm font-extralight cursor-pointer" onClick={() => window.open(`https://twitter.com/Interior/status/${row.original.id_tweet}`, '_blank')}>
          {row.getValue("full_text")}
        </span>
      </div>
    )
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]

export default columns
