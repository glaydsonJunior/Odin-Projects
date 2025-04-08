const tab = [[],[],[]]


function win(){
    //vertical
    if(tab[0][0] == tab[1][0] == tab[2][0])return true
    if(tab[2][0] == tab[2][1] == tab[2][2])return true
    //horizontal
    if(tab[0][0] == tab[0][1] == tab[0][2])return true
    if(tab[2][0] == tab[2][1] == tab[2][2])return true
    //Diagonal
    if(tab[0][0] == tab[1][1] == tab[2][2])return true
    if(tab[0][2] == tab[1][1] == tab[2][0])return true

    return false
}

function checkWinner(){
    if((tab[0][0] == 'x' || tab[2][2] == 'x') && win())return 'X venceu'
    if((tab[0][0] == 'o' || tab[2][2] == 'o') && win())return 'O venceu'
}