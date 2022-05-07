const inputE = document.getElementById('input');
const button = document.getElementById('button');
const toDoListE = document.getElementById('todo-list');
const errorE = document.querySelector('.error-massege');

inputE.addEventListener('keyup', valideteTodo);
button.addEventListener('click', onAddToDo);
toDoListE.addEventListener('click', onToDoClic);

button.disabled = true;

function onAddToDo(e) {
  const text = inputE.value;
  const element = `<div name = "todo" class="items">
  <span name = "delete" class="delete"><i class="fa-solid fa-xmark"></i></span>
  ${text} </div>`;    
  toDoListE.innerHTML += element;
  inputE.value = '';   
  button.disabled = true; 
  inputE.focus();
  
}
function onToDoClic(e){
  [...e.target.attributes].forEach((el) => {
    if(el.value === 'delete'){
      onDelete(e.target);
    }    
    if(el.value === 'todo'){
      compliteToDo (e.target);
    }
  });  
}

function valideteTodo(e){  
  console.log(e)
  if(!e.target.value.trim()){
    errorE.innerText = "";
    button.disabled = true;
    return;
  }
  if(e.target.value.trim().length <= 3){
    errorE.innerText = "Error, text length should be more than 3 symbols";
    button.disabled = true;
    return;
  }
  if(e.keyCode === 13) {
    onAddToDo();
    button.disabled = true;
  }   
  if((e.shiftKey === true) && (e.keyCode === 8)) {
    inputE.value = '';     
  }
    
  errorE.innerText = "";
  button.disabled = false;   
}
function compliteToDo (elem){
  elem.classList.toggle('complite');
}
function onDelete(elem){  
  elem.closest('.items').remove();
}


