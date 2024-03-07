import { useState } from "react";
import styles from "../../styles/DropdownSubDropDown.module.css";

// create 2 dropdowns
// first dropdown for the countries array, displaying country names.
// after selecting a country, 2nd dropdown should be populated with cities of selected country

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

function DropdownSubDropdown() {
  const [selectedCountryValue, setSelectedCountryValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // derived state
  const country = countries.filter((e) => e.value === selectedCountryValue)[0];
  console.log(country);
  return (
    <div className="container">
      <div>
        <h1>DropdownSubDropdown</h1>
        <div className={styles.wrapper}>
          <select
            className={styles.dropdown}
            value={selectedCountryValue}
            onChange={(e) => setSelectedCountryValue(e.target.value)}
          >
            <option value="" disabled>
              --Please choose a country--
            </option>
            {countries.map((e) => (
              <option key={e.name} value={e.value}>
                {e.name}
              </option>
            ))}
          </select>

          <select
            className={styles.dropdown}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              {selectedCountryValue ? "--Please choose a city--" : "--"}
            </option>
            {country?.cities?.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DropdownSubDropdown;
