// selects all tags with the class onlyNumbers and make the only able to input numbers
document.querySelectorAll(".onlyNumbers").forEach(element => {
    element.addEventListener("keypress", evt => {
        //element.setAttribute("maxlength", "2");

        
        // This function is executed when a key is pressed

        // The event parameter 'evt' contains information about the key press event

        // Check if the key pressed has a character code outside the range of numbers 0-9
        if (evt.which < 48 || evt.which > 57) {
        // If the key is not a number (0-9), prevent its default behavior
        // In this case, preventing the default behavior means preventing the key from being typed into the input field
            evt.preventDefault();
        }
    });
});

const dieProbabilities = [
    {
        digit: 1,
        Image: "images/dice-images/dice-six-faces-1.png"
    },
    {
        digit: 2,
        Image: "images/dice-images/dice-six-faces-2.png"
    },
    {
        digit: 3,
        Image: "images/dice-images/dice-six-faces-3.png"
    },
    {
        digit: 4,
        Image: "images/dice-images/dice-six-faces-4.png"
    },
    {
        digit: 5,
        Image: "images/dice-images/dice-six-faces-5.png"
    },
    {
        digit: 6,
        Image: "images/dice-images/dice-six-faces-6.png"
    }
];

const diceResultsDisplay = document.querySelector("#diceResultsDisplay");
const diceDisplay = document.querySelector("#diceDisplay");

function rollDice ()
{
    let numberOfDice = document.querySelector("#numberOfDice").value;
    let diceResults = [];
    let diceIndex = 1;
    let total = 0;

    diceDisplay.textContent = "";
    diceResultsDisplay.textContent = "";

    if (numberOfDice > 100) {
        return;
    };
    console.log("number of dice:", numberOfDice);

    while (numberOfDice > 0) {
        diceResults.push(Math.round(Math.random() * 5));
        numberOfDice--;
    };
    console.log("dice results:", diceResults);

    diceResults.forEach(element => {
        const image = document.createElement("img");
        image.setAttribute("src", dieProbabilities[element].Image);
        image.setAttribute("alt", dieProbabilities[element].digit);
        diceDisplay.appendChild(image);

        const result = document.createElement("span");
        const brake = document.createElement("br");
        result.textContent = `dice-${diceIndex} result: ${dieProbabilities[element].digit}`;
        diceResultsDisplay.appendChild(brake);
        diceResultsDisplay.appendChild(result);
        diceIndex++;

        total += dieProbabilities[element].digit;
    });

    const totalDisplay = document.createElement("span");
    totalDisplay.textContent = `The total amount is ${total}`;
    diceResultsDisplay.appendChild(document.createElement("br"));
    diceResultsDisplay.appendChild(totalDisplay);
};

function reset ()
{
    diceDisplay.textContent = "";
    diceResultsDisplay.textContent = "";
    document.querySelector("#numberOfDice").value = "";
};