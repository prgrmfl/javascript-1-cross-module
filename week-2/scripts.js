// data (variables)
let project = {
    name: "Site_project",
    link: "https://www.thinkwithgoogle.com/",
    description: "Website page",
}


// functions
function print_deets(obj) {
    for (let key in obj) {
        console.log(obj[key]);       
    }
};



// onclick's
var print_det_button = document.getElementById("print_det");
print_det_button.onclick = function() {
                            print_deets(project);
                          }
