const input = document.querySelector("input");
const check = document.querySelector("span");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  console.log(emailRegex.test(e.target.value));

  if (emailRegex.test(e.target.value)) {
    input.classList.add("valid");
    check.classList.add("show");
  } else {
    input.classList.remove("valid");
    check.classList.remove("show");
  }
});
