const button = document.querySelector('button');
const input = document.querySelector('input');
const todoPlaceHolder = document.querySelector('.Tasks-holder');
let tabTasks = [];

const createTask = (param) => {
	const task = document.createElement('div');

	task.classList.add('task');

	const confirmButton = document.createElement('button');

	confirmButton.classList.add('confirm');

	const ConfirmImg = document.createElement('img');

	ConfirmImg.src = 'pngegg.png';

	confirmButton.appendChild(ConfirmImg);

	const deleteButton = document.createElement('button');

	deleteButton.classList.add('delete');

	const deleteImg = document.createElement('img');

	deleteImg.src = 'del.png';

	deleteButton.appendChild(deleteImg);

	const TodoInput = document.createElement('input');

	if (param == '') {
		TodoInput.value = 'Brak notatki';
	} else {
		TodoInput.value = param;
	}

	TodoInput.setAttribute('readonly', 'readonly');

	TodoInput.classList.add('ToDoInput');

	task.appendChild(TodoInput);

	task.appendChild(confirmButton);

	task.appendChild(deleteButton);

	tabTasks.push(TodoInput.value);

	if (tabTasks.length < 9) {
		todoPlaceHolder.appendChild(task);
	}
	if (tabTasks.length > 8) {
		tabTasks.pop();
	}

	localStorage.setItem('myelement', JSON.stringify(tabTasks));

	deleteButton.addEventListener('click', () => {
		tabTasks.pop();
		localStorage.setItem('myelement', JSON.stringify(tabTasks));
		task.remove();
	});
	confirmButton.addEventListener('click', () => {
		TodoInput.removeAttribute('readonly', 'readonly');
		TodoInput.focus();
		if (TodoInput.focus) {
			confirmButton.addEventListener('click', () => {
				TodoInput.toggleAttribute('readonly');
			});
		}
	});
};
button.addEventListener('click', (e) => {
	e.preventDefault();
	let value = input.value;
	createTask(value);
	input.value = '';
});
function GetFromLocalStorage() {
	const element = JSON.parse(localStorage.getItem('myelement'));
	element.forEach((el) => {
		createTask(el);
	});
}
GetFromLocalStorage();
