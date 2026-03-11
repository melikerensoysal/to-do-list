const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');

const init = () => {
    todoForm.addEventListener('submit', handleAddTask);
};

const handleAddTask = (e) => {
    e.preventDefault(); 
    
    const newTaskText = taskInput.value;
    
    console.log("New task:", newTaskText);
    
    taskInput.value = ''; 
};

init();