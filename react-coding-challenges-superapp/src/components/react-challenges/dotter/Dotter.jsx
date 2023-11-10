import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/Dotter.module.css";

function Dotter() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [dots, setDots] = useState([]);
  const [unDots, setUnDots] = useState([]);

  // console.log(unDots);

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleAddDot = () => {
    setDots((prev) => [...prev, coords]);
    setUnDots([]);
  };

  const handleUndo = (e) => {
    e.stopPropagation();
    console.log("undo clicked");

    // create copy of dots and undid dots
    const dotsCopy = [...dots];
    const unDotsCopy = [...unDots];

    // removes last element of dots array, meaning most recent dot created.
    // set in state dots array after removing last element
    // but saving removed element to a variable,
    const popped = dotsCopy.pop();
    setDots(dotsCopy);

    // adds removed element to first element of undid array
    // first element very important. because when you redo, we use shift, which then removes first element also
    unDotsCopy.unshift(popped);
    setUnDots(unDotsCopy);
  };

  const handleRedo = (e) => {
    console.log("redo clicked");
    e.stopPropagation();
    const unDotsCopy = [...unDots];
    const dotsCopy = [...dots];

    // removes first element
    const shifted = unDotsCopy.shift();

    // new array set to copy of undid dots
    setUnDots(unDotsCopy);

    // removed element added back to dots array
    setDots([...dotsCopy, shifted]);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setDots([]);
    setUnDots([]);
  };

  console.log(unDots.length > 0);
  console.log(dots.length > 0);

  return (
    <div className={styles.container} onClick={handleAddDot}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={(e) => handleUndo(e)} disabled={dots.length < 1}>
          Undo
        </button>
        <button
          className={styles.button}
          onClick={(e) => handleRedo(e)}
          disabled={unDots.length < 1}
        >
          Redo
        </button>
        <button
          className={styles.button}
          onClick={(e) => handleClear(e)}
          disabled={!unDots.length > 0 && !dots.length > 0}
        >
          Clear
        </button>
      </div>

      <p>
        Mouse positioned at:{" "}
        <b>
          ({coords.x}, {coords.y})
        </b>
      </p>

      {dots.map((dot) => (
        <div
          key={`${dot.x}-${dot.y}-${Math.random()}`}
          style={{
            position: "absolute",
            top: `${dot.y}px`,
            left: `${dot.x}px`,
            height: "10px",
            width: "10px",
            backgroundColor: "red",
            borderRadius: "100px",
          }}
        />
      ))}
    </div>
  );
}

export default Dotter;

// next task
// 1. dotting a location on the screen - done

// 2. undo function

// 3. redo function
