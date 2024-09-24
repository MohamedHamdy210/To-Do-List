import { updateContainer } from ".";
let taskList = [];
const getTask = (list = "Home") => {
  taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  if (taskList.length) {
    taskList = taskList.filter((item) => item.list == list);
  }
  updateContainer();
};
export { getTask, taskList };
