import { COLUMNS } from "../utils/columns";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { jsonData } from "../utils/data";

const BasicTable = () => {
  const data = useMemo(() => jsonData, []);
  const columns = useMemo(() => COLUMNS, []);

  const { getTableBodyProps, headerGroups, prepareRow, rows, getTableProps } =
    useTable({
      data,
      columns,
    });

  return (
    <div className="p-4 flex justify-center">
      <table
        {...getTableProps()}
        className="table-auto w-5/6 border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-blue-500 text-white"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-3 py-4 border border-gray-300 text-left font-semibold"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50 transition duration-150 ease-in-out`}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
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
      </table>
    </div>
  );
};

export default BasicTable;
