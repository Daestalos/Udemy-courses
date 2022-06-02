"use strict";

const lambda = 0.32, // 0,3
      mu = 0.3, // 0,25
      T = 260, // 270
      m = 42, // 20
      n = 90; // 85

let valuesOfW1 = [], // valuesOfW1
    valuesOfW2 = [],
    valuesOfW3 = [],
    valuesOfPobsl = [],
    valuesOfPotk = [],
    valuesOfTpr = [],
    sumOfW1 = 0,
    sumOfW2 = 0,
    sumOfW3 = 0,
    sumOfPobsl = 0,
    sumOfPotk = 0,
    sumOfTpr = 0,
    matOzhidanieW1 = 0,
    matOzhidanieW2 = 0,
    matOzhidanieW3 = 0,
    matOzhidaniePobsl = 0,
    matOzhidaniePotk = 0,
    matOzhidanieTpr = 0,
    sumForDispersiaOfW1 = 0,
    sumForDispersiaOfW2 = 0,
    sumForDispersiaOfW3 = 0,
    dispersiaOfW1 = 0,
    dispersiaOfW2 = 0,
    dispersiaOfW3 = 0,
    sumForDispersiaOfPobsl = 0,
    dispersiaOfPobsl = 0,
    sumForDispersiaOfPotk = 0,
    dispersiaOfPotk = 0,
    sumForDispersiaOfTpr = 0,
    dispersiaOfTrp = 0;

for (let i = 0; i<n; i++){
    let start = new Date().getTime(),
        isWorking = false,
        w1 = 0,
        w2 = 0,
        w3 = 0,
        t1next = GetExponentialDistribution(lambda),
        t2next = 0,
        cTime = 0,
        
        
        queue = 0;

    t2next ==  t2next.POSITIVE_INFINITY;
    let t = GetMinFrom3(t1next, t2next, T), 
        alpha = GetAlpha(t, t1next, t2next);
        

    while (alpha != 3)
    {
        if (alpha == 1){
            w1++;
            t1next = t + GetExponentialDistribution(lambda);
            if (isWorking){
                let end = new Date().getTime();
                cTime = end - start;
                if (queue < m){
                    queue++;
                } else { w3++; }
            } else {
                isWorking = true;
                t2next = t + GetExponentialDistribution(mu);
            }
        }
        else if (alpha == 2){
            w2++;
            isWorking = false;
            if (queue > 0){
                queue--;
                isWorking = true;
                t2next = t + GetExponentialDistribution(mu);
            }
            else{  t2next = t2next.POSITIVE_INFINITY; }
        }

        t = GetMinFrom3(t1next, t2next, T); // текущее время программы
        alpha = GetAlpha(t, t1next, t2next); // выбор следущего действия
    }

    if (isWorking){
        w2++;
        isWorking = false;
    }
        w3 += queue;
        let Pobsl = w2 / w1,
        Potk = 1 - Pobsl;

    console.log(`$"Этап №${i}\n" +
    $"w1 = ${w1}\t- Число заявок, поступивших в систему\n" +
    $"w2 = ${w2}\t- Число заявок, обслуженных системой\n" +
    $"w3 = ${w3}\t- Число потерянных заявок\n" +
    $"Робсл = ${Pobsl}\t- Вероятность обслуживания пакета\n" +
    $"Ротк = ${Potk}\t- Вероятность отказа\n" +
    $"Тпр = ${cTime}(мс)\t- Время простоя процессора\n" +
    $"\n"`);

    valuesOfW1.push(w1);
    sumOfW1 += w1;
    valuesOfW2.push(w2);
    sumOfW2 += w2;
    valuesOfW3.push(w3);
    sumOfW3 += w3;
    valuesOfPobsl.push(Pobsl);
    sumOfPobsl += Pobsl;
    valuesOfPotk.push(Potk);
    sumOfPotk += Potk;
    valuesOfTpr.push(cTime);
    sumOfTpr += cTime;
    
    
        


    // const 
    // const end = new Date().getTime();
    // console.log('SecondWay: ${end - start}ms');

    
}
matOzhidanieW1 += sumOfW1 / n;
matOzhidanieW2 += sumOfW2 / n;
matOzhidanieW3 += sumOfW3 / n;
matOzhidaniePobsl += sumOfPobsl / n;
matOzhidaniePotk += sumOfPotk / n;
matOzhidanieTpr += sumOfTpr / n;

for (let i = 0; i < n; i++)
{
    sumForDispersiaOfW1 += Math.pow(matOzhidanieW1 - valuesOfW1[i], 2);
    sumForDispersiaOfW2 += Math.pow(matOzhidanieW2 - valuesOfW2[i], 2);
    sumForDispersiaOfW3 += Math.pow(matOzhidanieW3 - valuesOfW3[i], 2);
    sumForDispersiaOfPobsl += Math.pow(matOzhidaniePobsl - valuesOfPobsl[i], 2);
    sumForDispersiaOfPotk += Math.pow(matOzhidaniePotk - valuesOfPotk[i], 2);
    sumForDispersiaOfTpr += Math.pow(matOzhidanieTpr - valuesOfTpr[i], 2);
}

dispersiaOfW1 == sumForDispersiaOfW1 / (n - 1);
dispersiaOfW2 == sumForDispersiaOfW2 / (n - 1);
dispersiaOfW3 == sumForDispersiaOfW3 / (n - 1);
dispersiaOfPobsl == sumForDispersiaOfPobsl / (n - 1);
dispersiaOfPotk == sumForDispersiaOfPotk / (n - 1);
dispersiaOfTrp == sumForDispersiaOfTpr / (n - 1);


console.log(`$"M(w1) == ${matOzhidanieW1}\n" +
$"M(w2) == ${matOzhidanieW2}\n" +
$"M(w3) == ${matOzhidanieW3}\n" +
$"M(Робсл) == ${matOzhidaniePobsl}\n" +
$"M(Ротк) == ${matOzhidaniePotk}\n" +
$"M(Тпр) == ${matOzhidanieTpr}\n"
$"D(w1) == ${dispersiaOfW1}\n" +
$"D(w2) == ${dispersiaOfW2}\n" +
$"D(w3) == ${dispersiaOfW3}\n" +
$"D(Робсл) == ${dispersiaOfPobsl}\n" +
$"D(Ротк) == ${dispersiaOfPotk}\n" +
$"D(Тпр) == ${dispersiaOfTrp}\n"`);


function GetExponentialDistribution(lambda){
    let randomX = Math.floor(Math.random() * 11),
        power = -lambda * randomX,
        result = lambda * Math.pow(Math.E, power);
        return result;
}

function GetMinFrom3(a,b,c){
    if (a <= b && a <= c)
    {
        return a;
    }

    if (b <= c)
    {
        return b;
    }
    return c;
}

function GetAlpha(t,t1,t2){
    if (t == T)
    {
        return 3;
    }

    if (t == t2)
    {
        return 2;
    }

    if (t == t1)
    {
        return 1;
    }

    return -1;
}