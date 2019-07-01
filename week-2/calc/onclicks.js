// onclick's
let print_values_button = document.getElementById("print_values");
print_values_button.onclick = function() {
                                print_vals(a, b);
                            }

let button_add_result = document.getElementById("addNum");
button_add_result.onclick = function() {
                                do_math(a, b, add);
                            }

let button_subtract_result = document.getElementById("subtractNum");
button_subtract_result.onclick = function() {
                                    do_math(a, b, subtract);
                                }

let button_multiply_result = document.getElementById("multiplyNum");
button_multiply_result.onclick = function() {
                                    do_math(a, b, multiply);
                                }

let button_divide_result = document.getElementById("divideNum");
button_divide_result.onclick = function() {
                                    do_math(a, b, divide);
                                }