let idFetch = document.getElementById.bind(document);

let username;

idFetch("submitButton").onclick = function () {
  username = idFetch("userName").value;
  idFetch("sayHello").innerHTML = "Hello " + username;
};

let sideA;
let sideB;
let sideC;

idFetch("find c").onclick = function () {
  sideA = idFetch("side a").value;
  sideA = Number(sideA);

  sideB = idFetch("side b").value;
  sideB = Number(sideB);

  console.log(sideA, sideB);

  sideC = 180 - (sideA + sideB);
  idFetch("showSideC").innerHTML = "Side C: " + sideC + "°";

  if (sideC <= 0 || sideA <= 0 || sideB <= 0) {
    idFetch("showSideC").innerHTML = "invelid number";
  }

  console.log(sideA, sideB, sideC);
};

let counter = 0;
const countLable = document.querySelector("#countLable");

idFetch("add").onclick = function () {
  counter++;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("reset").onclick = function () {
  counter = 0;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("subtract").onclick = function () {
  counter--;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("double").onclick = function () {
  counter *= 2;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("tripple").onclick = function () {
  counter *= 3;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("quadruple").onclick = function () {
  counter *= 4;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("half").onclick = function () {
  counter /= 2;
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};
idFetch("random").onclick = function () {
  counter = Math.round(Math.random() * 100000);
  console.log(counter);
  idFetch("countLable").innerHTML = counter;
};

let friends = [];
let indexOfFriends = 0;

idFetch("addFri").onclick = function () {
  let friend = idFetch("friend").value;

  if (friend == "") {
    idFetch("friList").innerHTML = "invalid input";
  } else {
    friends.push(friend);
    idFetch("friend").value = "";
    idFetch("friList").innerHTML += `<li>${friends[indexOfFriends]}</li>`;
    indexOfFriends++;
  }
};