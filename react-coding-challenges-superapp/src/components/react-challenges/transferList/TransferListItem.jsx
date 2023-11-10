import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TransferListItem({ item, addOrRemoveMarkedItems }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    console.log(item);
    setChecked((prev) => !prev);
    addOrRemoveMarkedItems(item);
  };

  return (
    <li>
      <input id="item" type="checkbox" checked={checked} onChange={handleToggle} />
      <label htmlFor="item">{item}</label>
    </li>
  );
}

export default TransferListItem;
