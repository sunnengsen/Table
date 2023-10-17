"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import { Input } from "@/components/ui/input"
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
  },
]
export type Payment = {
  id: string
  year: number
  department: "Automation Engineering" | "Bio Engineering" | "Environmental Engineering" | "Information Technology Engineering" | "Telecommunication & Electric Engineering"
  leader: String
  judge: String
  generation: string
  no: number
  score: number
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
      const id = parseInt(row.getValue("id"))
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
      const leader = parseInt(row.getValue("leader"))
      return (
        <div className="capitalize text-center">{row.getValue("leader")}</div>
      )
    },
  },
  {
    accessorKey: "judge",
    header: () => <div className="text-center hidden md:block" >Judge</div>,
    cell: ({ row }) => {
      const judge = parseInt(row.getValue("judge"))
      return (
        <div className="capitalize text-center">{row.getValue("judge")}</div>
      )
    },
  },

  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button className=" hidden md:flex text-center"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("score")}</div>,
  },
  {
    accessorKey: "year",
    header: () => <div className="text-center hidden md:block" ></div>,
    cell: ({ row }) => {

      const year = parseFloat(row.getValue("year"))
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
    <div className="flex justify-center bg-gray-200 h-screen">

      <Tabs defaultValue="account" className="md:w-[70%] w-[90%] shadow-2xl h-[503px] md:h-[550px] lg:h-[500px] border-2 rounded-xl mt-10">
        <TabsList className="grid w-full grid-cols-2 mb-5 rounded-xl">
          <TabsTrigger value="account" className=" shadow-2xl text-gray-400 bg-gray-200 h-14 ">Presentation</TabsTrigger>
          <TabsTrigger value="password" className=" shadow-2xl text-gray-400 bg-gray-200 h-14">Poster</TabsTrigger>
        </TabsList>
        <TabsContent value="account" >
          <Card className="rounded-b-xl w-full p-[-100px] border-0">
            
            <CardContent className="mt-5">
              <div className="flex justify-center">
                <div className="bg-gray-100 w-full">
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
                    <Table className="">
                      <TableHeader className="md:bg-gray-200">
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
                        {table.getRowModel().rows?.length? (
                          table.getRowModel().rows.map((row) => (
                            <TableRow
                              key={row.id}
                              data-state={row.getIsSelected() && "selected"}
                              className="hover:bg-gray-100">
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
        <TabsContent value="password">
          <Card className="rounded-b-xl bg-pink-500">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="flex justify-center">
                <div className="bg-gray-100 w-full">
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
                  <div>
                    <Table>
                      <TableHeader className="md:bg-gray-50">
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
                              className="hover:bg-gray-100">
                              {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
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
