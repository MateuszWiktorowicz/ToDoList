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


    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) =>{
            event.preventDefault();
        });


    };

    init();

}