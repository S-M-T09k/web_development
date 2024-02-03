class Card
{
    constructor (name, img, )
    {
        this.name = name;
        this.img = img;
        Card.numberOfCards++;
        this.objectId = Card.numberOfCards;
    };
    static numberOfCards = 0;
};

const cards = [
    new Card ("cheeseburger", './Images/cheeseburger.png', ),
    new Card ("fries",        './Images/fries.png', ),
    new Card ("hotdog",       './Images/hotdog.png', ),
    new Card ("ice-cream",    './Images/ice-cream.png', ),
    new Card ("milkshake",    './Images/milkshake.png', ),
    new Card ("pizza",        './Images/pizza.png', ),
    new Card ("cheeseburger", './Images/cheeseburger.png', ),
    new Card ("fries",        './Images/fries.png', ),
    new Card ("hotdog",       './Images/hotdog.png', ),
    new Card ("ice-cream",    './Images/ice-cream.png', ),
    new Card ("milkshake",    './Images/milkshake.png', ),
    new Card ("pizza",        './Images/pizza.png', ),
];

cards.sort(() => 0.5 - Math.random());

console.log("cards after sorting", cards);

const resultDisplay = document.querySelector("#result");
let result = 0;
const grid = document.querySelector("#grid");
let cardsChosen = [];
let allEditableCards = [];

CreateBoard(cards);

function CreateBoard(cards) {
    cards.forEach(element => {
        const card = document.createElement("img");
        card.setAttribute('src', './Images/blank.png');
        card.setAttribute('data-id', cards.indexOf(element));
        card.setAttribute('id-to-match', element.name);
        card.setAttribute('width', '100');
        grid.append(card);
        allEditableCards.push(card);
        card.addEventListener('click', FlipCard);
        console.log("card", card);
        //console.log(allEditableCards);
    });
};

function FlipCard() {
    let cardProperties = {
        cardPlacementId: this.getAttribute('data-id'),
        cardId: this.getAttribute('id-to-match')
    };
    console.log("cardProperties", cardProperties);
    cardsChosen.push(cardProperties);
    console.log("cardsChosen", cardsChosen);
    this.setAttribute('src', cards[cardProperties.cardPlacementId].img);

    let numberOfMatches = 0;
    if (cardsChosen.length == 2) {
        setTimeout(CheckMatch, 500);

        console.log("cardsChosen", cardsChosen);
        console.log("numberOfMatches", numberOfMatches);


    };


    console.log("cardsChosen", cardsChosen);
    console.log("numberOfMatches", numberOfMatches);
};



function CheckMatch() {
    console.log("allEditableCards", allEditableCards);
    console.log("cardsChosen[0]", cardsChosen[0]);
    if (cardsChosen[0].cardId == cardsChosen[1].cardId) {
        allEditableCards[cardsChosen[0].cardPlacementId].setAttribute('src', 'images/white.png');
        allEditableCards[cardsChosen[1].cardPlacementId].setAttribute('src', 'images/white.png');
        allEditableCards[cardsChosen[0].cardPlacementId].removeEventListener('click', FlipCard);
        allEditableCards[cardsChosen[1].cardPlacementId].removeEventListener('click', FlipCard);
        cardsChosen = [];
        setScore();
    }
    else if (cardsChosen[0].cardId != cardsChosen[1].cardId) {
        allEditableCards[cardsChosen[0].cardPlacementId].setAttribute('src', 'images/blank.png');
        allEditableCards[cardsChosen[1].cardPlacementId].setAttribute('src', 'images/blank.png');
        cardsChosen = [];
    };

    console.log("cardsChosen[0]", cardsChosen[0]);
};

function setScore ()
{
    result++;
    resultDisplay.innerHTML = result;
};

//!need to add a reset button but too lazy to do it
