import { useEffect } from "react";
import { useState } from "react";
import useDebounce from "./useDebounce";
import Starship from "./Starship";

function FilteringInput() {
  const [filterInput, setFilterInput] = useState("");
  const [starships, setStarships] = useState(null);

  const [listView, setListView] = useState(true);

  // debounce hook
  const debouncedValue = useDebounce(filterInput, 500);

  // derived state
  const filteredShips = starships?.filter((ship) => {
    return (
      ship.name.toLowerCase().includes(debouncedValue) ||
      ship.manufacturer.toLowerCase().includes(debouncedValue)
    );
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("https://swapi.dev/api/starships")
        .then((res) => res.json())
        .then((data) => setStarships(data.results));
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFilterInput(e.target.value);
  };

  const displayView = listView
    ? {
        display: "flex",
        flexDirection: "column",
      }
    : {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      };

  return (
    <div className="container mx-auto pt-10">
      <div className="flex items-center gap-2 mb-7">
        <label htmlFor="filter">Filter</label>
        <input
          className="outline-none p-1"
          id="filter"
          value={filterInput}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <h1 className="mb-5 font-bold text-xl">STARSHIPS</h1>
        <div style={displayView}>
          {filteredShips?.map((ship) => (
            <Starship key={ship.name} {...ship} />
          ))}
        </div>
        <button
          className="border border-gray-600 p-2 rounded-md mt-10 self-end"
          onClick={() => setListView((prev) => !prev)}
        >
          toggle view
        </button>
      </div>
    </div>
  );
}

export default FilteringInput;
