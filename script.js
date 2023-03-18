// Basic functions

function add(a,b){
    return a+b
}
function subtract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b){
    return a/b
}
function operate(a,b,operator) {
    let result;
    switch(operator){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        default:
            result = 'Invalid operator';
            break
    } return result
}

let calculatorDisplay = document.querySelector('.calculator-display')

let clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click',() => {
    calculatorDisplay.textContent = "";
    displayValue = ''
    firstValue = undefined;
    secondValue = undefined;
    currentOperator = undefined;
})

let displayValue = ''
//Populate display when click buttons

let currentOperator,
    lastOperator,
    decimalOff = true,
    firstValue,
    secondValue;

numbersButtons = document.querySelectorAll('.button-number');

for (const button of numbersButtons) {
    button.addEventListener('click', ()=>{
        if(!currentOperator || !firstValue){
            calculatorDisplay.textContent += button.value
        }else if (firstValue && calculatorDisplay.textContent !== '') {
            calculatorDisplay.textContent = ''
            // currentOperator = undefined
            calculatorDisplay.textContent += button.value
        }else{
            calculatorDisplay.textContent += button.value
        }

    })
}

operatorsButtons = document.querySelectorAll('.button-operator')
for (const button of operatorsButtons) {
    button.addEventListener('click', () =>{
        if(!currentOperator){
            currentOperator = button.value
        }else{
            lastOperator = currentOperator;
            currentOperator = button.value;
            displayValue = operate(firstValue,secondValue,lastOperator);
            calculatorDisplay.textContent = displayValue
        }
        if(!firstValue){
            firstValue = Number(calculatorDisplay.textContent)
        }else if(currentOperator && lastOperator){
            secondValue = Number(calculatorDisplay.textContent)
            displayValue = operate(firstValue,secondValue,currentOperator)
            firstValue = displayValue
            calculatorDisplay.textContent = displayValue
        }
        
    })
}

buttonDecimal = document.querySelector('.button-decimal')
buttonDecimal.addEventListener('click', () =>{
    if(decimalOff){

    }
})