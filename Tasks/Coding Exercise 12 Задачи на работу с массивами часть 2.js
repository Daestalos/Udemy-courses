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

}