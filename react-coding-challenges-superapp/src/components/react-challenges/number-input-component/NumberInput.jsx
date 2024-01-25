import NumberInputComponent from "./NumberInputComponent";

function NumberInput() {
  return (
    <div className="container">
      <NumberInputComponent step={2} min={0} max={20} />
    </div>
  );
}

export default NumberInput;
