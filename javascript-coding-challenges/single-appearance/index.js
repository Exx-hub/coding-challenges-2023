const arr = [
  ["hello", "goodbye", "alpha"],
  ["alpha", "bravo", "bravo"],
];

// console.log(arr[0].includes("alpha"));

const singleApprearance = (arr) => {
  let arr1 = [...arr[0]];
  let arr2 = [...arr[1]];

  let uniqueArr = [];

  for (let str of arr1) {
    if (!arr2.includes(str)) {
      uniqueArr.push(str);
    }
  }

  for (let str of arr2) {
    if (!arr1.includes(str)) {
      uniqueArr.push(str);
    }
  }

  return [...new Set(uniqueArr)];
};

console.log(singleApprearance(arr));
