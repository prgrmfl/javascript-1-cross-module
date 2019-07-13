//handler's && event-listener's
let print_values_handler = function() {
  print_vals(a, b);
};
document.getElementById('print_values').addEventListener('click', print_values_handler);

let change_a = function() {
  let y = document.getElementById('valueLog').value;
  a = Number(y);
  console.log(typeof a);
};
document.getElementById('addValToA').addEventListener('click', change_a);

let change_b = function() {
  let z = document.getElementById('valueLogB').value;
  b = Number(z);
  console.log(typeof b);
};
document.getElementById('addValToB').addEventListener('click', change_b);

let print_add = function() {
  do_math(a, b, add);
};
document.getElementById('addNum').addEventListener('click', print_add);

let print_subtract = function() {
  do_math(a, b, subtract);
};
document.getElementById('subtractNum').addEventListener('click', print_subtract);

let print_multiply = function() {
  do_math(a, b, multiply);
};
document.getElementById('multiplyNum').addEventListener('click', print_multiply);

let print_divide = function() {
  do_math(a, b, divide);
};
document.getElementById('divideNum').addEventListener('click', print_divide);
