import "./styles.css";
import pen from './assets/pencil.svg';
import check from './assets/check-bold.svg'
const peronalList=[];
const homeList=[];
const workList=[];
const doneList=[];
let taskList=JSON.parse(localStorage.getItem("home"));
const inTitle=document.getElementById("title");
const inDesc=document.getElementById("desc");
const inDueDate=document.getElementById("date");
const inP=document.getElementById("p");
const inList=document.getElementById("list");
const submitBtn=document.getElementById("submit");
const form=document.getElementById("taskForm");
const add =document.getElementById("plus");
const content =document.getElementById("content");

const addTask= () =>{
    event.preventDefault;
    const taskObj={
        id: inTitle.value.toLowerCase().split(" ").join("-")+inDueDate.value+list.value,
        title: inTitle.value,
        description:inDesc.value,
        dueDate:inDueDate.value,
        priority:inP.value,
        list:parseInt(inList.value),
    }    
    console.log(taskObj);
    switch (taskObj.list) {
        case 1 :
            homeList.push(taskObj);    
            localStorage.setItem("home",JSON.stringify(homeList));
            break;
        case 2 :
            workList.push(taskObj);    
            localStorage.setItem("work",JSON.stringify(workList));
            break;
        case 3 :
            peronalList.push(taskObj);    
            localStorage.setItem("personal",JSON.stringify(peronalList));
            break;
            
       
        default:
            alert("Error");
            return;
        
    }
    form.classList.toggle("flex");
    getTask(taskObj.list);

}
const getTask=(list)=> {
    switch (list) {
        case 1 :
            taskList=JSON.parse(localStorage.getItem("home"));
            break;
        case 2 :
            taskList=JSON.parse(localStorage.getItem("work"));
            break;
        case 3 :
            taskList=JSON.parse(localStorage.getItem("personal"));
            break;
        case 4 :
            taskList=JSON.parse(localStorage.getItem("done"));
            break;    
        
        default:
            alert("Error");
            return;
        
    }
    
    console.log(taskList);
    
   updateContainer(); 
}
const updateContainer=()=> {
    content.innerHTML=``;
    taskList.forEach(task => {
        content.innerHTML+=`<div class="card ${task.priority}" id="${task.id}" >
            <div class="info">
                <h2>Title: ${task.title}</h1>
                <h2>Description: ${task.description}</h1>
                <h2>Due Date: ${task.dueDate}</h1>
            </div>
            
                <button onclick="doTask(this)" type="button"><img src=${check} "></button>
            
        </div>`
    });
    
}


const doTask = (buttonEl)=>{
    const type =buttonEl.parentElement.list ;
    let index;
    switch (type) {
        case 1 :
            
            index=homeList.findIndex((item)=>item.id===buttonEl.parentElement.id);
            buttonEl.parentElement.remove();
            homeList.splice(index, 1);
            localStorage.setItem("home", JSON.stringify(homeList));
            break;
        case 2 :
            index=workList.findIndex((item)=>item.id===buttonEl.parentElement.id);
            buttonEl.parentElement.remove();
            workList.splice(index, 1);
            localStorage.setItem("work", JSON.stringify(workList));
            
            break;
        case 3 :
            index=peronalList.findIndex((item)=>item.id===buttonEl.parentElement.id);
            buttonEl.parentElement.remove();
            peronalList.splice(index, 1);
            localStorage.setItem("personal", JSON.stringify(peronalList));
            
            break;
        
        default:
            alert("Error");
            return;
    }
    updateContainer()
    

};

updateContainer()
submitBtn.addEventListener("click",addTask);
add.addEventListener("click",()=>{form.classList.toggle("flex");
});
