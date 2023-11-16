const isAnagram = (str1, str2) => {
  // split sort join then compare
  const splitted1 = str1.trim().split("").sort().join("");
  const splitted2 = str2.trim().split("").sort().join("");

  return splitted1 === splitted2;

  // loop
  //   if (str1.length !== str2.length) return false;
  //   const splitted1 = str1.split("");
  //   for (let i = 0; i < str2.length; i++) {
  //     if (!splitted1.includes(str2[i])) {
  //       return false;
  //     }
  //   }
  //   return true;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("heart ", "earth"));
console.log(isAnagram("racecar", "racecar"));
console.log(isAnagram("alvin", "paula"));
