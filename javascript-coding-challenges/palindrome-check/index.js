const isPalindrome = (str) => {
  // using split reverse join
  //   const reversed = str.split("").reverse().join("");
  //   return reversed === str;

  // using a loop
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] !== str[str.length - 1 - i]) {
  //       return false;
  //     }

  //     return true;
  //   }

  // using array every

  return str.split("").every((char, i) => {
    return char === splitted[splitted.length - 1 - i];
  });
};

console.log(isPalindrome("anna"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("alvin"));
