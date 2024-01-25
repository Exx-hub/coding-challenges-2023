function capitalize(str) {
  const splitted = str.split(" ");
  //   console.log(splitted);

  //   let newArray = [];

  //   for (let word of splitted) {
  //     newArray.push(word[0].toUpperCase() + word.slice(1));
  //   }

  //   console.log(newArray.join(" "));

  const converted = splitted
    .map((e, i) => {
      return e[0].toUpperCase() + e.slice(1);
    })
    .join(" ");

  console.log(converted);
}

capitalize("i am alvin");
capitalize("are you a good guy");
capitalize("My Name Is Alvin");
capitalize("hello world");
