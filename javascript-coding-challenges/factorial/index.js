const getFactorial = (num) => {
  // loop
  let product = 1;

  for (let i = 1; i <= num; i++) {
    product = product * i;
  }

  return product;

  // recursion
  //   if (num === 1) {
  //     return 1;
  //   }

  //   return num * getFactorial(num - 1);
};

console.log(getFactorial(10));
