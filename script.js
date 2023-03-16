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
    calculatorDisplay.textContent = ""
} )