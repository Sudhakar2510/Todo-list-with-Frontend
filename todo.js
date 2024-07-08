let form = document.querySelector("form");
let taskInpValue = document.querySelector("#taskInpValue");
let parentContainer = document.querySelector("#tasks");
form.addEventListener("submit",e=>{
    e.preventDefault();
    const taskValue = taskInpValue.value;
    window.localStorage.setItem("todo",taskValue)
    if(!taskValue){
        alert("Please Add Task...");
        return;
    }

    // !main task ele
    let taskEle = document.createElement("div");
    taskEle.setAttribute("class","task");

//    !content element
let taskContentEle = document.createElement("div");
taskContentEle.setAttribute("class","content");

let contentInputEle = document.createElement("input");
contentInputEle.setAttribute("class","text");
contentInputEle.setAttribute("type","text");
contentInputEle.setAttribute("readonly","readonly");
contentInputEle.value=taskValue;
taskContentEle.appendChild(contentInputEle);

// !actions button
let taskActionEle = document.createElement("div");
taskActionEle.setAttribute("class","actions");

let editBtn = document.createElement("button");
editBtn.setAttribute("class","edit");
editBtn.innerText="Edit";

let deleteBtn = document.createElement("button");
deleteBtn.setAttribute("class","delete");
deleteBtn.innerText="Delete";

taskActionEle.appendChild(editBtn);
taskActionEle.appendChild(deleteBtn);

taskEle.appendChild(taskContentEle);
taskEle.appendChild(taskActionEle);
    parentContainer.appendChild(taskEle);
    taskInpValue.value = "";


    // !edit
    editBtn.addEventListener("click",_=>{
        // console.log(editBtn.innerText.toLowerCase())
        if(editBtn.innerText.toLowerCase() == "edit"){
            contentInputEle.removeAttribute("readonly");
            contentInputEle.focus();
            editBtn.innerText="Save"
        }else{
            contentInputEle.setAttribute("readonly","readonly");
            editBtn.innerText="Edit"
        }
    });

    // !delete
    deleteBtn.addEventListener("click",_=>{
        parentContainer.removeChild(taskEle)
    })
})