import { useEffect, useState } from "react";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  //   error: Error | null;
}

const useFetch = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    // error,
  };
};

export default useFetch;

// const [todos, setTodos] = useState<TTodo[]>([]);
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();

//     setTodos(data);
//   };

//   fetchData();
// }, []);
