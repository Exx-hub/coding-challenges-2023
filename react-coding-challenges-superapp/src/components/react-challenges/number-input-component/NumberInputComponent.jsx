import { useState } from "react";

// eslint-disable-next-line react/prop-types
function NumberInputComponent({ step, max, min }) {
  const [numInput, setNumInput] = useState(0);

  const handleIncrement = () => {
    setNumInput((prev) => {
      if (prev === max) return max;

      return prev + step;
    });
  };
  const handleDecrement = () => {
    setNumInput((prev) => {
      if (prev === min) return min;

      return prev - step;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <label id="numInputLabel" htmlFor="numInput">
        Number Input:
      </label>
      <input
        id="numInput"
        type="number"
        value={numInput}
        onChange={(e) => setNumInput(+e.target.value)}
        aria-labelledby="numInputLabel"
      />
      <div style={{ display: "flex", gap: 10 }}>
        <button disabled={numInput === max} onClick={handleIncrement}>
          Increment
        </button>
        <button disabled={numInput === min} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default NumberInputComponent;
