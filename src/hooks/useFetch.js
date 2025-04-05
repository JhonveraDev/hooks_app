import { useEffect, useState } from "react";

const fetchCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const getFetch = async () => {
      setState((prev) => ({ ...prev, isLoading: true, hasError: false }));

      if (fetchCache[url]) {
        setState({
          data: fetchCache[url],
          isLoading: false,
          hasError: false,
          error: null,
        });
        return;
      }

      try {
        const resp = await fetch(url, { signal });

        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status} - ${resp.statusText}`);
        }

        const data = await resp.json();

        fetchCache[url] = data;

        setState({
          data,
          isLoading: false,
          hasError: false,
          error: null,
        });

      } catch (error) {
        if (error.name === "AbortError") return;

        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: error.code || "NETWORK_ERROR",
            message: error.message || "Something went wrong",
          },
        });
      }
    };

    getFetch();

    return () => controller.abort();
  }, [url]);

  return state;
};
