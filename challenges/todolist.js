let toDoList = [];
const addButton = document.querySelector("#add");
const removeButton = document.querySelector('#forRemove');
const list = document.querySelector("#list");
const input = document.querySelector("#input");
let toDoListIndex = 0;
let listItems;



//todo:make this possible.
addButton.addEventListener('click', () => {

	const textInput = input.value.trim();

	if (textInput != null && textInput != undefined && textInput != "") {
		toDoList.push(createListItem(textInput));
	}

	if (toDoList.length > 0) {
		removeButton.style.visibility = "visible";
	}
	else {
		removeButton.style.visibility = "hidden";
	}

	input.value = null;
	//!this is on the right path carry on with this idea
	// listItems = list.childNodes;
	// console.log(listItems);

});

removeButton.addEventListener('click', () => {

	removeListItem();

	if (toDoList.length > 0) {
		removeButton.style.visibility = "visible";
	}
	else {
		removeButton.style.visibility = "hidden";
	}

})

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

	return item;
};


//!this shit doesn't work yet
//!it works but still needs adjusting
function removeListItem()	{

	let checkBoxes = [];
	toDoList.forEach((element) => {
		checkBoxes.push(element.lastElementChild);
	});

	// console.log(toDoList);
	// console.log(checkBoxes);

	checkBoxes.forEach((checkBox) => {

		//!this is shit code, probably no one can read this
		if (checkBox.checked) {
			checkBox.parentElement.remove();
			toDoList.splice(toDoList.indexOf(checkBox.parentElement), 1);
		}

	});

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