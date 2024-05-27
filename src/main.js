const toDoList = $("#to-do-list");
const newTaskForm = $("#form-item");
const taskDescriptionInput = $("#task-description");
const showTaskFormBtn = $("#show-task-form");

$(document).ready(function () {
	showTaskFormBtn.on("click", () => setVisibleNewTaskForm(true));

	newTaskForm.on("submit", (event) => {
		event.preventDefault();

		const taskDescription = taskDescriptionInput.val();
		addTaskToList(toDoList, taskDescription);

		setVisibleNewTaskForm(false);
	});
	newTaskForm.on("reset", () => setVisibleNewTaskForm(false));
});

function setVisibleNewTaskForm(isVisible) {
	if (isVisible) {
		newTaskForm.show();
		taskDescriptionInput.trigger("focus");
	} else {
		newTaskForm.hide();
		taskDescriptionInput.val("");
	}
}

function addTaskToList(list, description) {
	const taskItem = newTaskItem(description);
	list.children().last().before(taskItem);
	return taskItem;
}

function newTaskItem(description) {
	const taskItem = $(`<li class="task-item"></li>`);
	const taskInput = $(
		`<input type="text" class="task-change-input" value="${description}" readonly />`
	);
	const taskControl = $(`<ul class="task-control"></ul>`);
	const taskDelBtn = $("<li><button>Del</button></li>");

	taskInput.on("click", () => {
		if (taskInput.attr("readonly")) {
			taskInput.toggleClass("task-completed");
		}
	});

	taskDelBtn.on("click", () => taskItem.detach());
	taskControl.append(taskDelBtn);
	taskItem.append(taskInput, taskControl);
	return taskItem;
}
