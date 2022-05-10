// Место для первой задачи
function calculateVolumeAndArea(number) {
    let cubeVolume = Math.pow(number, 3),
    cubeArea = 6 * Math.pow(number, 2);

    if (number < 0) {
        return `При вычислении произошла ошибка`;
    } else  if ((number ^ 0) === number) {
        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
    } else {
        return `При вычислении произошла ошибка`;
    }
}
console.log(calculateVolumeAndArea('4'));

// Место для второй задачи
function getCoupeNumber(number) {
    if (number > 36 || number == 0) {
        return `Таких мест в вагоне не существует`;
    }
    if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return `Ошибка. Проверьте правильность введенного номера места`;
    }
    else {
        return Math.ceil(number / 4);
    }
}

console.log(getCoupeNumber(29));
