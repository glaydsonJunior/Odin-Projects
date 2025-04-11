let data = {}



function addData(n){
    if(data[n] == undefined){
        data[n] = {"name": n, "todos": []}
    } else {
        alert("Projeto já existe")
    }
}

function updateStorage(){
    localStorage.setItem("todoData", JSON.stringify(data))
}


function loadStorage() {
    const jason = JSON.parse(localStorage.getItem("todoData"))
    data = (jason != null) ? jason : {};

    if (data) {
        Object.keys(data).forEach(k => {
            if (data[k].todos) {
                projectSelect.appendChild(createProjectSelection(k))
            }
        });
        updateDomNote()
    }
}



document.addEventListener("DOMContentLoaded", () => {
    loadStorage()
})


function getPostData(proj,title){
    const dicio = data[proj].todos
    for (const i of dicio) {
        if(i.title == title)return i
    }
}




function deletePost(proj, title) {
    for (let i = 0; i < data[proj].todos.length; i++) {
        if(data[proj].todos[i].title == title){
            data[proj].todos.splice(i, 1)
            break;
        }
    }
}


function updateCheck(proj, title, state){
    for (let i = 0; i < data[proj].todos.length; i++) {
        if(data[proj].todos[i].title == title){
            data[proj].todos[i].checklist = state
            break;
        }
    }
}
