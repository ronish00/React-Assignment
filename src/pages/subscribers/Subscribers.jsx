import "./subscriber.css"
import Table from "../../components/Table";
import { COLUMN } from "./Column";
import { useFetchQuery } from "../../hooks/useFetchQuery";

function Subscribers() {
  const {data:users, error, loading} = useFetchQuery('/users.json')

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table columns={COLUMN} users={users} />
    </>
  );
}

export default Subscribers;
