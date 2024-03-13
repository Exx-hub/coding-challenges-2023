import { useState } from "react";
import Star from "./Star";

function FiveStarRating() {
  const [starArray] = useState(new Array(5).fill(null));

  const [filledStars, setFilledStars] = useState<number[]>([]);
  const [ratingClicked, setRatingClicked] = useState(false);
  console.log(filledStars);

  const handleCancel = () => {
    console.log("mouse leave");
    if (!ratingClicked) {
      setFilledStars([]);
    }
  };
  return (
    <div>
      <div className="flex w-[60%] mx-auto mt-52 space-x-10" onMouseLeave={handleCancel}>
        {starArray.map((_, i) => (
          <Star
            key={i}
            filledStars={filledStars}
            setFilledStars={setFilledStars}
            index={i}
            setRatingClicked={setRatingClicked}
          />
        ))}
      </div>
      <div className="text-center">final rating: {ratingClicked && filledStars.length}</div>
    </div>
  );
}

export default FiveStarRating;
