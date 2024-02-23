const userNumber = document.querySelector('#day-19 #userInputNumbers');
const addNumberBtn = document.querySelector('#day-19 #addNumber');

const filterEven = document.querySelector('#day-19 #filterEven');
const filterOdd = document.querySelector('#day-19 #filterOdd');
const filterPrime = document.querySelector('#day-19 #filterPrime');
const filterDivisibleBy17 = document.querySelector('#day-19 #filterDivisibleBy17');

const filterBtn = document.querySelector('#day-19 #filterBtn');
const numbersList = document.querySelector('#day-19 ol');
const errorDisplay = document.querySelector('#day-19 .errorDisplay');
// console.log(userNumber.nodeValue);

let numbersToFilter = [];
// console.log(numbersToFilter);

addNumberBtn.addEventListener('click', () => {
  addNumber(userNumber.value);
  userNumber.value = "";
});

filterBtn.addEventListener('click', () => {

  let filteredList;

  switch (true) {
    case filterEven.checked:
      errorDisplay.textContent = "";
      filteredList = even(numbersToFilter);
      break;
    case filterOdd.checked:
      errorDisplay.textContent = "";
      filteredList = odd(numbersToFilter);
      break;
    case filterPrime.checked:
      errorDisplay.textContent = "";
      filteredList = prime(numbersToFilter);
      break;
    case filterDivisibleBy17.checked:
      errorDisplay.textContent = "";
      filteredList = divisibleBy17(numbersToFilter);
      break;

    default:
      errorDisplay.textContent = "please select a method to filter first";
      return;
  };
  console.log(filteredList);

  if (numbersToFilter[0] === undefined) {
    errorDisplay.textContent = "please add some numbers first to filter";
    return;
  };

  numbersList.innerHTML = "";
  filteredList.forEach((number) => {

    let listItem = document.createElement('li');
    listItem.classList.add("listNumber");
    listItem.textContent = number;

    numbersList.appendChild(listItem);

  });
  numbersToFilter = filteredList;

});

function addNumber(number) {

  numbersToFilter.push(number);
  let listItem = document.createElement('li');
  listItem.classList.add("listNumber");
  listItem.textContent = number;

  numbersList.appendChild(listItem);

};

function even(numbers) {

  let filtered = numbers.filter((number) => {
    return !(number % 2);
  });
  // console.log(filtered);

  return filtered;

};

function odd(numbers) {

  let filtered = numbers.filter((number) => {
    return (number % 2);
  });
  // console.log(filtered);

  return filtered;

};

function prime(numbers) {

  let filtered = numbers.filter((number) => {

    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) return false;
    }
    return number > 1;

  });
  // console.log(filtered);

  return filtered;

};

function divisibleBy17(numbers) {

  let filtered = numbers.filter((number) => {
    return !(number % 17);
  });
  // console.log(filtered);

  return filtered;

};