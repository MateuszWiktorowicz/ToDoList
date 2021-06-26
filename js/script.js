{
    const tasks = [
        {
            content: "wynieść śmieci",
            done: false,

        },
        {
            content: "pobiegać",
            done: true,

        },
    ];

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
                <li class=" ${task.done ? "doneTask list__item" : "list__item"}">
                <button class="js-done"></button>
                ${task.content}
                <button class="js-remove"></button>
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();

    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();

}