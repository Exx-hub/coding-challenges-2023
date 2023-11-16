const person = {
  name: "ram",
  age: 30,
};

console.log(Object.entries(person));

const getObjectEntries = (obj) => {
  let arr = [];

  for (item in person) {
    arr.push([item, person[item]]);
  }

  return arr;
};

console.log(getObjectEntries(person));
