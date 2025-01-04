import { useState, useEffect } from "react";

const cache = {};

export const useFetchQuery = (url) => {
  const [data, setData] = useState(cache[url] || []);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (cache[url]) {
      setData(cache[url]);
      setLoading(false);
      return;
    }

    (async function () {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const fetchedData = await response.json();
        cache[url] = fetchedData;
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
