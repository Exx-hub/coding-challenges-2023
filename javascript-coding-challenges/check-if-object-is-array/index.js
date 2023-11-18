const checkObjectIfArray = (obj) => {
  // Array.isArray
  return Array.isArray(obj);

  // instanceof
  return obj instanceof Array;

  // manually?
  if (typeof obj !== "object") return false;

  if (obj === null) return false;

  if (isNaN(obj.length)) {
    return false;
  } else {
    return true;
  }
};

console.log(checkObjectIfArray({ name: "alvin" }));
console.log(checkObjectIfArray(null));
console.log(checkObjectIfArray(undefined));
console.log(checkObjectIfArray(100));
console.log(checkObjectIfArray("alvin"));
console.log(checkObjectIfArray([1, 2, 3]));
console.log(checkObjectIfArray([]));
console.log(checkObjectIfArray(["apple", "orange", "banana"]));
