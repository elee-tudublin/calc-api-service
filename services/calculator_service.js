// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

// Validate a number
// return Not a number or else cast as Number and return
function valNum(num) {
    if (validator.isNumeric(num)) {
        return Number(num);
    }
    return NaN;
}

function add(a,b) {

    // define vars and initialise with validated numbers
    let numA = valNum(a);
    let numB = valNum(b);

    // return object with inputs and sum
    return {
        a: numA,
        b: numB,
        operator: '+',
        answer: numA + numB
    };
}

function subtract(a,b) {

    // define vars and initialise with validated numbers
    let numA = valNum(a);
    let numB = valNum(b);

    // return object with inputs and sum
    return {
        a: numA,
        b: numB,
        operator: '-',
        answer: numA - numB
    };
}

function multiply(a,b) {

    // define vars and initialise with validated numbers
    let numA = valNum(a);
    let numB = valNum(b);

    // return object with inputs and sum
    return {
        a: numA,
        b: numB,
        operator: '*',
        answer: numA * numB
    };
}

function divide(a,b) {

    // define vars and initialise with validated numbers
    let numA = valNum(a);
    let numB = valNum(b);

    // return object with inputs and sum
    return {
        a: numA,
        b: numB,
        operator: '/',
        answer: numA / numB
    };
}

// Module exports
// expose these functions
module.exports = {
    add,
    subtract,
    multiply,
    divide
};