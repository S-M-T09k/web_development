const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*/-+=_~<>?|;:{}[]()";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*/-+=_~<>?|;:{}[]()";
const firstTag = document.querySelector("#first").innerText;
const secondTag = document.querySelector("#second").innerText;
const thirdTag = document.querySelector("#third").innerText;
const forthTag = document.querySelector("#forth").innerText;

document.querySelector("#first").onmouseover = (e) =>
{
    let iterations = 1;
    const firstIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = GetRandomLetter();

        if (iterations > 9) {
            clearInterval(firstIntervalID);
            e.target.innerText = firstTag;
        };
        
        iterations++;
    };

    function GetRandomLetter ()
    {
        let i;
        i = allLetters[Math.floor(Math.random() * allLetters.length)];
        return i;
    };
};

document.querySelector("#second").onmouseover = (e) =>
{
    let iterations = 1;
    const secondIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("")
        .map(() => numbers[Math.floor(Math.random() * numbers.length)]).join("");

        if (iterations > 9) {
            clearInterval(secondIntervalID);
            e.target.innerText = secondTag;
        };
        
        iterations++;
    };
};

document.querySelector("#third").onmouseover = (e) =>
{
    let iterations = -5;
    const thirdIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => 
        {
            if (index < iterations) {
                return "#";
            }
            else {
                return symbols[Math.floor(Math.random() * symbols.length)];
            }
        }
        ).join("");

        if (iterations > thirdTag.length) {
            clearInterval(thirdIntervalID);
            setTimeout(() => {
                e.target.innerText = thirdTag;
            }, 250);
        };
        
        iterations++;
    };
};

document.querySelector("#forth").onmouseover = (e) =>
{
    let iterations = -5;
    const forthIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => 
        {
            if (index < iterations) {
                return forthTag[index];
            }
            else {
                return letters[Math.floor(Math.random() * letters.length)];
            }
        }
        ).join("");

        if (iterations > forthTag.length) {
            clearInterval(forthIntervalID);
            e.target.innerText = forthTag;
        };
        
        iterations++;
    };
};

const forthTag1 = document.querySelector("#forth1").innerText;
const forthTag2 = document.querySelector("#forth2").innerText;
const forthTag3 = document.querySelector("#forth3").innerText;

document.querySelector("#forth1").onmouseover = (e) =>
{
    let iterations = -5;
    const forthIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => 
        {
            if (index < iterations) {
                return forthTag1[index];
            }
            else {
                return allLetters[Math.floor(Math.random() * allLetters.length)];
            }
        }).join("");

        if (iterations > forthTag1.length) {
            clearInterval(forthIntervalID);
            e.target.innerText = forthTag1;
        };
        
        iterations++;
    };
};

document.querySelector("#forth2").onmouseover = (e) =>
{
    let iterations = -5;
    const forthIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => 
        {
            if (index < iterations) {
                return forthTag2[index];
            }
            else {
                return numbers[Math.floor(Math.random() * numbers.length)];
            }
        }
        ).join("");

        if (iterations > forthTag2.length) {
            clearInterval(forthIntervalID);
            e.target.innerText = forthTag2;
        };
        
        iterations++;
    };
};

document.querySelector("#forth3").onmouseover = (e) =>
{
    let iterations = -5;
    const forthIntervalID = setInterval(ChangeText, 50);

    function ChangeText ()
    {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => 
        {
            if (index < iterations) {
                return forthTag3[index];
            }
            else {
                return symbols[Math.floor(Math.random() * symbols.length)];
            }
        }
        ).join("");

        if (iterations > forthTag3.length) {
            clearInterval(forthIntervalID);
            e.target.innerText = forthTag3;
        };
        
        iterations++;
    };
};

//!this project took way too long