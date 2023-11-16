foo(); // can be called before declaration because function declaration are hoisted
bar(); // bar is undefined because function expression is not hoisted

function foo() {
  console.log("foo");
}

const bar = () => console.log("bar");
