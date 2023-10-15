// dom elements
const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

// flavours
const flavours = {
  ninja: ["dojo", "shogun", "shinobi", "samuri", "shuriken"],
  pokemon: ["pika", "pokeball", "pokedex", "evolve", "ash", "gym"],
  space: ["universe", "galaxy", "telescope", "comet", "stars"],
};

let counter = 0;

// functions
const flavourize = (inputText, flavour) => {
  const currentFlavour = flavours[flavour];
  const splitted = inputText.split(" ");

  const mapped = splitted.map((word, index) => {
    if (index % 3 === 0) {
      if (counter < currentFlavour.length) {
        counter++;
      } else {
        counter = counter - currentFlavour.length + 1;
      }
      console.log({ counter, length: currentFlavour.length });
      return currentFlavour[counter - 1];
    } else {
      return word;
    }
  });

  // console.log(mapped);
  updateOutput(mapped.join(" "));
};

const updateOutput = (flavouredText) => {
  output.innerHTML = flavouredText;
};

// event listener

buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();

    if (!textarea.value.trim()) {
      alert("Textarea cannot be blank");
      return;
    }

    const flavour = e.target.dataset.flavour;

    flavourize(textarea.value, flavour);
  });
});
