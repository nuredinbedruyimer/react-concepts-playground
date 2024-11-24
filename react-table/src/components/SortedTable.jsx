import { COLUMNS } from "../utils/columns";
import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { jsonData } from "../utils/data";

const SortedTable = () => {
  const data = useMemo(() => jsonData, []);
  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    getTableProps,
    footerGroups,
  } = useTable(
    {
      data,
      columns,
    },
    useSortBy
  );

  return (
    <div className="p-4 flex justify-center">
      <table
        {...getTableProps()}
        className="table-auto w-5/6 border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr
                key={key}
                {...headerGroupProps}
                className="bg-blue-500 text-white"
              >
                {headerGroup.headers.map((column) => {
                  const { key: columnKey, ...columnProps } =
                    column.getHeaderProps(column.getSortByToggleProps());
                  return (
                    <th
                      key={columnKey}
                      {...columnProps}
                      className="px-3 py-4 border border-gray-300 text-left font-semibold cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2">
                        {column.render("Header")}
                        {/* Sorting indicator */}
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <span className="text-white font-bold text-3xl">
                              ↓
                            </span> // Descending icon
                          ) : (
                            <span className="text-white font-bold text-3xl">
                              ↑
                            </span> // Ascending icon
                          )
                        ) : (
                          <span className="text-gray-400  font-bold text-3xl">
                            ⇅
                          </span> // Default icon
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            const { key: rowKey, ...rowProps } = row.getRowProps();
            return (
              <tr
                key={rowKey}
                {...rowProps}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50 transition duration-150 ease-in-out`}
              >
                {row.cells.map((cell) => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps();
                  return (
                    <td
                      key={cellKey}
                      {...cellProps}
                      className="px-3 py-2 border border-gray-300 text-gray-600"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-blue-500 text-white ">
          {footerGroups.map((footerGroup) => {
            const { key, ...footerProps } = footerGroup.getFooterGroupProps();
            return (
              <tr key={key} {...footerProps} className="">
                {footerGroup.headers.map((column) => {
                  const { key: columnKey, ...columnProps } =
                    column.getHeaderProps();
                  return (
                    <td
                      key={columnKey}
                      {...columnProps}
                      className="p-4 border border-gray-300 text-white"
                    >
                      {column.render("Footer")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </div>
  );
};

export default SortedTable;
