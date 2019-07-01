// data (variables)
var a = 3000;
var b = 5000;

// functions
function print_vals(a, b) {
    console.log("Eerste val: " + a);
    console.log("Tweede val: " + b);
};
function do_math(number1, number2, func) {
    console.log("The result of the calculation is: " + func(number1, number2));
};
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};  
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
