let toDoList = [];
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");
const input = document.querySelector("#input");
let toDoListIndex = 0;

//todo:make this possible.
addButton.addEventListener('click', () => {

	const textInput = input.value;

	if (textInput != null && textInput != undefined && textInput != "") {
		createListItem(textInput);
	}

	input.value = null;

});

function createListItem(text) {
	
	toDoListIndex++;
	const item = document.createElement('li');
	const label = document.createElement('label');
	const checkBox = document.createElement('input');

	item.id = "item"+toDoListIndex;
	item.classList.add("listItem");

	checkBox.type = 'checkBox';
	checkBox.id = "checkBox"+toDoListIndex;
	checkBox.classList.add("checkBox");

	label.htmlFor = checkBox.id;
	label.textContent = text;

	console.log(item, label, checkBox);
	list.appendChild(item);
	item.appendChild(label);
	item.appendChild(checkBox);

};


// add.onclick = () => 
// {
//     toDoList.push(input.value);
//     list.innerHTML += (`<li id="listOf${toDoListIndex}">
//                         ${toDoList[toDoListIndex]}
//                         <button type="button" id="remove${toDoListIndex}">remove</button>
//                         </li>`);

//     console.log(toDoList);
//     console.log(toDoListIndex);
//     input.value = "";

//     toDoListIndex++;
//     console.log(toDoList.length);
// };