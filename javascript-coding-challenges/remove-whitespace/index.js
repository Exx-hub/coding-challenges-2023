const removeWhiteSpace = (str) => {
  // regex and replace method
  //   return str.replace(/\s/g, "");

  // using reduce. can also use  loop
  const splitted = str.split("");

  return splitted.reduce((acc, cv) => {
    if (cv !== " ") {
      return acc + cv;
    }

    return acc;
  }, "");
};

console.log(removeWhiteSpace("I am alvin"));
console.log(removeWhiteSpace("   Interview,     Happy"));

// let cleanedString = "";

// splitted.forEach((e) => {
//   if (e !== "") {
//     cleanedString += e;
//   }
// });

// return cleanedString;
