import { useEffect } from "react";
import { useState } from "react";

const catUrl =
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww";

const dogUrl =
  "https://images.unsplash.com/photo-1641256979141-c643aba90d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFjaHN1bmR8ZW58MHx8MHx8fDA%3D";

function SingleDoubleClick() {
  const [clickCount, setClickCount] = useState(0);
  console.log(clickCount);

  const [url, setUrl] = useState("");

  const handleClick = (e) => {
    console.log(e.detail); // can watch for click count too
    // setClickCount(e.detail);
    setClickCount((prev) => prev + 1);
  };

  useEffect(() => {
    // debounce logic, waits 300ms then checks if click is one or two, then sets correct image url
    const timeout = setTimeout(() => {
      if (clickCount === 1) {
        setUrl(catUrl);
      } else if (clickCount === 2) {
        setUrl(dogUrl);
      } else if (clickCount > 2) {
        setClickCount(0); // edge case, clicks more than 2, reset click count to 0 nothing happens
      }

      setClickCount(0);
    }, 300);

    return () => clearTimeout(timeout);
  }, [clickCount]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Single click for cat.</h2>
        <h2>Double click for dog.</h2>
        <button onClick={handleClick}>Click Me</button>
        {url && <img src={url} alt="a photo" />}
      </div>
    </div>
  );
}

export default SingleDoubleClick;
