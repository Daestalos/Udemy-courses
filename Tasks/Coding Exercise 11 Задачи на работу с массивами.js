const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    if (arr.length == 0) {
        return "Семья пуста";
    }
    for (let key of arr){
        str += `${key} `;
    }
    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';

    for (let key of arr){
        str += `${key.toLocaleLowerCase()} \n`;
    }
    return str;
}

console.log(standardizeStrings(favoriteCities));





function standardizeStrings(arr) {
    for (let key of arr){
        console.log(key.toLocaleLowerCase());
    }
}