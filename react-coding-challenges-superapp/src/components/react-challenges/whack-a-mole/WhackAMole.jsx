import styles from "../../styles/WhackAMole.module.css";
import hole from "../../../assets/hole.png";
import mole from "../../../assets/mole.png";
import { useEffect } from "react";
import { useState } from "react";

function WhackAMole() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [score, setScore] = useState(0);

  //   const generateRandomNumber = () => {
  //     return Math.floor(Math.random() * 9);
  //   };

  //   useEffect(() => {
  //     const id = setInterval(() => setRandomNumber(generateRandomNumber()), 700);

  //     return () => clearInterval(id);
  //   }, []);

  // my initial implementation

  //   const handleClick = (src) => {
  //     if (src.includes("mole")) {
  //       console.log("SCORE");
  //       setScore((prev) => prev + 1);
  //     } else {
  //       console.log("TRY AGAIN!");
  //     }
  //   };

  //   const mapped = moles.map((e, i) => {
  //     return (
  //       <img
  //         src={i === randomNumber ? mole : hole}
  //         alt=""
  //         key={i}
  //         onClick={(e) => handleClick(e.target.src)}
  //       />
  //     );
  //   });

  useEffect(() => {
    const id = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 9);

      const molesCopy = [...moles];
      molesCopy[randomNumber] = true;
      setMoles(molesCopy);

      // reset grid to make it seem like mole hides again
      setTimeout(() => {
        setMoles(new Array(9).fill(false));
      }, 1000);
    }, 1500);

    return () => clearInterval(id);
  }, [moles]);

  const handleClick = (src) => {
    if (src.includes("mole")) {
      console.log("SCORE");
      setScore((prev) => prev + 1);
      setMoles(new Array(9).fill(false));
    } else {
      console.log("TRY AGAIN!");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>WhackAMole --- Score {score}</h1>
        <div className={styles.grid}>
          {" "}
          {moles.map((e, i) => (
            <img src={e ? mole : hole} alt="" key={i} onClick={(e) => handleClick(e.target.src)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhackAMole;
