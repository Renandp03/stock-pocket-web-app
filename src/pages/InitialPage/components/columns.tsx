 
import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  limit: number,
}
 
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Preço</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "limit",
    header: "Limite",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id.toString())}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]