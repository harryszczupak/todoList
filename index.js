const button = document.querySelector('button');
const input = document.querySelector('input');
const todoPlaceHolder = document.querySelector('.Tasks-holder');
let tabTasks = [];
let tabErrors = [];
button.addEventListener('click', (e) => {
	e.preventDefault();

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

	TodoInput.value = input.value;

	TodoInput.setAttribute('readonly', 'readonly');

	TodoInput.classList.add('ToDoInput');

	task.appendChild(TodoInput);

	task.appendChild(confirmButton);

	task.appendChild(deleteButton);

	const error = document.createElement('div');

	error.textContent = 'Wprowadź zadanie';

	if (input.value != '') {
		todoPlaceHolder.appendChild(task);

		tabTasks.push(task);
		todoPlaceHolder.classList.remove('failed');

		if (tabTasks.length > 8) {
			todoPlaceHolder.removeChild(task);
			tabTasks.pop();
		}
	} else {
		tabErrors.push(error);

		error.setAttribute('class', 'error');
		todoPlaceHolder.appendChild(error);

		if (tabErrors.length > 1) {
			todoPlaceHolder.removeChild(error);
		}
		todoPlaceHolder.classList.add('failed');
	}

	deleteButton.addEventListener('click', () => {
		tabTasks.pop();
		console.log(tabTasks);
		task.remove();
	});
	confirmButton.addEventListener('click', () => {
		TodoInput.removeAttribute('readonly', 'readonly');
		TodoInput.focus();
	});
});
