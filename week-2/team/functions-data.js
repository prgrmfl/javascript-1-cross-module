// data (variables)
let team_name = "Rocksy";
let team_members = [
    "Kale", "Fade", "Zalem"
];

// functions
function print_team_name(a_string) {
    console.log("Hello and welcome to the page of team " + a_string + ". Navigate yourself...");
};
function print_team_members(an_array) {
    console.log("Team members are: ")
    for (let i in an_array) {
        console.log(an_array[i]);
    }   
};

function introduce(a_string, an_array) {
    print_team_name(a_string);
    print_team_members(an_array);
}
