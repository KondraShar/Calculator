//
//
//  ##################  Calculator  ####################


//
//  ##################  Variables  #####################
let firstValue = "";
let nextValue = "";
let operator = "";
let result = 0;
let isResult = false;
const buttons = document.querySelector(".buttons-container");
const memoryLine = document.querySelector(".memory-line");
const inputLine = document.querySelector(".input-display");


//
//  ##################  Event Listener  #################

buttons.addEventListener("click", event => {

    // maybe add also a condition that the start 0 can be used to

    // When you put in the first number
    if ( event.target.classList.contains("number")
        && !firstValue
        && !event.target.classList.contains("point") )
        {
        inputLine.textContent = "";
        firstValue = `${event.target.textContent}`;
        inputLine.textContent = `${event.target.textContent}`;
    }
    else 
    if ( firstValue
        && !operator
        && ( event.target.classList.contains("number")
        || event.target.classList.contains("point")
        && !firstValue.includes(".") ))
        {
            let value = firstValue.concat(event.target.textContent);
            inputLine.textContent = `${value}`;
            firstValue = `${value}`;
        } 
    
    // When you enter a second Value
    if ( firstValue && operator
        && event.target.classList.contains("number")
        && !nextValue)
        {
        inputLine.textContent = `${event.target.textContent}`;
        nextValue = `${event.target.textContent}`
        }
        else 
        if ( firstValue
            && operator
            && nextValue
            && ( event.target.classList.contains("number")
            || event.target.classList.contains("point") )
            && !nextValue.includes("."))
            {
                let value = nextValue.concat(event.target.textContent);
                inputLine.textContent = `${value}`;
                nextValue = `${value}`;
            }
            else
            if ( firstValue
                && operator
                && nextValue
                && event.target.classList.contains("number")
                && nextValue.includes("."))
                {
                let value = nextValue.concat(event.target.textContent);
                inputLine.textContent = `${value}`;
                nextValue = `${value}`;
                }
                    

    // 
    // Lift to memory input when you have first value and operator selected
    if ( event.target.classList.contains("operator")
        && !event.target.classList.contains("equal")
        && firstValue
        && !nextValue)
        {
            operator = event.target.textContent;
            memoryLine.textContent = `${firstValue} ${operator} `;
            inputLine.textContent = "";
        }

    // When you have a operatable but add another operator (!! single digit)
    if ( firstValue && operator && nextValue
        && event.target.classList.contains("operator")
        && !event.target.classList.contains("equal")
    ) {
        const valueOne = Number(firstValue);
        const valueTwo = Number(nextValue);
        result = operate(valueOne, valueTwo, operator);
        operator = `${event.target.textContent}`;
        memoryLine.textContent = `${result} ${operator}`;
        inputLine.textContent = "";
        nextValue = "";
        firstValue = `${result}`;
    }

    // When pressing = button
    if ( firstValue && operator && nextValue
        && event.target.classList.contains("equal") )
        {
            memoryLine.textContent = `${firstValue} ${operator} ${nextValue}`;
            const valueOne = Number(firstValue);
            const valueTwo = Number(nextValue);
            result = operate(valueOne, valueTwo, operator);
            inputLine.textContent = `${result}`;
            firstValue = `${result}`;
            isResult = true;
            nextValue = "";
            operator = "";
            
        }
    // When you have a result but type the next number for next calculation
    if ( firstValue
        && isResult
        && event.target.classList.contains("number"))
    {
        firstValue = event.target.textContent;
        isResult = false;
        inputLine.textContent = `${firstValue}`;
        memoryLine.textContent = "";
    } else
        if ( firstValue
            && isResult
            && event.target.classList.contains("operator")
            && !event.target.classList.contains("equal"))
        {
            isResult = false;
            operator = `${event.target.textContent}`;
            memoryLine.textContent = `${firstValue} ${operator}`;
            inputLine.textContent = "";
            nextValue = "";
        }
}
)

//
//  ##################  Functions  ######################
function operate(first = 0, next = 0, op) {
    if ( op == "+") {
        return add(first, next);
    }
    if ( op == "-") {
        return sub(first, next);
    }
    if ( op == "*") {
        return multi(first, next);
    }
    if ( op == "/") {
        return divide(first, next);
    }
    if ( op == "^") {
        return power(first, next);
    }
}

//
//  ##################  Operations  #####################
function add(summandOne, summandTwo) {
    let storeValue = (summandOne + summandTwo).toFixed(4);
    return parseFloat(storeValue);
}
function sub(minuend, subtrahend) {
    let storeValue = (minuend - subtrahend).toFixed(4);
    return parseFloat(storeValue);
}
function multi(factorOne, factorTwo) {
    let storeValue = (factorOne * factorTwo).toFixed(4)
    return parseFloat(storeValue);
}
function divide(dividend, divisor) {
    let storeValue = (dividend / divisor).toFixed(4);
    return parseFloat(storeValue);
}
function power(base, exponent) {
    let storeValue = (base ** exponent).toFixed(4);
    return parseFloat(storeValue);
}
