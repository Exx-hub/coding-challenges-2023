import { useEffect, useState } from "react";
import styles from "../../styles/GridLights.module.css";

function GridLights() {
  const [grid, setGrid] = useState(Array(9).fill(false));
  const [clickOrder, setClickOrder] = useState([]);
  const [maxLength, setMaxLength] = useState(8);

  const handleClick = (index) => {
    const gridCopy = grid.map((e, i) => {
      if (index === i) {
        e = true;
      }

      return e;
    });

    setGrid(gridCopy);
    setClickOrder([...clickOrder, index]);
  };

  useEffect(() => {
    let id;
    const clickOrderCopy = [...clickOrder];

    if (clickOrderCopy.length === maxLength) {
      console.log("filled!");

      id = setInterval(() => {
        if (clickOrderCopy.length > 0) {
          const popped = clickOrderCopy.pop();
          console.log(clickOrderCopy);
          console.log(popped);

          const newGrid = grid.map((e, i) => {
            if (i === popped) {
              e = false;
            }

            return e;
          });

          setGrid(newGrid);
          setClickOrder(clickOrderCopy);
          setMaxLength((prev) => prev - 1);
        }

        if (clickOrderCopy.length === 0) {
          setMaxLength(8);
          clearInterval(id);
        }
      }, 300);
    }

    return () => clearInterval(id);
  }, [clickOrder, grid, maxLength]);

  return (
    <div className="container">
      <div className={styles.gridContainer}>
        {/* CAN CREATE SEPARATE TILE COMPONENT */}
        {grid.map((tile, index) => {
          return (
            <div
              style={index === 4 ? { visibility: "hidden", pointerEvents: "none" } : {}}
              className={`${styles.tile} ${tile && styles.active}`}
              key={index}
              onClick={() => handleClick(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default GridLights;
