const grid = document.querySelector('.grid');
const size = prompt("Grid size(max 100)")

if(size <= 100){

grid.style =   `
grid-template-rows: repeat(${size}, 20px);
grid-template-columns: repeat(${size}, 20px);`


for (let i = 0; i < size*size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener("click", ()=>{cell.style = "background-color: gray;"})
    grid.appendChild(cell);
}


}

function clearGrid(){
    const cells = document.getElementsByClassName("cell")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style="background-color: white;"
    }
}