import { useEffect } from "react";
import { useState } from "react";

function TrafficLight() {
  const [active, setActive] = useState("green");
  const [timer, setTimer] = useState(8);

  useEffect(() => {
    let id;

    if (timer > 0) {
      id = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(8);
    }

    return () => clearInterval(id);
  }, [timer]);

  useEffect(() => {
    if (timer > 4) {
      setActive("green");
    } else if (timer < 4) {
      setActive("red");
    } else {
      setActive("orange");
    }
  }, [timer]);

  return (
    <div className="container mx-auto pt-52">
      <div className="flex items-center justify-center">
        <div className="border border-gray-400 flex flex-col space-y-4 items-center justify-around p-5">
          <div
            className="border border-gray-600 bg-red-700  p-8 rounded-full"
            style={{ opacity: active === "red" ? 1 : ".2" }}
          />
          <div
            className="border border-gray-600 bg-orange-400 p-8 rounded-full"
            style={{ opacity: active === "orange" ? 1 : ".2" }}
          />
          <div
            className="border border-gray-600 bg-green-800  p-8 rounded-full"
            style={{ opacity: active === "green" ? 1 : ".2" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TrafficLight;
