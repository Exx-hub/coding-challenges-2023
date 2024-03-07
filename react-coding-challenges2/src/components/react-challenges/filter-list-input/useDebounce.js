import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    console.log("useEffect ran");
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [delay, value]);

  return debouncedValue;
};

export default useDebounce;
