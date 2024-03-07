import { useState } from "react";
import styles from "../../styles/TransferList.module.css";
import TransferListItem from "./TransferListItem";

function TransferList() {
  // state for list 1 and 2
  const [list1, setList1] = useState([1, 2, 3, 4]);
  const [list2, setList2] = useState([]);

  // state for items checked to be transferred
  // separated these, for edge case where you check an item on the left but click transfer left, checked items
  // on the left will be duplicated. this should not be allowed.
  const [markedItemsA, setMarkedItemsA] = useState([]);
  const [markedItemsB, setMarkedItemsB] = useState([]);

  // add or remove item from the markedItems list 1
  const addOrRemoveMarkedItemsA = (item) => {
    // remove
    if (markedItemsA.includes(item)) {
      setMarkedItemsA(markedItemsA.filter((i) => i !== item));
    } else {
      // add
      setMarkedItemsA([...markedItemsA, item]);
    }
  };

  // add or remove item from the markedItems list 2
  const addOrRemoveMarkedItemsB = (item) => {
    if (markedItemsB.includes(item)) {
      setMarkedItemsB(markedItemsB.filter((i) => i !== item));
    } else {
      setMarkedItemsB([...markedItemsB, item]);
    }
  };

  // transfer logic to list 2
  const handleTransferRight = () => {
    // remove checked items from list
    const newList1 = list1
      .map((item) => {
        if (markedItemsA.includes(item)) {
          return null;
        }
        return item;
      })
      .filter((i) => i !== null);

    setList1(newList1);
    setList2([...markedItemsA, ...list2].sort());
    setMarkedItemsA([]);
  };

  // transfer logic to list 1
  const handleTransferLeft = () => {
    const newList2 = list2
      .map((item) => {
        if (markedItemsB.includes(item)) {
          return null;
        }
        return item;
      })
      .filter((i) => i !== null);

    setList1([...markedItemsB, ...list1].sort());
    setList2(newList2);

    setMarkedItemsB([]);
  };

  return (
    <div className={styles.container}>
      {/* LEFT LIST  */}
      <div className={styles.transferList}>
        <ul>
          {list1.map((item) => (
            <div key={item}>
              <TransferListItem
                item={item}
                addOrRemoveMarkedItems={addOrRemoveMarkedItemsA}
                isListA
              />
            </div>
          ))}
        </ul>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button disabled={list1.length < 1} onClick={handleTransferRight}>
          {">"}
        </button>
        <button disabled={list2.length < 1} onClick={handleTransferLeft}>
          {"<"}
        </button>
      </div>

      {/* RIGHT LIST  */}
      <div className={styles.transferList}>
        <ul>
          {list2.map((item) => (
            <div key={item}>
              <TransferListItem item={item} addOrRemoveMarkedItems={addOrRemoveMarkedItemsB} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransferList;
