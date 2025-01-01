import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { COLUMN } from "./Column";
import { useFetchQuery } from "../../hooks/useFetchQuery";

function User() {
  const {data:users, error, loading} = useFetchQuery('/users.json')

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Subscribers</h1>
      <Table columns={COLUMN} users={users} />
    </div>
  );
}

export default User;
