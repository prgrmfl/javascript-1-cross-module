/* handlers's */

let handler_print_deets = function () {
  print_deets(project);
};

const element = document.getElementById("print_det");
element.addEventListener("click", handler_print_deets);