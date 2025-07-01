const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const taskText = document.getElementById("task-input").value;
  const taskDate = document.getElementById("task-date").value;

  addTask(taskText, taskDate);
  taskForm.reset();
});

function addTask(text, dateTime) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = `${text} ${dateTime ? '- ' + dateTime : ''}`;
  li.appendChild(span);

  // Action buttons
  const actions = document.createElement("div"); 
  actions.classList.add("actions");
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    span.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", text);
    if (newText) span.textContent = newText + (dateTime ? ` - ${dateTime}` : '');
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.appendChild(actions);
  taskList.appendChild(li);
}