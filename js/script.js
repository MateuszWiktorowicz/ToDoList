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


    const render = () => {
        let htmlString = ""
        for (const task of tasks) {
            htmlString += `
                <li class=" ${task.done ? "doneTask list__item" : "list__item"}">
                <button></button>
                ${task.content}
                <button></button>
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            
            if(newTaskContent === "") {
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