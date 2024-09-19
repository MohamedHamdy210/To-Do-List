import { getTask } from "./gettask";
const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
const inTitle=document.getElementById("title");
const inDesc=document.getElementById("desc");
const inDueDate=document.getElementById("date");
const inP=document.getElementById("p");
const inList=document.getElementById("list");
const submitBtn=document.getElementById("submit");
const cancelBtn=document.getElementById("cancel");
const form=document.getElementById("taskForm");

const addTask= () =>{
    
    const taskObj={
        id: inTitle.value.toLowerCase().split(" ").join("-")+Date.now()+list.value,
        title: inTitle.value,
        description:inDesc.value,
        dueDate:inDueDate.value,
        priority:inP.value,
        list:inList.value,
    }    
    tasks.push(taskObj);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    form.classList.toggle("flex");
    getTask(taskObj.list);
}
submitBtn.addEventListener("click",()=>{addTask();
    formContainer.classList.toggle("hidden");});
cancelBtn.addEventListener("click",()=>{form.classList.toggle("flex");formContainer.classList.toggle("hidden");});
export{addTask, tasks};