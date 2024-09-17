import "./styles.css";
const peronalList=[];
const homeList=[];
const workList=[];
const doneList=[];
const inTitle=document.getElementById("title");
const inDesc=document.getElementById("desc");
const inDueDate=document.getElementById("date");
const inP=document.getElementById("p");
const inList=document.getElementById("list");
const submitBtn=document.getElementById("submit");
const form=document.getElementById("taskForm");
const add =document.getElementById("plus");
function addTask () {
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
            doneList.push(taskObj);    
            localStorage.setItem("done",JSON.stringify(todayList));
            break;
        case 2 :
            peronalList.push(taskObj);    
            localStorage.setItem("personal",JSON.stringify(peronalList));
            break;
        case 3 :
            homeList.push(taskObj);    
            localStorage.setItem("home",JSON.stringify(homeList));
            break;
            
        case 4 :
            workList.push(taskObj);    
            localStorage.setItem("work",JSON.stringify(workList));
            break;
            
        
        default:
            alert("Error");
            return;
        
    }
    form.classList.toggle("hidden");
}
function getTask(list) {
    let taskList;
    switch (list) {
        case 1 :
            taskList=JSON.parse(localStorage.getItem("done"));
            break;
        case 2 :
            taskList=JSON.parse(localStorage.getItem("peronal"));
            break;
        case 3 :
            taskList=JSON.parse(localStorage.getItem("home"));
            break;
        case 4 :
            taskList=JSON.parse(localStorage.getItem("work"));
            break;    
        
        default:
            alert("Error");
            return;
        
    }
    
    console.log(taskList);

    
}
add.addEventListener("click",()=>{console.log("done")})
 getTask(4);

submitBtn.addEventListener("click",addTask);