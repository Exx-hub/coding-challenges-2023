const card = document.querySelector(".card");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
  front.classList.toggle("showing");
  back.classList.toggle("showing");
});
