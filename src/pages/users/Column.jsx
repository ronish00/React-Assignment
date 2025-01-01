import ShowDetail from "../../components/ShowDetail";

export const COLUMN = [
  {
    accessorFn: (row) => {
      const { first_name, middle_name, last_name } = row;
      return [first_name, middle_name, last_name]
        .filter(Boolean)
        .join(" ");
    },
    header: "Full Name",
    cell: (props) => {
      const row = props.row.original; // Access the entire row data
      const fullName = [row.first_name, row.middle_name, row.last_name]
        .filter(Boolean) // Filter out null/undefined values
        .join(" ");
      return <p>{fullName}</p>;
    },
    size: 250,
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "join_date",
    header: "Started At",
    cell: (props) => <p>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({getValue}) => {
      return (
        <ShowDetail userId={getValue()} />
      )
    },
    enableSorting: false,
  },
];
