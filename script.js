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
    a = Number(a)
    b = Number(b)
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
// Other functions
function display(value){
    calculatorDisplay.textContent = value
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
        if(displayValue && currentOperator && lastOperator){
            


        }else if(displayValue && currentOperator){

            if(!secondValue){
                secondValue = button.value
                display(secondValue)
            }else{
                secondValue += button.value
                display(secondValue)
            }
        }else if(displayValue){
            firstValue += button.value
            displayValue += button.value;
            display(displayValue)
        }else{
            firstValue = button.value
            displayValue += button.value;
            display(displayValue)
        }

    })
}

operatorsButtons = document.querySelectorAll('.button-operator')
for (const button of operatorsButtons) {
    button.addEventListener('click', () =>{
        // There is a previous operator?
        if(firstValue && secondValue && currentOperator && lastOperator){


        }else if(firstValue && secondValue ){
            // operar
            displayValue = operate(firstValue,secondValue,currentOperator) //Operate and display
            display(displayValue)
            firstValue = displayValue; // Update first value
            secondValue = ''
            currentOperator = button.value //Update current operator
        }else if(firstValue){
            //store operator
            currentOperator = button.value
        }else{
            //Display NaN
        }
        
    })
}

buttonDecimal = document.querySelector('.button-decimal')
buttonDecimal.addEventListener('click', () =>{
    if(decimalOff){

    }
})