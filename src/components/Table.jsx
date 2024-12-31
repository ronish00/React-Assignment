import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel  } from "@tanstack/react-table";
import { useState } from "react";


const Table = ({ columns, users }) => {
  const [data, setData] = useState(users);

  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  console.log(table.getRowModel().rows[0].getVisibleCells());

  return (
    <table width={table.getTotalSize()}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} width={header.getSize()}>{header.column.columnDef.header}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {
          table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {
                row.getVisibleCells().map((cell) => (
                  <td key={cell.id} width={cell.column.getSize()}>
                    {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
      <div style={{display: "flex"}}>
        <button
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
      </div>
      <span>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
    </table>
  );
};

export default Table;
