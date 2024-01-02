const data = [
  {
    id: 1,
    name: `Bulbasaur`,
    job: `Grass/Poison`,
    img: `images/1.png`,
    text: `BULBASAUR can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.`,
  },
  {
    id: 2,
    name: `Gardevoir`,
    job: `Psychic/Fairy`,
    img: `images/282.png`,
    text: `GARDEVOIR has the psychokinetic power to distort the dimensions and create a small black hole. This POKéMON will try to protect its TRAINER even at the risk of its own life.`,
  },
  {
    id: 3,
    name: `Garchomp`,
    job: `Dragon/Ground`,
    img: `images/445.png`,
    text: `It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.`,
  },
  {
    id: 4,
    name: `Diancie`,
    job: `Rock/Fairy`,
    img: `images/719.png`,
    text: `A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world. It can instantly create many diamonds by compressing the carbon in the air between its hands.`,
  },
  {
    id: 5,
    name: `Ganger`,
    job: `Ghost/Poison`,
    img: `images/094.png`,
    text: `Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a GENGAR running past you, pretending to be your shadow.`,
  },
  {
    id: 6,
    name: `Pikachu`,
    job: `Electric`,
    img: `images/025.png`,
    text: `This POKéMON has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps. It occasionally discharges electricity when it is dozy after waking up.`,
  },
  {
    id: 7,
    name: `Ceruledge`,
    job: `Fire/Ghost`,
    img: `images/937.png`,
    text: `The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.`,
  },
  {
    id: 8,
    name: `Greninja`,
    job: `Water/Dark`,
    img: `images/658.png`,
    text: `It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.`,
  },
  {
    id: 9,
    name: `Rayquaza`,
    job: `Dragon/Flying`,
    img: `images/384.png`,
    text: `Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.
    `,
  },
  {
    id: 10,
    name: `Magearna`,
    job: `Steel/Fairy`,
    img: `images/801.png`,
    text: `Its mechanized body is merely a vessel. Its true self is its Soul-Heart, an artificial soul. It synchronizes its consciousness with others to understand their feelings. This faculty makes it useful for taking care of people.`,
  }
];

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const img = document.querySelector("#person-img");
const info = document.querySelector("#info");

const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", ChangeData(currentItem));

function ChangeData (index)
{
  const item = data[index];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

previousBtn.addEventListener("click", () => {
  if (currentItem <= 0) {
    currentItem = data.length - 1;
  }
  else {
    currentItem--;
  };
  ChangeData(currentItem);
});

nextBtn.addEventListener("click", () => {
  if (currentItem >= data.length - 1) {
    currentItem = 0;
  }
  else{
    currentItem++;
  };
  ChangeData(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * data.length);
  ChangeData(currentItem);
});