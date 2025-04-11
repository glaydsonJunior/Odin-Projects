const addDialog = document.querySelector(".addBtn");
const screenDialog = document.querySelector(".new-note-dialog");
const addProject = document.querySelector("#addProj");
const projectSelect = document.querySelector(".selectProject");

const BtAddNote = document.querySelector("#dialog-okay");
const titleInput = document.querySelector("#dialog-title");
const dataInput = document.querySelector("#dialog-date");
const textInput = document.querySelector("#dialog-description");
const selectInput = document.querySelector("#dialog-select");
const BtCancel = document.querySelector("#dialog-cancel");

const todoNotes = document.querySelector("#notes-area");

function createProjectSelection(n) {
    const selectionProj = document.createElement('option');
    selectionProj.textContent = n;
    selectionProj.value = n;
    return selectionProj;
}

addDialog.addEventListener("click", () => {
    if (projectSelect.value != '') screenDialog.style.display = 'flex';
});

function resetHtmlValues() {
    titleInput.value = '';
    dataInput.value = '';
    textInput.value = '';
    selectInput.value = 'highest';
}

BtAddNote.addEventListener("click", () => {
    data[projectSelect.value].todos.push({
        title: titleInput.value,
        description: textInput.value,
        dueData: dataInput.value,
        priority: selectInput.value,
        checklist: false // Inicialmente, o checklist está desmarcado
    });
    todoNotes.appendChild(createCartao(selectInput.value, titleInput.value, false)); // Passar 'false' para o checkbox inicial
    updateStorage();
    resetHtmlValues();
});

BtCancel.addEventListener("click", () => {
    resetHtmlValues();
    screenDialog.style.display = 'none';
});

projectSelect.addEventListener("change", () => {
    updateDomNote();
});

addProject.addEventListener("click", () => {
    let temp = prompt("Nome:");
    while (temp == '') {
        temp = prompt("Nome:");
    }
    addData(temp);
    projectSelect.appendChild(createProjectSelection(temp));
    updateStorage();
});

function getIdPriority(l) {
    switch (l) {
        case 'highest':
            return 'highest-prio';
        case 'high':
            return 'high-prio';
        case 'medium':
            return 'medium-prio';
        case 'medium-low':
            return 'medium-low-prio';
        case 'low':
            return 'low-prio';
        case 'lowest':
            return 'lowest-prio';
    }
}

function updateDomNote() {
    todoNotes.innerHTML = '';
    const notes = data[projectSelect.value];
    notes.todos.forEach(element => {
        todoNotes.appendChild(createCartao(element.priority, element.title, element.checklist));
    });
}

function createCartao(p, titulo, check) {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');
    cartao.id = getIdPriority(p);

    const botao = document.createElement('button');
    botao.classList.add('botao');
    botao.textContent = '🗑️';

    const h4 = document.createElement('h4');
    h4.textContent = titulo;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.checked = check;  // Define se o checkbox deve ser marcado ou desmarcado
    checkbox.classList.add('checkbox');

    cartao.appendChild(botao);
    cartao.appendChild(h4);
    cartao.appendChild(checkbox);

    cartao.addEventListener("click", () => {
        const note = getPostData(projectSelect.value, h4.textContent);
        atualizarPost(note.priority, note.title, note.description, note.dueData, note.checklist);
    });

    // Evento para excluir o post
    botao.addEventListener("click", () => {
        deletePost(projectSelect.value, h4.textContent);
        updateStorage();
        updateDomNote();
    });

    // Evento para atualizar o status do checkbox
    checkbox.addEventListener("change", () => {
        const checkedStatus = checkbox.checked; // Verifica se o checkbox foi marcado ou desmarcado
        updateCheck(projectSelect.value, h4.textContent, checkedStatus);
        updateStorage();
        updateDomNote();
    });

    return cartao;
}

// Função para atualizar o estado do checklist no 'data'
function updateCheck(proj, title, status) {
    const note = getPostData(proj, title);
    note.checklist = status; // Atualiza o valor do checklist para 'true' ou 'false'
}

// Função para obter os dados do post
function getPostData(proj, title) {
    const dicio = data[proj].todos;
    for (const i of dicio) {
        if (i.title == title) return i;
    }
}

// Função para excluir o post
function deletePost(proj, title) {
    data[proj].todos = data[proj].todos.filter(todo => todo.title !== title);
    updateStorage();
    updateDomNote();
}

function atualizarPost(id, novoTitulo, novoTexto, novaData, novoCheckboxStatus) {
    const post = document.querySelector('.post-do');
    const titulo = post.querySelector('.post-header h4');
    const texto = post.querySelector('.post-body p:nth-child(1)');
    const data = post.querySelector('.post-body p:nth-child(2)');
    const checkbox = post.querySelector('.post-header input[type="checkbox"]');
    titulo.textContent = novoTitulo;
    texto.textContent = novoTexto;
    data.textContent = novaData;
    checkbox.checked = novoCheckboxStatus;
    post.id = id + "-prio";
    post.style.display = "flex";
}

function closePost() {
    document.querySelector('.post-do').style = "display: none";
}
