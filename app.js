const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list'); 

const init = () => {
    todoForm.addEventListener('submit', handleAddTask);
};

const handleAddTask = (e) => {
    e.preventDefault(); 
    
    const newTaskText = taskInput.value.trim(); 
    
    if (!newTaskText) {
        return; 
    }

    createTaskElement(newTaskText);
    
    taskInput.value = ''; 
};


const createTaskElement = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    
    taskList.appendChild(li);
};

init();