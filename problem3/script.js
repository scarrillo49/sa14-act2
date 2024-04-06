document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-title');
    const taskDetailsInput = document.getElementById('task-details');
    const taskList = document.getElementById('todo-list');

    let tasks = []; 

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = taskInput.value;
        const details = taskDetailsInput.value;
        addTask(title, details);
        taskInput.value = ''; 
        taskDetailsInput.value = ''; 
    });

    function addTask(title, details) {
        const task = {
            id: Date.now(), 
            title,
            details,
        };
        tasks.push(task);
        showTasksOnList();
    }

    function showTasksOnList() {
        taskList.innerHTML = ''; 

        for (const task of tasks) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-title">${task.title}</span>
                <div class="task-details">${task.details}</div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);

            const editButton = listItem.querySelector('.edit-btn');
            const deleteButton = listItem.querySelector('.delete-btn');

            deleteButton.addEventListener('click', () => {
                const taskIndex = tasks.findIndex(t => t.id === task.id);
                tasks.splice(taskIndex, 1);
                showTasksOnList();
            });

            editButton.addEventListener('click', () => editTask(listItem, task)); 
        }
    }

    function editTask(listItem, task) {
        const newTitle = prompt('Edit your task title:', task.title);
        const newDetails = prompt('Edit your task details:', task.details);
        if (newTitle !== null && newTitle.trim() !== '') {
            task.title = newTitle;
            listItem.querySelector('.task-title').textContent = newTitle;
            if (newDetails !== null) {
                task.details = newDetails;
                listItem.querySelector('.task-details').textContent = newDetails;
            }
        }
    }
});
