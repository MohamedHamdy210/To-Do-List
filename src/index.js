import "./styles.css";
const todayList=[];
const peronalList=[];
const homeList=[];
const workList=[];
const inTitle='';
const inDesc='';
const inDueDate='';
const inP='';
const inList='';
const taskObj={
        id: inTitle.value.toLowerCase().split(" ").join("-")+dueDate.value+list.value,
        title: inTitle.value,
        description:inDesc.value,
        dueDate:inDueDate.value,
        priority:inP.value,
        list:inList.value,
}

function addTask () {
    switch (taskObj.list) {
        case 1 :
            todayList.push(taskObj);    
            localStorage.setItem("today",JSON.stringify(todayList));
            
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
}
