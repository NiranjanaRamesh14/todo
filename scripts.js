function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">❌</button>`;
    li.onclick = function () {
        this.classList.toggle("completed");
    };
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
