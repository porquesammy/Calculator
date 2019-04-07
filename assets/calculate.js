//jshint esversion:6

const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');

const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const allClearBtn = document.getElementById('ac');
const plusMinus = document.getElementById('plus-minus');
const backSpace = document.getElementById('back-space');

const decimal = document.getElementById('decimal');
const enter = document.getElementById('enter');


const calcNumbs = document.getElementsByClassName('calc-number');
const calcOperators = document.getElementsByClassName('calc-operator');

let button = document.querySelectorAll("button");
const displayValueEl = document.getElementById('equals-display');
let equationDisplay = document.getElementById('equation-display');

let displayValue = '0';
let pendingValue;
let evalStringArr = [];


// add press event then remove after transition
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        button[i].classList.add('pressed');
    });

    button[i].addEventListener('transitionend', () => {
        button[i].classList.remove('pressed');
    });
}

//update displayValue
const update = () => {
    displayValueEl.innerText = displayValue;
};

// update display value
const updateDisplayValue = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayValue === '0') {
        displayValue = '';
    }

    if (displayValue.length < 10) {
        displayValue += btnText;
        update();
    }
};

// clear on AC button press
const clearAll = function () {
    displayValue = '0';
    pendingValue = undefined;
    evalStringArr = [];
    equationDisplay.innerText = " ";
    update();
};

allClearBtn.addEventListener('click', clearAll, false);

//backspace key
backSpace.onclick = () => {
    let length = displayValue.length;
    if (1 < length) {
        displayValue = displayValue.slice(0, length - 1);
    } else {
        displayValue = '0';
    }
    update();
};

// calc numbers event listeners
for (let i = 0; i < calcNumbs.length; i++) {
    calcNumbs[i].addEventListener('click', updateDisplayValue, false);
}

//decimal 
decimal.onclick = () => {
    if (!displayValue.includes(".") && displayValue.length < 9) {
        displayValue += ".";
        update();
    }
};

// positive negative change
plusMinus.onclick = () => {
    if (!displayValue.includes("-")) {
        displayValue = "-" + displayValue;
    } else {
        displayValue = displayValue.slice(1);
    }
    update();
};




// calculation eval 
const performEval = (clickObj) => {
    let operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingValue = displayValue;
            displayValue = '0';
            displayValueEl.innerText = displayValue;
            evalStringArr.push(pendingValue);
            evalStringArr.push(operator);
            equationDisplay.innerText = evalStringArr.join(" ");
            break;

        case '-':
            pendingValue = displayValue;
            displayValue = '0';
            displayValueEl.innerText = displayValue;
            evalStringArr.push(pendingValue);
            evalStringArr.push(operator);
            equationDisplay.innerText = evalStringArr.join(" ");
            break;

        case '*':
            pendingValue = displayValue;
            displayValue = '0';
            displayValueEl.innerText = displayValue;
            evalStringArr.push(pendingValue);
            evalStringArr.push(operator);
            equationDisplay.innerText = evalStringArr.join(" ");
            break;

            case '/':
            pendingValue = displayValue;
            displayValue = '0';
            displayValueEl.innerText = displayValue;
            evalStringArr.push(pendingValue);
            evalStringArr.push(operator);
            equationDisplay.innerText = evalStringArr.join(" ");
            break;

            case 'Enter':
            evalStringArr.push(displayValue);
            let evaluation = eval(evalStringArr.join(" "));
            equationDisplay.innerText = evalStringArr.join(" ");
            displayValueEl.innerText = evaluation;
            evalStringArr = []; 
            break;

        default:
            console.log('Sorry, we are out of ');
    }
};

for (let i = 0; i < calcOperators.length; i++) {
    calcOperators[i].addEventListener('click', performEval, false);
}