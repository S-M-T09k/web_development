let idFetch = document.getElementById.bind(document);


let amount;
let item;
let list = [];

idFetch("setAmount").onclick = () => 
{
    amount = idFetch ("amount").value;
    if (amount > 100 || amount < 1) 
    {
        amount = 1;
    };
    console.log(amount);
};

let index = 0;
idFetch("add").onclick = () =>
{
    item = idFetch("item").value;
    list.push(item);
    console.log(list);

    addItem(index);
    index++;
};

function addItem (index)
    {
        console.log (list[index])
        idFetch ("listFrame").innerHTML += `<li>${list[index]}</li>`
    };

let tests = document.querySelectorAll(".tests");
console.log(tests);