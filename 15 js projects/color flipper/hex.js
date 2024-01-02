const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => 
{
    let generatedColor = "#"
    for (let i = 0; i < 6; i++)
    {
        let randomPlaceHolder = Math.floor(Math.random() * hex.length);
        console.log (randomPlaceHolder);
        generatedColor += hex[randomPlaceHolder];
    };
    console.log(generatedColor);
    color.innerHTML = generatedColor;
    generatedColor.toLowerCase;
    document.body.style.backgroundColor = generatedColor;
});