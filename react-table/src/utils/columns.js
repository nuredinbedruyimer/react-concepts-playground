import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Footer: "ID",
  },
  {
    Header: "FirstName",
    accessor: "first_name",
    Footer: "FirstName",
  },
  {
    Header: "LastName",
    accessor: "last_name",
    Footer: "LastName",
  },
  {
    Header: "E-mail",
    accessor: "email",
    Footer: "E-mail",
  },
  {
    Header: "Birth-Date",
    accessor: "date_of_birth",
    Footer: "Birth-Data",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
];

export const COLUMNS_GROUPS = [
  {
    Header: "ID",
    accessor: "id",
    Footer: "ID",
  },
  {
    Header: "FullName",
    Footer: "FullName",
    columns: [
      {
        Header: "FirstName",
        accessor: "first_name",
        Footer: "FirstName",
      },
      {
        Header: "LastName",
        accessor: "last_name",
        Footer: "LastName",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "E-mail",
        accessor: "email",
        Footer: "E-mail",
      },
      {
        Header: "Birth-Date",
        accessor: "date_of_birth",
        Footer: "Birth-Data",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
