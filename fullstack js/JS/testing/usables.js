

const capitalize = (s) =>{
    const asciiCode = s.charCodeAt(0)
    const can = (asciiCode >= 97 && asciiCode <= 122)?String.fromCharCode(asciiCode-32):s[0];
    return can + s.slice(1, s.length)
}

const reverseString = (s) => {
    let reversed = ""
    for (let i = s.length-1; i >= 0; i--)reversed += s[i]
    return reversed
}

const calculator = {
    add: (a, b) => {return a+b},
    subtract: (a, b) => {return a-b},
    multiply: (a, b) => {return a*b},
    divide: (a, b) => {return a/b}
}

const caesarCipher = (str, shift) =>{
    let cript = ""
    let cc;
    for (let i = 0; i < str.length; i++) {
        const asciiCode = str[i].charCodeAt(0)
        if((asciiCode >= 97 && asciiCode <= 122)){
            cc = (asciiCode+shift > 122)?(asciiCode+shift)%123+97:asciiCode+shift
            cript += String.fromCharCode(cc)
        } else if((asciiCode >= 65 && asciiCode <= 90)){
            cc = (asciiCode+shift > 90)?(asciiCode+shift)%66+90:asciiCode+shift
            cript += String.fromCharCode(cc)
        } else {
            cript += str[i]
        }
    }
    return cript
}


const analyzeArray = (arr) => {
    let min = arr[0]
    let max = arr[0]
    let sum = 0
    arr.forEach(i => {
        if(i < min)min=i
        if(i > max)max=i
        sum += i
    });
    return {average: Math.floor(sum/arr.length), min: min, max: max, length: arr.length}
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}