import { useEffect } from "react";
import { useState } from "react";

function DebouncedInput() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  console.log(output);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setOutput(input);
    }, 1000);

    return () => clearInterval(id);
  }, [input]);

  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Debounced Input</h2>
        <input value={input} onChange={handleChange} />
        <p>Output: {output}</p>
      </div>
    </div>
  );
}

export default DebouncedInput;
