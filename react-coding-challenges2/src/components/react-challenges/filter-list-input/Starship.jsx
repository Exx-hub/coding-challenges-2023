// eslint-disable-next-line react/prop-types
function Starship({ name, manufacturer, starship_class }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {starship_class} - {manufacturer}
      </p>
    </div>
  );
}

export default Starship;
