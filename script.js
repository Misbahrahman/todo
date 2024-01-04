document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask();
    });

    function ct() {
        let ele = document.getElementById("counter");
        let container = document.getElementById("taskList");
        ele.innerText = container.children.length;
    }

    function addTask() {
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        const taskElement = document.createElement('div');
        taskElement.className = 'task-card'; // Updated class name
        taskElement.innerHTML = `
            <div class="task-details">        
                <span class="task-name"><strong>Task Name:</strong> ${taskName}</span>
                <span class="due-date"><strong>Due Date:</strong> ${dueDate}</span>
                <span class="priority"><strong>Priority:</strong> ${priority}</span>
            </div>
            <div class="task-actions">
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
                <button class="doneBtn">Done</button>
            </div>
        `;

        taskList.appendChild(taskElement);
        ct();
    }

    taskList.addEventListener('click', function (e) {
        const taskCard = e.target.closest('.task-card'); // Find the closest parent with class 'task-card'

        if (e.target.classList.contains('deleteBtn')) {
            deleteTask(taskCard);
        } else if (e.target.classList.contains('editBtn')) {
            editTask(taskCard);
        } else if (e.target.classList.contains('doneBtn')) {
            markAsDone(taskCard);
        }
    });

    function deleteTask(taskCard) {
        taskCard.remove();
        ct();
    }

    function editTask(taskCard) {
        const taskNameSpan = taskCard.querySelector('.task-name');
        const newTaskName = prompt('Edit Task Name:', taskNameSpan.textContent.split(': ')[1]);

        if (newTaskName !== null) {
            taskNameSpan.innerHTML = `<strong>Task Name:</strong> ${newTaskName}`;
        }
    }

    function markAsDone(taskCard) {
        taskCard.style.backgroundColor = 'green';
        // You can add additional styling or actions as needed
    }

});
