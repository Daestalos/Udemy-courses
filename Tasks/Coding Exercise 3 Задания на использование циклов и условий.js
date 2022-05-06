
// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i<=10; i++){
        console.log(i);
    }
    
}
firstTask();

// Место для второй задачи
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут

    for (let i = 20; i > 0; i--){
        if (i == 13) {
            break;
        } else {
            console.log(i);
        } 
    }
    
}
secondTask();

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
        console.log(i);
        }
    }
}
thirdTask();
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}
fourthTask();
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i<=10; i++){
        arrayOfNumbers.push(i);
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();