const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan){
        const {languages} = plan.skills;
        let str = `Мне ${plan.age} и я владею языками: `;
        for (let key of languages){     
           str += `${key.toString().toUpperCase()} `;
        }
        return str;
    }
};


function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}


console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let str = '';
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]} \n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs());