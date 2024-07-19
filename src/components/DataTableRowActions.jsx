"use client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import jsPDF from "jspdf";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function DataTableRowActions({ row }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Fecha: ${formatDate(row.original.tweet_date)}`, 10, 10);
    doc.text(`Cuenta: @${row.original.user_name}`, 10, 20);
    doc.text(`Seguidores: ${row.original.user_followers}`, 10, 30);
    doc.text(`Texto: ${row.original.full_text}`, 10, 40);
    doc.text(`URL: https://twitter.com/statuses/${row.original.id_tweet}`, 10, 50);
    doc.save(`tweet_${row.original.id_tweet}.pdf`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDownload}>Descargar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
