const removeDuplicates = (arr) => {
  // using loop
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  // using REDUCE
  //   const uniqueArr = arr.reduce((acc, cv) => {
  //     if (acc.includes(cv)) {
  //       return acc;
  //     } else {
  //       return [...acc, cv];
  //     }
  //   }, []);

  return uniqueArr;
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 7]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 1]));
console.log(removeDuplicates(["e", "d", "e", "d"]));
console.log(removeDuplicates(["j", "o", "h", "n"]));
