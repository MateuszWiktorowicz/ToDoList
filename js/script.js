{
let tasks = [];
let hideDoneTasks = false;

const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });

    const toogleDoneButtons = document.querySelectorAll(".js-done");
    toogleDoneButtons.forEach((toogleDoneButton, index) => {
        toogleDoneButton.addEventListener("click", () => {
            toogleDoneTask(index);

        });
    });
};
const removeTask = (taskIndex) => {
    tasks = [
        ...tasks.slice(0, taskIndex),
        ...tasks.slice(taskIndex + 1),
    ];
    render();
};

const addNewTask = (newTaskContent) => {
    tasks = [
        ...tasks,
        { content: newTaskContent },
    ]
    render();
};

const toogleDoneTask = (taskIndex) => {
    tasks = [
        ...tasks.slice(0, taskIndex),
        {
            ...tasks[taskIndex],
            done: !tasks[taskIndex].done,
        },
        ...tasks.slice(taskIndex + 1)
    ]
    render();
};

const markAllTasksDone = () => {
    tasks = tasks.map((task) => ({
        ...task,
        done: true,
    }));
    render();
};

const toggleHideDoneTasks = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
};

const renderTasks = () => {
    const taskToHTML = task => `
    <li class="
    list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}">
    <button class="${task.done ? "js-done list__button--done" : "js-done list__button--undone"}">✔
    </button>
   <span class="${task.done ? "doneTask" : ""}"> ${task.content}</span>
    <button class="js-remove list__button--remove">🗑</button>
    </li>
    `;

    const tasksElement = document.querySelector(".js-tasks");
    tasksElement.innerHTML = tasks.map(taskToHTML).join("");
};

const renderButtons = () => {
    const buttonsElement = document.querySelector(".js-buttons");

    if (!tasks.length) {
        buttonsElement.innerHTML = "";
        return;
    }

    buttonsElement.innerHTML = `
    <button class=" buttons__button  js-toggleHideDoneTasks">
    ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button
    class="buttons__button js-markAllDone"
    ${tasks.every(({ done }) => done) ? "disabled" : ""}
    >
    Ukończ wszystkie
    </button>
    `;
};

const bindButtonsEvents = () => {
    const markAllDoneButton = document.querySelector(".js-markAllDone")

if (markAllDoneButton) {
    markAllDoneButton.addEventListener("click", markAllTasksDone);
}

const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasks");
if (toggleHideDoneTasksButton) {
    toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
}
};

const render = () => {
    renderTasks();
    bindEvents();
    renderButtons();
    bindButtonsEvents();

};


const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {

        addNewTask(newTaskContent);
        newTaskElement.value = "";
    }
    newTaskElement.focus();

};

const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);

};

init();

}
