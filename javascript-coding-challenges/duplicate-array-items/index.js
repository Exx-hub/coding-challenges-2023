const duplicateArrayItems = (arr) => {
  // concat
  return arr.concat(arr);
  // spread twice
  // return [...arr, ...arr];
};

console.log(duplicateArrayItems([1, 2, 3, 4, 5]));
console.log(duplicateArrayItems(["alvin", "david", "mark"]));
console.log(duplicateArrayItems([1, 1, 1, 1, 1]));
