import { useEffect } from "react";
import { useState } from "react";

function MinuteTimer() {
  // my implementation

  const [minutes, setMinutes] = useState(localStorage.getItem("minutes") || 10);
  const [seconds, setSeconds] = useState(localStorage.getItem("seconds") || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds < 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    }

    if (minutes < 0) {
      setSeconds(0);
      setMinutes(10);
    }

    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);

    return () => clearInterval(interval);
  }, [seconds, minutes]);

  // ============================== //
  // better implementation by chatgpt

  const [time, setTime] = useState(600); // 600 milliseconds for 10 mins

  const minutes1 = Math.floor(time / 60);
  const remainingSeconds = time % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (time < 0) {
      setTime(100);
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Persisting 10 minute timer</h2>
        <div style={{ fontSize: "50px", color: "aqua" }}>
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </div>
      </div>
      {minutes1}: {remainingSeconds < 10 && 0}
      {remainingSeconds}
    </div>
  );
}

export default MinuteTimer;
