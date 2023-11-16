const longestWord = (sentence) => {
  let longestWord = sentence[0];
  const splitted = sentence.split(" ").slice(1);

  splitted.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};

console.log(longestWord("I love coding in javascript"));
