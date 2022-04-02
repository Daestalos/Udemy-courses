
let num = 50,
    a = 50;
  

// while
while (num <= 55)
{
    console.log(num);
    num++;
}

//do while
do {
    console.log(a);
    a++;
} 
while (a <= 55);

// for
let   b = 50;
for (let i = 1; i < 8; i++) {
    console.log(b);
    b++;
}

// for with continue/break
for (let i = 1; i < 10; i++) {
    if (i === 6){
       // break;
       continue; // позволяет пропустить шаг, но не прерывает цикл
    }
    console.log(i);
}


// перебор массива чере цикл

let arr = ['plum.png', 'orange.jpg', 6, {}, [], 'apple.bmp', function(){console.log("its, work!!");}, false];
console.log(arr[1]); // = "orange.jpg"
console.log(arr[6]()); // = its, work!! (вызовет функцию)


for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    // orange.jpg
    // its, work!!
    // undefined
    // 2
    // plum.png
    // orange.jpg
    // 6
    // {}
    // []
    // apple.bmp
    // [Function (anonymous)]
    // false
}

// можно так же сделать при помощи for of
let array = [1, 2, 3, 4, 'plus', {}, [], false];
for (let arrItems of array){
    console.log(arrItems);
    // = 1
    // 2
    // 3
    // 4
    // plus
    // {}
    // []
    // false
}