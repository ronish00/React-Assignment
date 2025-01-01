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
      return <p className="name" title={props.getValue()}>{fullName}</p>;
    },
    size: 250,
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: (props) => <p className="username" title={props.getValue()}>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <p className="email"  title={props.getValue()}>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: (props) => <p className="address"  title={props.getValue()}>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: (props) => <p className="country"  title={props.getValue()}>{props.getValue()}</p>,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({getValue}) => {
      return (
        <ShowDetail subscriberId={getValue()} />
      )
    },
    enableSorting: false,
  },
];
