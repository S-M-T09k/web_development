const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers          = "1234567890";
const symbols          = "!@#$%^&*/-+=_~<>?|;:{}[]()`";

const includeLowerCase = document.querySelector("#includeLowerCase");
const includeUpperCase = document.querySelector("#includeUpperCase");
const includeNumbers   = document.querySelector("#includeNumbers");
const includeSymbols   = document.querySelector("#includeSymbols");
const passwordDisplay  = document.querySelector("#passwordDisplay");

function generatePassword ()
{
    const passwordLength = document.querySelector("#passwordLength").value;
    let password = "";
    let allowedChars = "";
    
    allowedChars += includeLowerCase.checked ? lowerCaseLetters : "";
    allowedChars += includeUpperCase.checked ? upperCaseLetters : "";
    allowedChars += includeNumbers.checked   ? numbers          : "";
    allowedChars += includeSymbols.checked   ? symbols          : "";

    if (passwordLength == "") {
        passwordDisplay.innerText = "you need to input a length for the password";
        return;
    };

    if (includeLowerCase.checked === false && 
        includeUpperCase.checked === false && 
        includeNumbers.checked   === false && 
        includeSymbols.checked   === false) {
        passwordDisplay.innerText = "you need at least something in the password";
        return;
    };

    for (let i = 0; i < passwordLength; i++) {
        password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    };

    passwordDisplay.innerText = password;
};