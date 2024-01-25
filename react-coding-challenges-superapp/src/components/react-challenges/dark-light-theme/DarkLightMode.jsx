import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "../../styles/DarkLightMode.module.css";

function DarkLightMode() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  console.log({ isDark, setIsDark });
  return (
    <div className="container">
      <div className={styles.wrapper} id="themed-div">
        <h1>MODE: {isDark ? "dark" : "light"}</h1>

        <button onClick={() => setIsDark((prev) => !prev)} className={styles.toggleButton}>
          <p className={styles.toggleThumb}></p>
          <span>🌙</span>
          <span>☀️</span>
        </button>
      </div>
    </div>
  );
}

export default DarkLightMode;
