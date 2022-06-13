
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values


// <-------------------- Рекурсия ----------------------->

// классический пример рекурсии

// через цикл

function pow(x,n) {
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

pow(2,1); // 2
pow(2,2); // 4
pow(2,3); // 8
pow(2,4); // 16

// через рекурсию

function poww(x,n) {
    if (n === 1) {
        return x; 
    } else {
        return x * poww(x, n - 1); 
    }
}

poww(2,1); // 2
poww(2,2); // 4
poww(2,3); // 8
poww(2,4); // 16


// !!!!!!<--------------- Пример перебора объекта через рекурсию ------------------->

// задача: посчитать средний прогресс со всех студентов, со всех курсов
// 1) понять сколько вообще студентов со всех курсов
// нам необходимо общее число в %
// 2) берем общее число и делем на кол-во студентов 


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// через цикл

function getTotalProgressByIteration (data) {
    let total = 0,
        students = 0;



    return total / students;
}

console.log(getTotalProgressByIteration(students));

// через рекурсию