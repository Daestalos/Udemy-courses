const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string'){
        return 'Ошибка!';
    }
    return str.split('').reverse().join("");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let available = "";
    arr.length === 0 ? available = 'Нет доступных валют' : available = 'Доступные валюты:\n';
    for (let val of arr){
        if (val == missingCurr){
            continue;
        }
        else {
            available += `${val}\n`;
        }
        }

    return available;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));