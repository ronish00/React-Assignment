import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { COLUMN } from "./Column";

function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/users.json");

      if (!response.ok) {
        setError("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Subscribers</h1>
      <Table columns={COLUMN} users={users} />
    </>
  );
}

export default User;
