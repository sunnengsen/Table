"use client"

import * as React from "react"
import {
  Card,
  CardContent,

} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    year: 1,
    department: "Automation Engineering",
    leader: "MeySorng",
    judge: "AAA",
    generation: "8",
    no: 1,
    score: 60,
    complete: true,

  },
  {
    id: "3u1reuv4",
    year: 2,
    department: "Bio Engineering",
    leader: "BongVitra",
    judge: "BBB",
    generation: "6",
    no: 2,
    score: 100,
    complete: false,

  },
  {
    id: "derv1ws0",
    year: 3,
    department: "Environmental Engineering",
    leader: "Rithy",
    judge: "CCC",
    generation: "7",
    no: 3,
    score: 50,
    complete: true,

  },
  {
    id: "5kma53ae",
    year: 4,
    department: "Information Technology Engineering",
    leader: "Bong Chhay",
    judge: "DDD",
    generation: "5",
    no: 4,
    score: 98,
    complete: false,

  },
  {
    id: "bhqecj4p",
    year: 5,
    department: "Telecommunication & Electric Engineering",
    leader: "Veha",
    judge: "EEE",
    generation: "8",
    no: 5,
    score: 74,
    complete: true,
  },
]
export type Payment = {
  id: string
  year: number
  department: "Automation Engineering" | "Bio Engineering" | "Environmental Engineering" | "Information Technology Engineering" | "Telecommunication & Electric Engineering"
  leader: string
  judge: string
  generation: string
  no: number
  score: number
  complete: boolean
}
export const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "no",
    header: () => <div className="text-center hidden md:block" >No</div>,
    cell: ({ row }) => {

      const no = parseFloat(row.getValue("no"))
      return <div className="text-center font-medium">{no}</div>
    },
  },
 
  
  {
    accessorKey: "id",
    header: () => <div className="text-center hidden md:block" >ID</div>,
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">{row.getValue("id")}</div>
      )
    },
  },
  
  {
    accessorKey: "department",
    header: () => <div className="text-center hidden md:block w-full" >Project Name</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("department")}</div>
    ),
  },
  {
    accessorKey: "leader",
    header: () => <div className="text-center hidden md:block" >Leader</div>,
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">{row.getValue("leader")}</div>
      )
    },
  },
  {
    accessorKey: "judge",
    
    header: () => <div className="text-center hidden md:block" >Judge</div>,
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center flex justify-center">
          
          <div className="text-center font-medium">
            
            <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
            {row.getValue("judge")}

            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="bg-gray-50 text-black">
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Member</DropdownMenuLabel>
            <DropdownMenuItem> 
            </DropdownMenuItem>
            <DropdownMenuItem>Meng Srun</DropdownMenuItem>
            <DropdownMenuItem>Mey Sorng</DropdownMenuItem>
            <DropdownMenuItem>Rithy</DropdownMenuItem>
            <DropdownMenuItem>Veha</DropdownMenuItem>


          </DropdownMenuContent>
        </DropdownMenu>
        
      </div>
      </div>
      )
    },
  },

  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button className=" hidden md:flex text-center ml-7"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-3 w-2" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("score")}</div>,
  },
  {
    accessorKey: "complete",
    header: () => {},
    cell: () => {   
    },
  },
  {
    accessorKey: "year",
    header: () => <div className="text-center hidden md:block" ></div>,
    cell: ({ row }) => {

      return <div className="text-center font-medium">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-50 text-black">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    },
  },

]
export default function TabsDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="flex justify-center bg-gray-200 w-full items-center h-screen">

      <Tabs defaultValue="account" className="md:w-[70%] w-[90%] shadow-2xl mx-20  rounded-xl bg-white">
        <TabsList className="flex grid-cols-2 mb-5 rounded-xl border-none h-10 justify-center my-4  text-white">
          <TabsTrigger value="account" className="   h-14 w-1/2 ml-5 rounded-xl  text-black border-blue-100 border-2 text-md shadow-xl">Presentation</TabsTrigger>
          <TabsTrigger value="password" className=" h-14 w-1/2 mr-5 rounded-xl  text-black border-blue-100 border-2 text-md shadow-xl">Poster</TabsTrigger>
        </TabsList>
        <div className="present">

        <TabsContent value="account" >
          <Card className=" w-full">

            <CardContent className="mt-5">
              <div className="flex justify-center">
                <div className="w-full">
                  <div className="flex items-center md:mb-5">

                    <DropdownMenu>

                      <DropdownMenuContent align="end">
                        {table
                          .getAllColumns()
                          .filter((column) => column.getCanHide())
                          .map((column) => {
                            return (
                              <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                  column.toggleVisibility(!!value)
                                }
                              >
                                {column.id}
                              </DropdownMenuCheckboxItem>
                            )
                          })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="md:mt-[-20px] mt-[-47px]">
                    <Table className="border-0 ">
                      <TableHeader className="md:bg-gray-300">
                        {table.getHeaderGroups().map((headerGroup) => (
                          <TableRow className="" key={headerGroup.id} >
                            {headerGroup.headers.map((header) => {
                              return (
                                <TableHead key={header.id}>
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                </TableHead>
                              )
                            })}
                          </TableRow>
                        ))}
                      </TableHeader>
                      <TableBody className="test hover:">
                        {table.getRowModel().rows?.length ? (
                          table.getRowModel().rows.map((row) => (
                            <TableRow
                              key={row.id}
                              data-state={row.getIsSelected() && "selected"}
                              className={`overflow-hidden ${row.getValue("complete")? 'bg-green-100' : 'bg-red-100'}`}>
                              {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id
                                }>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={columns.length}
                              className="h-24 text-center"
                            >
                              No results.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>

                </div>
              </div>

            </CardContent>

          </Card>
        </TabsContent>
        </div>
        <TabsContent value="password">
          <Card className="rounded-b-xl">
            
            <CardContent className="">
            <div className="flex justify-center">
                <div className="w-full">
                  <div className="flex items-center md:mb-5">

                    <DropdownMenu>

                      <DropdownMenuContent align="end">
                        {table
                          .getAllColumns()
                          .filter((column) => column.getCanHide())
                          .map((column) => {
                            return (
                              <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                  column.toggleVisibility(!!value)
                                }
                              >
                                {column.id}
                              </DropdownMenuCheckboxItem>
                            )
                          })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className=" ">
                    <Table className="border-0">
                      <TableHeader className="md:bg-gray-300">
                        {table.getHeaderGroups().map((headerGroup) => (
                          <TableRow className="" key={headerGroup.id} >
                            {headerGroup.headers.map((header) => {
                              return (
                                <TableHead key={header.id}>
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                </TableHead>
                              )
                            })}
                          </TableRow>
                        ))}
                      </TableHeader>
                      <TableBody >
                        {table.getRowModel().rows?.length ? (
                          table.getRowModel().rows.map((row) => (
                            <TableRow
                              key={row.id}
                              data-state={row.getIsSelected() && "selected"}
                              className={`overflow-hidden ${row.getValue("complete")? 'bg-green-100' : 'bg-red-100'}`}>
                              {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id
                                }>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={columns.length}
                              className="h-24 text-center"
                            >
                              No results.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>

                </div>
              </div>
            </CardContent>

          </Card>
        </TabsContent>
      </Tabs>
      
    </div>
  )
}
