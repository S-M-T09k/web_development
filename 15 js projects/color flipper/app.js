const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#054f00"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNumber];
    console.log (randomNumber);
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
});