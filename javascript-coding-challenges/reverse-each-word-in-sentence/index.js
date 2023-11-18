const reverseWords = (str) => {
  const splitted = str.split(" ");

  console.log(splitted);

  const reversed = splitted
    .map((word) => {
      return [...word].reverse().join("");
    })
    .join(" ");

  return reversed;
};

console.log(reverseWords("Alvin Acosta is the guy"));
console.log(reverseWords("are you fucking dumb"));
