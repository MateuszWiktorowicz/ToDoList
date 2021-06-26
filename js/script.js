{
    const tasks = [];

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
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const toogleDoneTask = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const render = () => {
        let htmlString = ""
        for (const task of tasks) {
            htmlString += `
                <li class="list__item">
                <button class="${task.done ? "js-done list__button--done" : "js-done list__button--undone"}">✔</button>
               <span class="${task.done ? "doneTask" : ""}"> ${task.content}</span>
                <button class="js-remove list__button--remove">🗑</button>
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();

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