const form = document.querySelector(".options-form");
const examples = document.querySelector(".examplse-box");


const options = {
    taskType: "0",
    numberOfExamples: 1,
    numbersFrom: 99,
};

const examplesArr = [];
const numbersArr1 = [];
const numbersArr2 = [];

function сreatingExamples(){
    randomNumbers();
    if(options.taskType === "Multiplication"){
        multiplication();
    }
    if(options.taskType === "Division") {
        division()
    }
    if(options.taskType === "Multiplication-and-Division"){
        multiplicationAndDivision();
    }
}

function randomNumbers() {
        for(let i = 0; i < options.numbersFrom; i++){
            numbersArr1.push(Math.floor(Math.random() * options.numbersFrom));
            numbersArr2.push(Math.floor(Math.random() * options.numbersFrom));
        }
}

function multiplication() {
    examplesArr.push('<h2>Рівняння</h2>')
    const resultsArr =[];
    for(let i = 0; i < options.numberOfExamples; i++) {
        const multiplier1 = numbersArr1[Math.floor(Math.random() * numbersArr1.length)];
        const multiplier2 = numbersArr2[Math.floor(Math.random() * numbersArr2.length)];
        const result = multiplier1 * multiplier2;
        const number = i + 1;
        examplesArr.push(`<p>${number}) ${multiplier1} * ${multiplier2} = </p>`);
        resultsArr.push(`<p>${number}) ${result}</p>`);
    }
    examplesArr.push('<h2>Рішення</h2>');
    const finish = examplesArr.concat(resultsArr);
    const setexamples = `${finish.join('')}`;
    examples.innerHTML = setexamples;
};

function division() {
    examplesArr.push('<h2>Рівняння</h2>')
    const resultsArr =[];
    for(let i = 0; i < options.numberOfExamples; i++) {
        let shared;
        let divider;
        if(options.point != "on"){
            for(let i = 0; i < options.numbersFrom * 2; i++) {
               const getdivider = numbersArr2[Math.floor(Math.random() * numbersArr2.length)];
               const getshared = numbersArr1[Math.floor(Math.random() * numbersArr1.length)];
               const result = getshared / getdivider;
               if(Number.isInteger(result) != false) {
                if(getdivider != 1 && getdivider != getshared && getshared != 0) {
                    shared = getshared;
                    divider = getdivider;
                    break;
                }
               }
            }
        }else {
            shared = numbersArr2[Math.floor(Math.random() * numbersArr2.length)];
            divider = numbersArr1[Math.floor(Math.random() * numbersArr1.length)];
        }
        const result = shared / divider;
        const number = i + 1;
        examplesArr.push(`<p>${number}) ${shared} : ${divider} = </p>`);
        resultsArr.push(`<p>${number}) ${result}</p>`);
    }
    examplesArr.push('<h2>Рішення</h2>');
    const finish = examplesArr.concat(resultsArr);
    const setexamples = `${finish.join('')}`;
    examples.innerHTML = setexamples;
};

function multiplicationAndDivision() {
    const setNumberOfExamples = options.numberOfExamples / 2;
    const roundSetNumberOfExamples = Math.round(setNumberOfExamples);
    options.numberOfExamples = roundSetNumberOfExamples;
    multiplication();
    division();
}

form.addEventListener("input", event => {
    const type = event.target.name;

    if(type === "task-type") {
        options.taskType = event.target.value;
    }

    if(type === "number-of-examples") {
        options.numberOfExamples = event.target.value;
    }

    if(type === "point") {
        options.point = event.target.value;
    }

    if(type === "select-numbers") {
        options.numbersFrom = event.target.value;
    }
})

form.addEventListener("submit", event => {
    event.preventDefault();
    if(options.taskType === "0") {
        window.alert("Оберіть тип завдань");
    }
    сreatingExamples();
})