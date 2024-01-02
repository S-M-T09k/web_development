const submitBtn = document.querySelector("#submitBtn");
const nameDisplay = document.querySelector("#nameDisplay");

let userName;

submitBtn.addEventListener("click", () => {
    const nameInput = document.querySelector("#userName").value;
    userName = nameInput;
    userName = userName.trim();
    userName = userName.toLowerCase();
    userName = userName.replaceAll(" ", "");
    nameDisplay.innerText = `Hello ${userName}`;
    document.querySelector("#userName").value = "";
});