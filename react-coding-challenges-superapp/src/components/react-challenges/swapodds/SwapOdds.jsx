import { useState } from "react";

import "../../../App.css";

function SwapOdds() {
  const [cartA, setCartA] = useState(["Apple", "Banana", "Grape", "Orange", "Pear", "Pineapple"]);
  const [cartB, setCartB] = useState(["Potato", "Beans", "Carrots", "Spinach", "Kale", "Brocolli"]);

  const handleSwap = () => {
    const newCartA = cartA.map((item, index) => {
      if ((index + 1) % 2 !== 0) {
        return cartB[index];
      }

      return item;
    });

    const newCartB = cartB.map((item, index) => {
      if ((index + 1) % 2 !== 0) {
        return cartA[index];
      }

      return item;
    });

    setCartA(newCartA);
    setCartB(newCartB);
  };

  return (
    <div className="container">
      <div className="list-container">
        <h2>list 1</h2>
        <ol>
          {cartA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <button onClick={handleSwap}>Swap Odds</button>
      <div className="list-container">
        <h2>list 2</h2>

        <ol>
          {cartB.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SwapOdds;
