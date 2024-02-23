//!array destructuring
let a = 1;
let b = 2;

[a, b] = [b, a] //*swap values
console.log(a, b);

const names = ["mike", "lua", "fin", "mila", "kate", "furina", "hutao", "nuna"];

[names[0], names[7]] = [names[7], names[0]] //*swap values
console.log(names);

const [firstPerson, secondPerson, ThirdPerson, ...extraPeople] = names; //*assign value to multiple variables

console.log(firstPerson);
console.log(secondPerson);
console.log(ThirdPerson);
console.log(extraPeople);

//!object destructuring
const person1 = {
  firstName: "Mike",
  lastName: "Tyson",
  age: 20,
  job: "boxer",
};

const person2 = {
  firstName: "Miya",
  lastName: "Nano",
  age: 14,
};

const {firstName, lastName, age, job="unemployed"} = person1; //person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function sayNameAndAge({firstName, lastName, age, job="unemployed"}) {
  console.log(`${firstName} ${lastName}\nage: ${age}`);
};

sayNameAndAge(person1);
sayNameAndAge(person2);