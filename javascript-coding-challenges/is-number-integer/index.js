const isNumInteger = (num) => {
  //   return Number.isInteger(num);

  return num % 1 === 0 ? true : false;
};

console.log(isNumInteger(1));
console.log(isNumInteger(-10));
console.log(isNumInteger(0.45));
console.log(isNumInteger("asd"));
console.log(isNumInteger(12.0));
