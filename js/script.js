const form = document.querySelector(".options-form");
const examples = document.querySelector(".examples-list");
const answers = document.querySelector(".answers-list");
const print = document.querySelector(".print");

const options = {
    taskType: "0",
    numberOfExamples: 1,
    numbersFrom: 99,
};

const examplesArr = [];
const answersArr = [];
const c = [];
const firstNumbers = [];
const secondNumbers = [];

function сreatingExamples(){
    if(options.taskType === "Multiplication"){
        multiplication();
    }
    if(options.taskType === "Division") {
        division();
    }
    if(options.taskType === "Multiplication-and-Division"){
        multiplicationAndDivision();
    }
}

function multiplication() {
    console.log(options.unknown);
    for(let i = 0; i < options.numberOfExamples; i++) {
        const firstNumber = Math.floor(Math.random() * options.numbersFrom);
        const secondNumber = Math.floor(Math.random() * options.numbersFrom);
        const result = firstNumber * secondNumber;
        if(options.unknown === "on") {
            if(i % 2 === 0) {
                examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) x * ${secondNumber} = ${result}</li>`)
                answersArr.push(`<li class<li class="answers-list-item">${i + 1}) x = ${firstNumber}</li>`);
            }else {
                examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) ${firstNumber} * x = ${result}</li>`)
                answersArr.push(`<li class<li class="answers-list-item">${i + 1}) x = ${secondNumber}</li>`);
            }

        }else {
            examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) ${firstNumber} * ${secondNumber} = </li>`)
            answersArr.push(`<li class<li class="answers-list-item">${i + 1}) ${result}</li>`);
        }
    }

    printExamples();
};

function division() {
    let firstNumber;
    let secondNumber;

    if(options.point != "on") {
        for(let i = 0; i < options.numberOfExamples; i++) {
            for(let i = 0; i < 2000; i++){
                firstNumber = Math.floor(Math.random() * options.numbersFrom);
                secondNumber = Math.floor(Math.random() * options.numbersFrom);
                const result = firstNumber % secondNumber;
                const devRes = firstNumber / secondNumber;
                if(result === 0 && firstNumber != 0 && secondNumber != 1 && devRes != 1) {
                    firstNumbers.push(firstNumber);
                    secondNumbers.push(secondNumber);
                    break;
                }
            }
        }
    }else {
        firstNumbers.push(Math.floor(Math.random() * options.numbersFrom));
        secondNumbers.push(Math.floor(Math.random() * options.numbersFrom));
    }
    
    for(let i = 0; i < options.numberOfExamples; i++) {
        const result = firstNumbers[i] / secondNumbers[i];
        if(options.unknown === "on") {
            if(i % 2 === 0) {
                examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) x : ${secondNumbers[i]} = ${result}</li>`)
                answersArr.push(`<li class<li class="answers-list-item">${i + 1}) x = ${firstNumbers[i]}</li>`);
            }else {
                examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) ${firstNumbers[i]} : x = ${result}</li>`)
                answersArr.push(`<li class<li class="answers-list-item">${i + 1}) x = ${secondNumbers[i]}</li>`);
            }

        }else {
            examplesArr.push(`<li class<li class="examples-list-item">${i + 1}) ${firstNumbers[i]} : ${secondNumbers[i]} = </li>`)
            answersArr.push(`<li class<li class="answers-list-item">${i + 1}) ${result}</li>`);
        }
    }
    printExamples();
};

function multiplicationAndDivision() {
    const setNumberOfExamples = options.numberOfExamples / 2;
    const roundSetNumberOfExamples = Math.round(setNumberOfExamples);
    options.numberOfExamples = roundSetNumberOfExamples;
    multiplication();
    division();
}

function printExamples() {
    const setExamples = `${examplesArr.join("")}`;
    const result = `${answersArr.join("")}`;
    examples.innerHTML = setExamples;
    answers.innerHTML = result;
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

    if(type === "unknown") {
        options.unknown = event.target.value;
    }

    if(type === "select-numbers") {
        options.numbersFrom = event.target.value;
    }
})

form.addEventListener("submit", event => {
    event.preventDefault();

    examples.innerHTML = "";
    answers.innerHTML = "";
    examplesArr.splice(0);
    answersArr.splice(0);
    firstNumbers.splice(0);
    secondNumbers.splice(0);

    if(options.taskType === "0") {
        window.alert("Оберіть тип завдань");
    }
    сreatingExamples();
})

print.addEventListener("click", event => {
    event.preventDefault();
    form.style.display = "none";
    print.style.display = "none";
    window.print();
    form.style.display = "block";
    print.style.display = "block";
})