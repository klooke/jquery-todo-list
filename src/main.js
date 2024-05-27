const newTaskForm = $("#form-item");
const taskDescriptionInput = $("#task-description");
const showTaskFormBtn = $("#show-task-form");
$(document).ready(function () {
	showTaskFormBtn.on("click", () => setVisibleNewTaskForm(true));
	newTaskForm.on("submit", (event) => {
		event.preventDefault();
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
}
