import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/react-table";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { columns } from "./colomns";

export default function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const pageSize = 2;
  const table = useReactTable({
    data: [
      {
        id: "1",
        agent: "Run A",
        status: "Completed",
        command: "echo 'A'",
        startTime: "2024-06-01",
        duration: "5m",
      },
      {
        id: "2",
        agent: "Run B",
        status: "Failed",
        command: "echo 'B'",
        startTime: "2024-06-02",
        duration: "3m",
      },
      {
        id: "3",
        agent: "Run C",
        status: "Running",
        command: "echo 'C'",
        startTime: "2024-06-03",
        duration: "2m",
      },
      {
        id: "4",
        agent: "Run D",
        status: "Completed",
        command: "echo 'D'",
        startTime: "2024-06-04",
        duration: "7m",
      },
    ],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination: {
        pageIndex,
        pageSize,
      },
      columnFilters,
    },
  });

  const filteredRows = table.getFilteredRowModel().rows.length;
  const x = filteredRows === 0 ? 0 : pageIndex * pageSize + 1;
  const y = Math.min((pageIndex + 1) * pageSize, filteredRows);
  const z = filteredRows;

  return (
    <div className="my-6">
      <div className="flex items-center py-4 justify-end">
        <Input
          placeholder="Search..."
          value={(table.getColumn("agent")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("agent")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-lg border bg-card shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getPaginationRowModel().rows.length ? (
              table.getPaginationRowModel().rows.map((row) => (
                <TableRow key={row.id}>
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
      <div className="flex items-center justify-between py-4">
        <div className="px-1 text-muted-foreground text-sm">
          {x} &rarr; {y} out of {z}
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.setPageIndex(pageIndex - 1);
              setPageIndex(pageIndex - 1);
            }}
            disabled={pageIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.setPageIndex(pageIndex + 1);
              setPageIndex(pageIndex + 1);
            }}
            disabled={pageIndex + 1 >= table.getPageCount()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
