const largestNum = (arr) => {
  let largest = arr[0];

  arr.forEach((num) => {
    if (num > largest) {
      largest = num;
    }
  });

  return largest;
};

console.log(largestNum([1, 2, 3, 4, 5]));
console.log(largestNum([2, 4, 6, 9, 3]));
console.log(largestNum([50, 440, 67, 2, -1]));
console.log(largestNum([-1, -2, -3, -4, -5]));
