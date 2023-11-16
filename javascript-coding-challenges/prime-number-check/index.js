const isPrime = (num) => {
  if (num < 2) return false;

  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  return count == 2 ? true : false;
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(10));
