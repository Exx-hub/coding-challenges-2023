const vowels = ["a", "e", "i", "o", "u"];

const getVowelsCount = (str) => {
  // USING FOR LOOP
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (vowels.includes(str[i].toLowerCase())) {
  //       count++;
  //     }
  //   }
  //   return count;

  // USING REDUCE
  const splitted = str.split("");

  const count = splitted.reduce((acc, cv) => {
    if (vowels.includes(cv.toLowerCase())) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return count;
};

console.log(getVowelsCount("Ui engineer"));
console.log(getVowelsCount("ALVINA"));
console.log(getVowelsCount("A boy is me"));
