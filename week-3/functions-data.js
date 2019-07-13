// data (variables)
let project = {
    name: "Site_project",
    link: "https://www.thinkwithgoogle.com/",
    description: "Website page"
}

// functions
function print_deets(obj) {
    for (let key in obj) {
        console.log(key + " of " + "project" + " is: " + obj[key]);
    };    
    
};


