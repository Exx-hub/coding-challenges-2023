import { useEffect, useState } from "react";
import styles from "../../styles/CheckoutCounters.module.css";

// number input, checkout button

// 5 counters

// when checkout is clicked, customer is queued to the counter with least amount of items

// every second, persons in front of the counters,
// gets their items decremented by 1, until 1 then gets deleted

function CheckoutCounters() {
  const [itemNumber, setItemNumber] = useState("");

  const [counter1, setCounter1] = useState([3, 5, 7]);
  const [counter2, setCounter2] = useState([1, 5, 8]);
  const [counter3, setCounter3] = useState([]);
  const [counter4, setCounter4] = useState([]);
  const [counter5, setCounter5] = useState([]);

  const handleAssignToCounter = () => {
    let arr = [counter1.length, counter2.length, counter3.length, counter4.length, counter5.length];

    const min = Math.min(...arr);

    const index = arr.findIndex((item) => item === min);

    switch (index) {
      case 0:
        setCounter1([...counter1, itemNumber]);
        break;
      case 1:
        setCounter2([...counter2, itemNumber]);
        break;
      case 2:
        setCounter3([...counter3, itemNumber]);
        break;
      case 3:
        setCounter4([...counter4, itemNumber]);
        break;
      case 4:
        setCounter5([...counter5, itemNumber]);
        break;

      default:
        return;
    }

    setItemNumber("");
  };

  useEffect(() => {
    const counter1Copy = [...counter1];
    if (counter1Copy.length === 0) return;

    const id = setInterval(() => {
      counter1Copy[0] = counter1Copy[0] - 1;
      setCounter1(counter1Copy.filter((item) => item !== 0));
    }, 1000);

    return () => clearInterval(id);
  }, [counter1, counter2]);

  useEffect(() => {
    const counter2Copy = [...counter2];
    if (counter2Copy.length === 0) return;

    const id = setInterval(() => {
      counter2Copy[0] = counter2Copy[0] - 1;
      setCounter2(counter2Copy.filter((item) => item !== 0));
    }, 1000);

    return () => clearInterval(id);
  }, [counter2]);

  useEffect(() => {
    const counter3Copy = [...counter3];
    if (counter3Copy.length === 0) return;

    const id = setInterval(() => {
      counter3Copy[0] = counter3Copy[0] - 1;
      setCounter3(counter3Copy.filter((item) => item !== 0));
    }, 1000);

    return () => clearInterval(id);
  }, [counter3]);

  useEffect(() => {
    const counter4Copy = [...counter4];
    if (counter4Copy.length === 0) return;

    const id = setInterval(() => {
      counter4Copy[0] = counter4Copy[0] - 1;
      setCounter4(counter4Copy.filter((item) => item !== 0));
    }, 1000);

    return () => clearInterval(id);
  }, [counter4]);

  useEffect(() => {
    const counter5Copy = [...counter5];
    if (counter5Copy.length === 0) return;

    const id = setInterval(() => {
      counter5Copy[0] = counter5Copy[0] - 1;
      setCounter5(counter5Copy.filter((item) => item !== 0));
    }, 1000);

    return () => clearInterval(id);
  }, [counter5]);

  return (
    <div className="container">
      <div className={styles.componentContainer}>
        <h1>CheckoutCounters</h1>
        <div className={styles.inputContainer}>
          <input
            type="number"
            value={itemNumber}
            onChange={(e) => setItemNumber(+e.target.value)}
          />
          <button disabled={!itemNumber} onClick={handleAssignToCounter}>
            Checkout
          </button>
        </div>

        <div className={styles.countersContainer}>
          <div className={styles.counter}>
            {counter1.map((item, i) => (
              <div key={`${item}-${i}-0`}>{item}</div>
            ))}
          </div>
          <div className={styles.counter}>
            {counter2.map((item, i) => (
              <div key={`${item}-${i}-1`}>{item}</div>
            ))}
          </div>
          <div className={styles.counter}>
            {counter3.map((item, i) => (
              <div key={`${item}-${i}-2`}>{item}</div>
            ))}
          </div>
          <div className={styles.counter}>
            {counter4.map((item, i) => (
              <div key={`${item}-${i}-3`}>{item}</div>
            ))}
          </div>
          <div className={styles.counter}>
            {counter5.map((item, i) => (
              <div key={`${item}-${i}-4`}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCounters;
