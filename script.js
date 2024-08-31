document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const task = this.parentElement.parentElement;
            const listId = task.parentElement.id;

            if (this.classList.contains('move-left')) {
                if (listId === 'todo-list') {
                    document.getElementById('backlog-list').appendChild(task);
                } else if (listId === 'ongoing-list') {
                    document.getElementById('todo-list').appendChild(task);
                } else if (listId === 'done-list') {
                    document.getElementById('ongoing-list').appendChild(task);
                }
            } else if (this.classList.contains('move-right')) {
                if (listId === 'backlog-list') {
                    document.getElementById('todo-list').appendChild(task);
                } else if (listId === 'todo-list') {
                    document.getElementById('ongoing-list').appendChild(task);
                } else if (listId === 'ongoing-list') {
                    document.getElementById('done-list').appendChild(task);
                }
            }
        });
    });
});