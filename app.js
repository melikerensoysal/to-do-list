const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');

const handleAddTask = (e) => {
    e.preventDefault(); 

    const text = taskInput.value.trim();
    
    if (text === '') {
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = text;

    taskList.appendChild(li);       

    taskInput.value = '';

    emptyState.style.display = 'none';
};

todoForm.addEventListener('submit', handleAddTask);