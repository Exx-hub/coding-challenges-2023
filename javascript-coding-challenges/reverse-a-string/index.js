const reverseString = (str) => {
  const splitted = str.split("");

  // using array split() reverse() join()
  //   return splitted.reverse().join("");

  // looping over and reordering letters
  //   let reversed = "";
  //   for (let i = 0; i < splitted.length; i++) {
  //     reversed = splitted[i] + reversed;
  //   }

  //   return reversed;

  // using reduce
  const reversed = splitted.reduce((acc, cv) => {
    return cv + acc;
  });

  return reversed;
};

console.log(reverseString("alvin"));

console.log(reverseString("anna"));
console.log(reverseString("12345"));
