import { useState } from "react";

/* Requirements:
    1) When you select the first checkbox having label 'Select All', 
    all the checkbox should get checked and when you uncheck 'Select All', each of the checkbox should be unchecked.
    
    2) If all checkbox is checked and you uncheck any checkbox having label of any country name, 
    Checkbox for Select All should also be unchecked.
    
    3) On checking all the countries, Select All checkbox should be checked automatically. */

function SelectAllCheckboxes() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [countries, setCountries] = useState([
    { name: "Philippines", checked: false },
    { name: "Taiwan", checked: false },
    { name: "Japan", checked: false },
  ]);

  const handleToggleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked);

    const countriesCopy = [...countries];

    countriesCopy.forEach((e) => {
      e.checked = !selectAllChecked;
    });

    setCountries(countriesCopy);
  };

  const handleToggleSingleCheckbox = (index) => {
    const countriesCopy = [...countries];

    countriesCopy[index] = { ...countriesCopy[index], checked: !countriesCopy[index].checked };

    setCountries(countriesCopy);

    // if all countries are checked, setSelectAllChecked
    // if all are selected then one is unchecked, select all should not be checked

    // if (countriesCopy.every((e) => e.checked)) {
    //   setSelectAllChecked(true);
    // } else {
    //   setSelectAllChecked(false);
    // }

    // optimized
    setSelectAllChecked(countriesCopy.every((e) => e.checked));
  };

  // improved by using every
  //   const allIsChecked = (arr) => {
  //     let all = true;

  //     arr.forEach((e) => {
  //       if (!e.checked) {
  //         all = false;
  //       }
  //     });

  //     return all;
  //   };

  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Checkbox Manipulation</h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            id="select-all"
            type="checkbox"
            checked={selectAllChecked}
            onChange={handleToggleSelectAll}
          />
          <label htmlFor="select-all">Select All</label>
        </div>

        <div style={{ paddingLeft: "15px" }}>
          {countries.map((e, i) => (
            <div key={e.name}>
              <input
                id={`${e.name}`}
                type="checkbox"
                checked={e.checked}
                onChange={() => handleToggleSingleCheckbox(i)}
              />
              <label htmlFor={`${e.name}`}>{e.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectAllCheckboxes;
