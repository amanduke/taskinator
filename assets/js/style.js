var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChilld(listItemEl);
}

// not sure why TypeError gets caught, the button still generates a new task though
buttonEl.addEventListener("click", createTaskHandler);

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
});


console.log(window.document);
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

