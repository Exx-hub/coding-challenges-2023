const emptyArray = (arr) => {
  // return an empty array haha
  //   return [];

  //   const arrCopy = [...arr];

  // length
  //   arrCopy.length = 0;

  // splice
  //   arrCopy.splice(0, arrCopy.length);

  //   return arrCopy;

  // loop
  //   for (let i = 0; i < arr.length; i++) {
  //     arrCopy.pop();
  //   }

  //   return arrCopy;

  // map --- clever! :D
  return arr.reduce((acc, cv) => {
    return acc;
  }, []);
};

console.log(emptyArray([1, 2, 3]));
console.log(emptyArray([{ name: "alvin" }, { name: "david" }, { name: "mark" }]));
console.log(emptyArray(["alvin", "david", "mark"]));
