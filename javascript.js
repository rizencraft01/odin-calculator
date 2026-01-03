function add(a, b) {
    result = a + b

    return giveResult()
}

function subtract(a, b) {
    result = a - b

    return giveResult()
}

function multiply(a, b) {
    result = a * b

    return giveResult()
}

function divide(a, b) {
    result = a / b

    if (b == 0) {
        alert("How can you divide by nothing?!")
    }

    return giveResult()
}

let number1;

let number2;

let result;

let resultString;

let displayValue;

let newDisplayValue;

function operate(operation) {
    if (operation.includes('+')) return add(number1, number2)
    else if (operation.includes('-')) return subtract(number1, number2)
    else if (operation.includes('*')) return multiply(number1, number2)
    else if (operation.includes('/')) return divide(number1, number2)
    else alert('Error! That is not a valid operation!')
}

const display = document.querySelector('.display')

const clearButton = document.querySelector('.clear')

const numberButtons = Array.from(document.querySelectorAll('.number'))

const signButtons = Array.from(document.querySelectorAll('.sign'))

const operatorExp = /\D/

let button;

clearButton.addEventListener('click', () => {
    newDisplayValue = undefined
    number1 = undefined
    number2 = undefined
    display.value =''
})

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        button = numberButtons[i]

        if (newDisplayValue != undefined && operatorExp.test(newDisplayValue) == true) {
            newDisplayValue += button.textContent
        }
        else if (newDisplayValue != undefined && operatorExp.test(newDisplayValue) == false) {
            display.value = button.textContent
        }
        else {
            display.value += button.textContent
        }
    })
}

for (let i = 0; i < signButtons.length; i++) {
    if (signButtons[i].textContent == '=') {
        signButtons[i].addEventListener('click', () => {
            button = '='
            getDisplay()
        })
    }
    else {
        signButtons[i].addEventListener('click', () => {
            button = signButtons[i]
            getDisplay()
        })
    }
}

function getDisplay() {
     if (newDisplayValue != undefined && operatorExp.test(newDisplayValue) == true) {
        displayValue = newDisplayValue
    }
    else {
        displayValue = display.value
    }
    
    let operator;

    for (value of displayValue) {
        if (operatorExp.test(value) == true && value != '.') {
            operator = value
            break
        }      
    }
    
   const displayValueArray = displayValue.split(`${operator}`)

    if (displayValueArray.length != 2 || displayValueArray.includes("")) {
        if (signButtons.includes(button)) {
            newDisplayValue = displayValue + button.textContent
        }

        return false
    }

    for (value of displayValueArray) {
        value = Number(value)
        if (typeof(value) == 'number' && number1 == undefined) number1 = value
        else if (typeof(value) == 'number' && number1 != undefined) number2 = value
    }

    displayValue = displayValueArray.join(`${operator}`)

    operate(displayValue)
}

function giveResult() {
    number1 = undefined
    number2 = undefined
    
    if (button == '=') {
        newDisplayValue = result.toString()
        return display.value = newDisplayValue
    }
    else {
        newDisplayValue = result.toString() + button.textContent
        return display.value = result.toString()
    }
}