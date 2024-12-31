export const COLUMN = [
    {
        accessorKey: "id",
        header: "Id",
        cell: (props) => <p>{props.getValue()}</p>,
        size: 80
    },
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
        size: 250
    },
    {
        accessorKey: "username",
        header: "Username",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "country",
        header: "Country",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "join_date",
        header: "Started At",
        cell: (props) => <p>{props.getValue()}</p>
    },
]