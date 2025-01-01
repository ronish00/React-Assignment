import { useState, useEffect } from "react";

export const useFetchQuery = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError("Failed to fetch data");
          return ;
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false);
      }
    })();
  },[]);

  return {data, loading, error};
};
