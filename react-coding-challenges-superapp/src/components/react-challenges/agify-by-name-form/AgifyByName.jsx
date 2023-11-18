import { useState } from "react";
import styles from "../../styles/AgifyByName.module.css";

// Welcome to Nate Frog!

// It's your first day and you've been assigned this ticket.

// API - https://api.agify.io/?name=<name>

// Send this API a name and an estimated age will be returned.

// - Match the UX photo attached.
// - If the same name is submitted twice, show the estimated
// age without hitting the API again.

function AgifyByName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("--");

  const [cachedValues, setCachedValues] = useState(null);

  console.log({ name, cachedValues });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === cachedValues?.name.trim()) {
      setAge(cachedValues.age);
      return;
    }

    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
      setCachedValues(data);
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>SUBMIT</button>
        </form>
        <h1>{age}</h1>
      </div>
    </div>
  );
}

export default AgifyByName;
