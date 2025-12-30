function add(a, b, operator) {
    return a + ' ' + operator + ' ' + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let number;

let operator;

let number2;

function operate(number, number2, operator) {
    operator = operator 

    return add(number, operator, number2)
}

const display = document.querySelector('.display')

const clearButton = document.querySelector('.clear')

const multiplyButton = document.querySelector('.multiply')

const divideButton = document.querySelector('.divide')

const addButton = document.querySelector('.add')

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

clearButton.addEventListener('click', () => display.value = '')

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
    display.value += '*'
})

divideButton.addEventListener('click', () => {
    display.value += '/'
})

addButton.addEventListener('click', () => {
    display.value += '+'
})

subtractButton.addEventListener('click', () => {
    display.value += '-'
})
