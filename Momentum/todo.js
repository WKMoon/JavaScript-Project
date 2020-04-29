// WookyungMoon

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDosArr = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDosArr.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    
    toDosArr = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDosArr.length+1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text:text,
        id: newId
    };

    toDosArr.push(toDoObj);
    saveToDos();
}


function handleSubmitList(event){
    event.preventDefault();

    const currentValueList = toDoInput.value;
    paintToDo(currentValueList); 
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
        });
    }    
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmitList);
}

init();