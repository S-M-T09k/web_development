const form = document.querySelector('.form');
const searchTypeInput = form.querySelector('#searchType');
const searchBox = form.querySelector('#searchBox');
const searchButton = form.querySelector('#searchButton');
const outputDisplay = document.querySelector('.pokemonInfo');

async function getPokemon(searchOption) {

  const url = `https://pokeapi.co/api/v2/pokemon/${searchOption}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  let response;

  try {
    const res = await fetch(url, options);
    response = await res.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  };

  const pokemon = {
    name: response.name,
    pokedexNumber: response.id,
    imageSrc: response.sprites.front_default,
    typing: response.types.map(type => type.type.name),
    abilities: response.abilities.map(ability => ability.ability.name),
    stats: {
      hp: response.stats[0].base_stat,
      attack: response.stats[1].base_stat,
      defense: response.stats[2].base_stat,
      specialAttack: response.stats[3].base_stat,
      specialDefense: response.stats[4].base_stat,
      speed: response.stats[5].base_stat
    },
    moves: response.moves.map(move => move.move.name),
  };

  // console.log(pokemon);

  return pokemon;

};

const main = async () => {

  search = searchBox.value;
  const pokemon = await getPokemon(search);
  console.log(pokemon);
  outputDisplay.textContent = '';

  image();
  name();
  pokedexNumber();
  typing();
  abilities();
  stats();
  moves();

  function stats() {
    const stats = document.createElement('li');
    stats.textContent = `Stats: `;
    const stts = document.createElement('ul');
    const hp = document.createElement('li');
    hp.textContent = `HP: ${pokemon.stats.hp}`;
    const attack = document.createElement('li');
    attack.textContent = `Attack: ${pokemon.stats.attack}`;
    const defense = document.createElement('li');
    defense.textContent = `Defense: ${pokemon.stats.defense}`;
    const specialAttack = document.createElement('li');
    specialAttack.textContent = `Special Attack: ${pokemon.stats.specialAttack}`;
    const specialDefense = document.createElement('li');
    specialDefense.textContent = `Special Defense: ${pokemon.stats.specialDefense}`;
    const speed = document.createElement('li');
    speed.textContent = `Speed: ${pokemon.stats.speed}`;
    stts.appendChild(hp);
    stts.appendChild(attack);
    stts.appendChild(defense);
    stts.appendChild(specialAttack);
    stts.appendChild(specialDefense);
    stts.appendChild(speed);
    stats.appendChild(stts);
    outputDisplay.appendChild(stats);
  }

  function abilities() {
    const abilities = document.createElement('li');
    abilities.textContent = `Abilities: `;
    const albs = document.createElement('ul');
    pokemon.abilities.forEach(ability => {
      const li = document.createElement('li');
      li.textContent = ability;
      albs.appendChild(li);
    });
    abilities.appendChild(albs);
    outputDisplay.appendChild(abilities);
  }

  function typing() {
    const typing = document.createElement('li');
    pokemon.typing.length > 1 ? typing.textContent = `Typing: ${pokemon.typing[0]} and ${pokemon.typing[1]}`
      : typing.textContent = `Typing: ${pokemon.typing[0]}`;
    // typing.textContent = `Typing: ${pokemon.typing}`;
    outputDisplay.appendChild(typing);
  }

  function pokedexNumber() {
    const pokedexNumber = document.createElement('li');
    pokedexNumber.textContent = `Pokedex Number: ${pokemon.pokedexNumber}`;
    outputDisplay.appendChild(pokedexNumber);
  }

  function name() {
    const name = document.createElement('li');
    name.textContent = `Name: ${pokemon.name}`;
    outputDisplay.appendChild(name);
  }

  function image() {
    const image = document.createElement('img');
    image.setAttribute('src', pokemon.imageSrc);
    outputDisplay.appendChild(image);
  }

  function moves() {
    const moves = document.createElement('li');
    const mvs = document.createElement('ul');
    moves.textContent = `Moves: `;
    pokemon.moves.sort();
    pokemon.moves.forEach(move => {
      const li = document.createElement('li');
      li.textContent = move;
      mvs.appendChild(li);
    });
    moves.appendChild(mvs);
    outputDisplay.appendChild(moves);
  }

};

searchTypeInput.addEventListener('input', () => {
  if (searchTypeInput.value === "name") {
    searchBox.setAttribute('placeholder', 'Enter Pokemon Name');
  } else if (searchTypeInput.value === "pokedexNumber") {
    searchBox.setAttribute('placeholder', 'Enter Pokedex Number');
  } else {
    searchBox.setAttribute('placeholder', 'Error');
    console.error("invalid search type");
  };
});

let search;
searchButton.addEventListener('click', main);
searchBox.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    main();
  };
});
