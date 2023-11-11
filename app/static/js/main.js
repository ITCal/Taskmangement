document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");
    const taskList = document.getElementById("tasks");

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;

        if (taskText.trim() === "") {
            alert("Please enter a task description.");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" class="complete-checkbox">
            <span>${taskText}</span>
            <span class="due-date">Due: ${dueDate}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(taskItem);

        // Clear the input fields after adding the task
        taskInput.value = "";
        dueDateInput.value = "";
    });

    // Event delegation to handle task deletion
    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });

    // Event delegation to handle task completion
    taskList.addEventListener("change", function(e) {
        if (e.target.classList.contains("complete-checkbox")) {
            const taskText = e.target.nextElementSibling; // Get the task description element
            if (e.target.checked) {
                taskText.style.textDecoration = "line-through"; // Mark as complete
            } else {
                taskText.style.textDecoration = "none"; // Mark as not complete
            }
        }
    });
});
