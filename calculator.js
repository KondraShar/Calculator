//
//
//  ##################  Calculator  ####################


//
//  ##################  Variables  #####################
let firstValue = "";
let nextValue = "";
let operator = "";
const buttons = document.querySelector(".buttons-container");
const memoryLine = document.querySelector("memory-line");
const inputLine = document.querySelector(".input-display");


//
//  ##################  Event Listener  #################

buttons.addEventListener("click", event => {

    if ( event.target.classList.contains("number") ) {
        firstValue = `${event.target.textContent}`;
        inputLine.textContent = `${event.target.textContent}`;
    }

    if ( event.target.classList.contains(".equal") ) {
        operate();
    }
}
)

//
//  ##################  Functions  ######################
function operate(first, next, op) {
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
    return summandOne + summandTwo;
}
function sub(minuend, subtrahend) {
    return minuend - subtrahend;
}
function multi(factorOne, factorTwo) {
    return factorOne * factorTwo;
}
function divide(dividend, divisor) {
    return dividend / divisor;
}
function power(base, exponent) {
    return base ** exponent;
}
