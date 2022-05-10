// Место для первой задачи
function getTimeFromMinutes(time) {
    let minutes = time % 60,
    hours = (time - minutes) / 60,
    hoursStr = '';
    if (hours == 0) {
        hoursStr = 'часов';
    } else if (hours == 1) {
        hoursStr = 'час';
    } else{
        hoursStr = 'часа';
    }
    if (time < 0 || typeof(time) !== 'number' || !Number.isInteger(time)) {
        return `Ошибка, проверьте данные`;
    }  else { return `Это ${hours} ${hoursStr} и ${minutes} минут`; }

}

console.log(getTimeFromMinutes(70));

// Место для второй задачи
function findMaxNumber(...numbers) {
    for (let arrayNumbers of [...numbers]){
        if (typeof(arrayNumbers) == 'string'){
            return 0;
        }
    }
    return Math.max(...numbers);
}
console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber( 6.6, 6.7, 6.3));
console.log(findMaxNumber(1, 5, '6', '10'));