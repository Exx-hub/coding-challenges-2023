const obj = {
  taxi: "a car licensed to transport passengers in return for payment of a fare",
  food: {
    sushi: "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
    apple: {
      Honeycrisp: "an apple cultivar developed at the MAES Horticultural Research Center",
      Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
    },
    beverage: {
      milktea: {
        modernBobba: "gen z milktea",
        traditional: "brewed and authentic",
      },
    },
  },
};

const renderDataRecursively = (data, count = 0) => {
  console.log(typeof data);
  if (typeof data === "object") {
    return (
      <ul>
        {Object.entries(data).map(([key, value]) => {
          return (
            <li key={key}>
              <span style={{ marginLeft: `${count}rem` }}>{key}:</span>{" "}
              {renderDataRecursively(value, count + 1)}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <span className="text-red-400">{data}</span>;
  }
};

function NestedObject() {
  return (
    <div className="w-2/3 mx-auto pt-10">
      <div>{renderDataRecursively(obj)}</div>
    </div>
  );
}

export default NestedObject;
