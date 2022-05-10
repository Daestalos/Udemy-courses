// Место для первой задачи
function sayHello(name) {
    return `Привет,${name}`; 
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

// Место для третьей задачи
function getMathResult(number, count) {
    let numberSumm = 0,
    strLine = '---',
    str = '';
    for (let i = 0; i < count; i++){
        numberSumm += number;
        i ==  count-1 ? str += numberSumm : str += numberSumm + strLine;
    }
    if (typeof(count) == 'string' || count <= 0){
        str = number;
    }
    return str;
}

console.log(getMathResult(5,0));