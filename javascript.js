function add(a, b) {
    result = a + b 

    resultString = result.toString() + button.textContent

    number1 = undefined
    number2 = undefined

    return display.value = result
}

function subtract(a, b) {
    result = a - b

    resultString = result.toString() + button.textContent

    number1 = undefined
    number2 = undefined

    return display.value = result
}

function multiply(a, b) {
    result = a * b

    resultString = result.toString() + button.textContent

    number1 = undefined
    number2 = undefined

    return display.value = result
}

function divide(a, b) {
    result = a / b

    resultString = result.toString() + button.textContent

    number1 = undefined
    number2 = undefined

    return display.value = result
}

let number1;

let number2;

let result;

let resultString;

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

const numberButtons = document.querySelectorAll('.number')

const signButtons = document.querySelectorAll('.sign')

const operatorExp = /\D/

let button;

clearButton.addEventListener('click', () => {
    result = undefined
    resultString = undefined
    number1 = undefined
    number2 = undefined
    display.value = ''
})

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        if (resultString == undefined) return display.value += numberButtons[i].textContent 
        resultString += numberButtons[i].textContent 
    })
}

for (let i = 0; i < signButtons.length; i++) {
    if (signButtons[i].textContent == 'equals') {
        getDisplay()
    }
    else {
        signButtons[i].addEventListener('click', () => {
            button = signButtons[0] 
            getDisplay()
        })
    }
}

console.log(signButtons)

function checkResultString() {

    let operator;

    for (value of resultString) {
        if (operatorExp.test(value) == true) {
            operator = value
            break
        }      
    }
    
    const resultStringArray = resultString.split(`${operator}`)

    if (resultStringArray.length != 2) {
        return false
    }

    for (value of resultStringArray) {
        value = Number(value)
        if (typeof(value) == 'number' == true && number1 == undefined) number1 = value
        else if (typeof(value) == 'number' == true && number1 != undefined) number2 = value
    }

    resultString = resultStringArray.join(`${operator}`)

    operate(resultString )
    

}

function getDisplay() {
    if (resultString != undefined) {

        checkResultString()

        return false
    }

    displayValue = display.value

    let operator;

    

    for (value of displayValue) {
        if (operatorExp.test(value) == true) {
            operator = value
            break
        }      
    }
    

   const displayValueArray = displayValue.split(`${operator}`)

    if (displayValueArray.length != 2 && resultString == undefined) {
        display.value += button.textContent
        return false
    }

    for (value of displayValueArray) {
        value = Number(value)
        if (typeof(value) == 'number' == true && number1 == undefined) number1 = value
        else if (typeof(value) == 'number' == true && number1 != undefined) number2 = value
    }

    displayValue = displayValueArray.join(`${operator}`)

    operate(displayValue)
}


