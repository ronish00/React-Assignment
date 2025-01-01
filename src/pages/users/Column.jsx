import ShowDetail from "../../components/ShowDetail";

export const COLUMN = [
  {
    accessorKey: "full_name",
    header: "Full Name",
    cell: (props) => {
      const row = props.row.original; // Access the entire row data
      const fullName = [row.first_name, row.middle_name, row.last_name]
        .filter(Boolean) // Filter out null/undefined values
        .join(" ");
      return <p>{fullName}</p>;
    },
    filterFn: (row, columnId, filterValue) => {
      const rowData = row.original; // Access the raw row data
      const fullName = [
        rowData.first_name,
        rowData.middle_name,
        rowData.last_name,
      ]
        .filter(Boolean) // Remove null/undefined values
        .join(" ")
        .toLowerCase();
      return fullName.includes(filterValue.toLowerCase());
    },
    sortingFn: (rowA, rowB, columnId) => {
      const fullNameA = [
        rowA.original.first_name,
        rowA.original.middle_name,
        rowA.original.last_name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const fullNameB = [
        rowB.original.first_name,
        rowB.original.middle_name,
        rowB.original.last_name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return fullNameA.localeCompare(fullNameB);
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
    cell: ({getValue, row}) => {
      const email = row.original.email
      return (
        <ShowDetail userId={getValue()} row={row}  />
      )
    },
    enableSorting: false,
  },
];
