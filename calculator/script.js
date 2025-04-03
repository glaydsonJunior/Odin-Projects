const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".panel-div button")


let values = {
    enterA: '',
    pointA: false,
    signal: null,
    enterB: '',
    pointB: false
}

const updateDisplay = (d, n) => {
    d.textContent = n
}

const canAdd = (v) =>{
    return v > 0
}
const clear = () => {
    updateDisplay(display,'')
    values.enterA = ''
    values.pointA = false
    values.signal = null
    values.enterB = ''
    values.pointB = false
}

const operate = (result) => {
    updateDisplay(display,result)
    values.enterA = `${result}`
    values.pointA = false
    values.signal = null
    values.enterB = ''
    values.pointB = false
}

const popLast = (a) => {
    if(a.length > 0)return a.slice(0, a.length-1)
    return a
}

const parseToNumber = (v) => {
    return [parseFloat(v.enterA), parseFloat(v.enterB)]
}

const canPoint = (v) =>{
    if(v.signal == null){
        return canAdd(v.enterA.length) && !v.pointA;
    } else {
        return canAdd(v.enterB.length) && !v.pointB;
    }
}

for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener("click", () => {

            if(values.signal == null){
                values.enterA += numbers[i].textContent
                updateDisplay(display, values.enterA)
            } else {
                values.enterB += numbers[i].textContent
                updateDisplay(display, values.enterB)
            }
    })
}

numbers[14].addEventListener("click", () =>{
    if(canPoint(values)){
        if(values.signal == null){
            values.enterA += '.';
            values.pointA = true;
            updateDisplay(display, values.enterA)
        }else{
            values.enterB += '.';
            values.pointB = true;
            updateDisplay(display, values.enterB)
        }
    }
})


for (let i = 10; i < 14; i++) {
    numbers[i].addEventListener("click", () => {
        if(canAdd(values.enterA.length)){
            values.signal = numbers[i].textContent
            updateDisplay(display, values.signal)
        }
    })
}

numbers[17].addEventListener("click", () => {
    let result;
    switch(values.signal){
        case "+":
            result = parseToNumber(values)
            result = result[0]+result[1]
            operate(result)
            break;
        case '*':
            result = parseToNumber(values)
            result = result[0]*result[1]
            operate(result)
            break;
        case '-':
            result = parseToNumber(values)
            result = result[0]-result[1]
            operate(result)
            break;
        case '/':
            result = parseToNumber(values)
            result = result[0]/result[1]
            operate(result)
            break;
        default:
            alert("Operação não selecionada")
    }
})

numbers[16].addEventListener("click", () => {
    if(values.signal == null){
        
        if(values.enterA[values.enterB.length-1] == '.'){
            values.pointA = false;
        }
        
        values.enterA = popLast(values.enterA);
        updateDisplay(display, values.enterA)
    
    } else {
            
            if(values.enterB[values.enterB.length-1] == '.'){
                values.pointB = false;
            }
        
            values.enterB = popLast(values.enterB);
            updateDisplay(display, values.enterB)
    }
})

numbers[15].addEventListener("click", clear)