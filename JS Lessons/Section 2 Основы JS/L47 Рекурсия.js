
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

// через цикл (эффективно только при условии, что объект будет неизменным)

function getTotalProgressByIteration (data) {
    let total = 0,
        students = 0;

    for (let course of Object.values(data)){
        if (Array.isArray(course)) {
            students += course.length; // = 2
            
            for (let i = 0; i < course.length; i++){
                total += course[i].progress // перебираем каждого студента в объекте
            }
        } else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));


// через рекурсию

function getTotalProgressByRecursion(data) { // запускаем функцию рекурсии
    // в нее попадают какие-то данные, это может быть сразу массив
    if (Array.isArray(data)) { // проверяем на массив
        let total = 0; // задаем переменную
        
        for (let i = 0; i < data.length; i++){
            total += data[i].progress; // складываем прогресс каждого из студентов при помощи цикла
        }
        // так как нам нужно рассчитывать сразу 2 значения, общий прогресс и количество студентов
        return [total, data.length]; // берем и возвращаем сразу два значения
    } else { // если же этот объект это не масив, то попадаем сюда
        let total = [0, 0]; // формируем массив с нулями, чтобы туда записать оба значения
        
        for (let subData of Object.values(data)){ // так как это объект - перебираем его, так как нас название свойства не интересует, то берем его значения через Object.values
            const subDataArray = getTotalProgressByRecursion(subData); // так как объект может содержать еще какие-то внутренности, то заного запускаем эту же функцию, только уже с вложенными данными, дальше функция смотрит массив или нет, и если нет - повторяет все еще раз.
            // Если же функция опять наткнулась на объект - все повторяется
            // Если вложенные данные оказались массивом, то она просто высчитывает эти данные в первом if, возвращает их в виде [total, data.length] в переменную subDataArra

            total[0] += subDataArray[0]; // записываем эти данные в переменную тотал
            total[1] += subDataArray[1];
        }

        return total; // возвращаем все данные
    }
}

const result = getTotalProgressByRecursion(students)
console.log(result[0]/result[1]);





// <---------------------------------------------------------------->
// Примеры:
// 1) перебор всех свойств объекта
const data = {
    "first_level": {
        "UUU": [ 
            {
                "fafsag": 454853450,
                "zxvxcv": "sag",
                "DER": {
                    "YTE": {
                        "value": "300"
                    },
                    "SDSD": {
                        "value": "WGSHDFH"
                    },
                    "ADA": {
                        "value": "6336736"
                    }
                },
                "mnvfd": "H",
                "mnxcfg": 25463656
            }
        ],
        "EEE": [
            {
                "pohkhl": "2",
                "lljjklhlh": 4562366,
                "phhgkg": {
                    "SDFHGSDH": {
                        "value": "J"
                    }
                },
                "nvmncnb": "CTRYT",
                "asfaags": "B",
                "cncnjsbx": 57567834
            }
        ]
    },
    "sdghsh": "754747477",
    "aewtwrte": "CGDGHFJ"
}

let currentObject = [];

getObjectValue(data);

function getObjectValue(object) {
    getLower(object);

    function getLower(obj) {
        for(var prop in obj) {
            console.log(`${obj} - ${obj[prop]}`)
            if(typeof(obj[prop]) === 'object') {
                getLower(obj[prop]);
            } else {
                
            }
        }
    }
}
https://ru.stackoverflow.com/questions/839617/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80-%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-javascript


// 2) нахождение пути но нужного объекта
const data1 = {
  first_level: {
    UUU: [
      {
        fafsag: 454853450,
        zxvxcv: "sag",
        DER: [
          {
            SDSD: {
              value: "WGSHDFH"
            },
            ADA: {
              value: "6336736"
            }
          },
          {
            YTE: {
              value: "300"
            }
          }
        ],
        mnvfd: "H",
        mnxcfg: 25463656
      }
    ],
    EEE: [
      {
        pohkhl: "2",
        lljjklhlh: 4562366,
        phhgkg: {
          SDFHGSDH: {
            value: "J"
          }
        },
        nvmncnb: "CTRYT",
        asfaags: "B",
        cncnjsbx: 57567834
      }
    ]
  },
  sdghsh: "754747477",
  aewtwrte: "CGDGHFJ"
};

function find(obj, item, val) {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      const result = find(obj[key], item, val);

      if (result) {
        result.unshift(key);
        return result;
      }
    }

    if (key === item && obj[key] === val) {
      return [obj];
    }
  }
}

function findFormatted(obj, item, val) {
  const path = find(obj, item, val).slice(0, -1);
  return path === null ? "" : `['${path.join("']['")}']`;
}

console.log(find(data1, "value", "300"));
console.log("path:", findFormatted(data1, "value", "300"));
console.log(data1["first_level"]["UUU"]["0"]["DER"]["1"]["YTE"]);
    