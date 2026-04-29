import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import { useState } from "react";

type Props<T> = {
  data: T[];
  columns: any;
  title?: string;
  subtitle?: string;
};

function TableWrapper<T>({ data, columns, title, subtitle }: Props<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
    initialState: { pagination: { pageSize } },
  });

  const { pageIndex } = table.getState().pagination;
  const totalPages = table.getPageCount();
  const totalRows = data.length;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden">

      {/* ── Table Header ── */}
      {(title || subtitle) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            {title && <h2 className="text-[15px] font-bold text-black tracking-tight">{title}</h2>}
            {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative hidden sm:block">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-1.5 text-[12px] text-gray-600 placeholder-gray-300 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-50 focus:bg-white transition-all w-40"
              />
            </div>
            {/* Export button */}
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>
        </div>
      )}

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={`
                      px-5 py-3 text-left text-[11.5px] font-semibold text-black uppercase tracking-wider whitespace-nowrap
                      ${header.column.getCanSort() ? "cursor-pointer select-none hover:text-orange-500 transition-colors" : ""}
                    `}
                  >
                    <span className="flex items-center gap-1.5">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <span className="flex flex-col gap-[2px]">
                          <svg
                            className={`w-2.5 h-2.5 transition-colors ${header.column.getIsSorted() === "asc" ? "text-orange-500" : "text-gray-300"}`}
                            fill="currentColor" viewBox="0 0 20 20"
                          >
                            <path d="M5 12l5-5 5 5H5z" />
                          </svg>
                          <svg
                            className={`w-2.5 h-2.5 transition-colors ${header.column.getIsSorted() === "desc" ? "text-orange-500" : "text-gray-300"}`}
                            fill="currentColor" viewBox="0 0 20 20"
                          >
                            <path d="M15 8l-5 5-5-5h10z" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </th>
                ))
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-500">No data found</p>
                      <p className="text-[12px] text-gray-300 mt-0.5">There are no records to display</p>
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                    hover:bg-orange-50/40 transition-colors duration-100 group
                    ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-5 py-3 text-[13px] text-gray-600 whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      {totalRows > 0 && (
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 bg-gray-50/60 flex-wrap gap-3">

          {/* Row count info */}
          <div className="flex items-center gap-3">
            <p className="text-[12px] text-gray-400">
              Showing <span className="font-semibold text-gray-600">{startRow}–{endRow}</span> of{" "}
              <span className="font-semibold text-gray-600">{totalRows}</span> results
            </p>

            {/* Rows per page */}
            <select
              value={pageSize}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPageSize(val);
                table.setPageSize(val);
              }}
              className="text-[12px] text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 outline-none focus:border-orange-300 transition-all cursor-pointer"
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n} value={n}>{n} / page</option>
              ))}
            </select>
          </div>

          {/* Page buttons */}
          <div className="flex items-center gap-1">
            <PaginationBtn
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              title="First"
            >
              «
            </PaginationBtn>
            <PaginationBtn
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              title="Previous"
            >
              ‹
            </PaginationBtn>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i)
              .filter((i) => Math.abs(i - pageIndex) <= 2)
              .map((i) => (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  className={`
                    w-8 h-8 rounded-lg text-[12.5px] font-medium transition-all
                    ${i === pageIndex
                      ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
                      : "text-gray-500 hover:bg-gray-100"
                    }
                  `}
                >
                  {i + 1}
                </button>
              ))}

            <PaginationBtn
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              title="Next"
            >
              ›
            </PaginationBtn>
            <PaginationBtn
              onClick={() => table.setPageIndex(totalPages - 1)}
              disabled={!table.getCanNextPage()}
              title="Last"
            >
              »
            </PaginationBtn>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Small helper component for pagination arrows ── */
function PaginationBtn({
  onClick,
  disabled,
  children,
  title,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className="w-8 h-8 rounded-lg text-[14px] font-medium text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      {children}
    </button>
  );
}

export default TableWrapper;