let toDoList = [];
const add = document.getElementById("add");
const list = document.getElementById("list");
const input = document.getElementById("input");
let toDoListIndex = 0;

add.onclick = () => 
{
    toDoList.push(input.value);
    list.innerHTML += (`<li id="listOf${toDoListIndex}">
                        ${toDoList[toDoListIndex]}
                        <button type="button" id="remove${toDoListIndex}">remove</button>
                        </li>`);

    console.log(toDoList);
    console.log(toDoListIndex);
    input.value = "";

    toDoListIndex++;
    console.log(toDoList.length);
};