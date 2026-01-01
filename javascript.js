function add(a, b) {
    return display.value = a + b
}

function subtract(a, b) {
    return display.value = a - b
}

function multiply(a, b) {
    return display.value = a * b
}

function divide(a, b) {
    return display.value = a / b
}

let number1;

let number2;

let displayValue;

function operate(operation) {
    if (operation.includes('+')) return add(number1, number2)
    else if (operation.includes('-')) return subtract(number1, number2)
    else if (operation.includes('*')) return multiply(number1, number2)
    else if (operation.includes('/')) return divide(number1, number2)
    else alert('Error! That is not a valid operation!')
}

const display = document.querySelector('.display')

const clearButton = document.querySelector('.clear')

const multiplyButton = document.querySelector('.multiply')

const divideButton = document.querySelector('.divide')

const addButton = document.querySelector('.add')

const equalButton = document.querySelector('.equals')

const subtractButton = document.querySelector('.subtract')

const number1Button = document.querySelector('.number1')

const number2Button = document.querySelector('.number2')

const number3Button = document.querySelector('.number3')

const number4Button = document.querySelector('.number4')

const number5Button = document.querySelector('.number5')

const number6Button = document.querySelector('.number6')

const number7Button = document.querySelector('.number7')

const number8Button = document.querySelector('.number8')

const number9Button = document.querySelector('.number9')

const number0Button = document.querySelector('.number0')

const operatorExp = /\D/g

clearButton.addEventListener('click', () => {
    number1 = undefined
    number2 = undefined
    display.value = ''
})

number1Button.addEventListener('click', () => {
    display.value += '1'
})

number2Button.addEventListener('click', () => {
    display.value += '2'
})

number3Button.addEventListener('click', () => {
    display.value += '3'
})

number4Button.addEventListener('click', () => {
    display.value += '4'
})

number5Button.addEventListener('click', () => {
    display.value += '5'
})

number6Button.addEventListener('click', () => {
    display.value += '6'
})

number7Button.addEventListener('click', () => {
    display.value += '7'
})

number8Button.addEventListener('click', () => {
    display.value += '8'
})

number9Button.addEventListener('click', () => {
    display.value += '9'
})

number0Button.addEventListener('click', () => {
    display.value += '0'
})

multiplyButton.addEventListener('click', () => {
    getDisplay()
    display.value += '*'
})

divideButton.addEventListener('click', () => {
    getDisplay()
    display.value += '/'
})

addButton.addEventListener('click', () => {
   getDisplay()
})

subtractButton.addEventListener('click', () => {
    getDisplay()
    display.value += '-'
})

function getDisplay() {
    displayValue = display.value

    let operator;

    for (value of displayValue) {
        if (operatorExp.test(value) == true) {
            operator = value
            splitOperator = value
            break
        }      
    }

   let displayValueArray = displayValue.split(`${operator}`)

   if (displayValueArray.length != 2 || displayValueArray.includes("")) {
        display.value += `${operator}`
        return false
   } 

    for (value of displayValueArray) {
        value = Number(value)
        if (Number.isInteger(value) == true && number1 == undefined) number1 = value
        else if (Number.isInteger(value) == true && number1 != undefined) number2 = value
    }

    displayValue = displayValueArray.join(`${operator}`)

    operate(displayValue)
}
 
equalButton.addEventListener('click', () => {
     
    getDisplay()
    
})
