const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

type StarProps = {
  filledStars: number[];
  setFilledStars: React.Dispatch<React.SetStateAction<number[]>>;
  setRatingClicked: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
};

function Star({ filledStars, setFilledStars, setRatingClicked, index }: StarProps) {
  const handleAdd = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
    setRatingClicked(false);

    const arr = [];

    for (let idx = 0; idx <= i; idx++) {
      arr.push(idx);
    }

      setFilledStars([...arr]);
    
  };

  const handleClick = () => {
    setFilledStars([...filledStars]);
    setRatingClicked(true);
  };

  return (
    <div onMouseOver={(e) => handleAdd(e, index)} onClick={handleClick}>
      <img src={filledStars.includes(index) ? FULL_STAR : EMPTY_STAR} alt="" />
    </div>
  );
}

export default Star;
