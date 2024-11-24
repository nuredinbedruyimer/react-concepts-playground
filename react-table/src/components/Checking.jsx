import React from "react";
import { useTable } from "react-table";

const data = [
  { region: "North", sales: 1000, profit: 200, Q1: 600, Q2: 400 },
  { region: "South", sales: 1500, profit: 300, Q1: 900, Q2: 600 },
];

const columns = [
  {
    Header: "Sales Data", // First Header Group
    columns: [
      { Header: "Region", accessor: "region" },
      { Header: "Sales", accessor: "sales" },
      { Header: "Profit", accessor: "profit" },
    ],
  },
  {
    Header: "Sales Details", // Second Header Group
    columns: [
      { Header: "Q1", accessor: "Q1" },
      { Header: "Q2", accessor: "Q2" },
    ],
  },
];

export default function Table() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="w-full flex justify-center items-start min-h-screen">
      <table
        {...getTableProps()}
        style={{ border: "1px solid black", width: "50%" }}
        className=""
      >
        <thead className="">
          {headerGroups.map((headerGroup, index) => {
            const { key, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr
                key={key}
                {...headerGroupProps}
                className={index % 2 === 0 ? "bg-lime-500" : "bg-blue-500"}
              >
                {headerGroup.headers.map((column) => {
                  const { key: columnKey, ...columnProps } =
                    column.getHeaderProps();
                  return (
                    <th
                      key={columnKey}
                      {...columnProps}
                      style={{ padding: "10px", border: "1px solid black" }}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key: rowKey, ...rowProps } = row.getRowProps();
            return (
              <tr key={rowKey} {...rowProps} style={{ textAlign: "center" }}>
                {row.cells.map((cell) => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps();
                  return (
                    <td
                      key={cellKey}
                      {...cellProps}
                      style={{ padding: "10px", border: "1px solid black" }}
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
}
