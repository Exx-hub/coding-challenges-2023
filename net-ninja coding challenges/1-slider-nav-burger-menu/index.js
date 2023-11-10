const burger = document.querySelector(".burger");
const slideMenu = document.querySelector(".slide-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  slideMenu.classList.toggle("show");
});
