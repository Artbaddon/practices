const getActualDate = () => {};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "July",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const actualDate = new Date();
const actualMonth = months[actualDate.getMonth()];
const dayOfTheWeek = days[actualDate.getDay() - 1];
const dayOfTheMonth = actualDate.getDate();

const dateContainer = document.getElementById("date");
dateContainer.firstElementChild.innerHTML = `${dayOfTheWeek}, ${dayOfTheMonth}`;
dateContainer.lastElementChild.innerHTML = actualMonth;

/*************************************************/
const taskContainer = document.getElementById("tasks-container");
const numberOfTasks = document.getElementById("number-tasks");
const addTaskBtn = document.getElementById("add-task-btn");
let checkBox = null;
let deleteTaskButton = null;

// addTaskBtn.addEventListener("click", addTask);

const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("addTaskDialog");
let taskName = null;

const tasks = ["example", "example2"];

// Update button opens a modal dialog
addTaskBtn.addEventListener("click", () => {
  dialog.showModal();
});

deleteTaskButton?.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});
dialog.addEventListener("submit", addTask);
addTask();
// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close();
});

function addTask() {
  taskName = document.getElementById("task-name").value;
  if (tasks.find((element) => element === taskName)) {
    return alert("item duplicated");
  }
  if (taskName) tasks.push(taskName);
  setNumberTasks();
  showTask();
}

function setNumberTasks() {
  numberOfTasks.innerText =
    tasks.length > 1
      ? `${tasks.length} tasks left`
      : `${tasks.length} task left`;
}

function showTask() {
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].length) {
      const taskDiv = taskContainer.appendChild(document.createElement(`div`));
      taskDiv.classList = "task";
      taskDiv.innerHTML = `
            <form action="">
              <div class="checkbox-container">
              <input type='hidden' value='${tasks[i]}' id='${tasks[i]}'/>
                <input
                  type="checkbox"
                  name="check-task"
                  class="check-task"
                  id="check-task"
                />
              </div>
              <div class="task-body-container">
    
                <h3 class="task-body">${tasks[i]}</h3>
              </div>
              <div class="task-actions">
                <button class="bx bxs-edit-alt" id="edit-task"></button
                ><button class="bx bxs-trash-alt" id="delete-task"></button>
              </div>
            </form>
            `;

      deleteTaskButton = document
        .querySelectorAll(".bxs-trash-alt")
        [i].addEventListener("click", (e) => {
          e.preventDefault();
          const taskName = document.getElementById(tasks[i]).value;
          console.log(taskName);
          if (confirm(`You are about to delete ${taskName}, are you sure?`)) {
            alert("deleted");
            deleteTask(taskName);
            setNumberTasks();
            showTask();
          }
        });

      document
        .querySelectorAll(".bxs-edit-alt")
        [i].addEventListener("click", (e) => {
          const taskName = document.getElementById(tasks[i]).value;
          e.preventDefault();
          document.querySelectorAll(".task-body-container")[
            i
          ].innerHTML = `<textarea name="" id="" cols="50" rows="2" style="height:10%">${taskName}</textarea>`;
          alert("click edit");
        });

      document
        .querySelectorAll(".check-task")
        [i].addEventListener("click", (e) => {
          e.target.setAttribute("disabled", "");
          document
            .querySelectorAll(".bxs-edit-alt")
            [i].setAttribute("disabled", "");

          document
            .querySelectorAll(".task-body")
            [i].classList.toggle("completed-task");
        });
    }
    setNumberTasks();
  }
}

function findTask(taskName) {
  return tasks.indexOf(taskName);
}

function deleteTask(taskName) {
  let taskIndex = findTask(taskName);
  tasks.splice(taskIndex, 1);
  showTask();
}
