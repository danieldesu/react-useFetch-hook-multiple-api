import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsPending(true);
        //signal/controller for aborting if the fetch component is moved out of while fetch is in progress
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          setIsPending(false);
          setError("Failed to fetch data");
        }
      }
    };

    fetchData();

    //cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
