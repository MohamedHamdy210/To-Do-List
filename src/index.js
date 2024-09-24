import "./styles.css";
import check from "./assets/check-bold.svg";
import bin from "./assets/delete.svg";
import { addTask, tasks } from "./addtask";
import { getTask, taskList } from "./gettask";
const add = document.getElementById("plus");
const content = document.getElementById("content");
const form = document.getElementById("taskForm");
const homeBtn = document.getElementById("home");
const workBtn = document.getElementById("work");
const personalBtn = document.getElementById("personal");
const doneBtn = document.getElementById("done");
const formContainer = document.getElementById("formContainer");
window.doneTask = function (buttonEl) {
  const doneIndex = tasks.findIndex(
    (item) => item.id === buttonEl.parentElement.parentElement.id,
  );
  if (tasks[doneIndex].list !== "Done") {
    tasks[doneIndex].list = "Done";
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const displayIndex = taskList.findIndex(
      (item) => item.id === buttonEl.parentElement.parentElement.id,
    );
    taskList.splice(displayIndex, 1);

    updateContainer();
  }
};
window.deleteTask = function (buttonEl) {
  const delIndex = tasks.findIndex(
    (item) => item.id === buttonEl.parentElement.parentElement.id,
  );
  const listIndex = taskList.findIndex(
    (item) => item.id === buttonEl.parentElement.parentElement.id,
  );
  buttonEl.parentElement.remove();
  tasks.splice(delIndex, 1);
  taskList.splice(listIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateContainer();
};

const updateContainer = () => {
  content.innerHTML = ``;
  if (taskList.length) {
    content.innerHTML = `<h1>${taskList[0].list}</h1>`;
    taskList.forEach((task) => {
      content.innerHTML += `<div class="card ${task.priority} ${task.list === "Done" ? "Done" : ""}" id="${task.id}" >
            <div class="info">
                <h2>Title: ${task.title}</h1>
                <h2>Description: ${task.description}</h1>
                <h2>Due Date: ${task.dueDate}</h1>
            </div>
           <div class="btns">
               <img src=${bin} onclick="deleteTask(this)">               
               <img src=${check} onclick="doneTask(this)">
           </div>
              
        </div>`;
    });
  } else {
    content.innerHTML = `<h1>No Tasks</h1>`;
  }
};

getTask();
add.addEventListener("click", () => {
  form.classList.toggle("flex");
  formContainer.classList.toggle("hidden");
});
homeBtn.addEventListener("click", () => {
  getTask("Home");
});
workBtn.addEventListener("click", () => {
  getTask("Work");
});
personalBtn.addEventListener("click", () => {
  getTask("Personal");
});
doneBtn.addEventListener("click", () => {
  getTask("Done");
});
export { updateContainer };
