//handler's && event-listener's
var funcTeamName = function() {
    print_team_name(team_name);
};
document.getElementById("print_name").addEventListener("click", funcTeamName);

var funcTeamMembers = function() {
    print_team_members(team_members);
};
document.getElementById("print_members").addEventListener("click", funcTeamMembers);

var funcIntro = function() {
    introduce(a_string, an_array);
};
document.getElementById("print_complete_introduction").addEventListener("click", funcIntro);

var funcNewMember = function() {
    let x = document.getElementById("addingAMemberToTeam").value;
    team_members.push(x);
}
document.getElementById("addTeamMember").addEventListener("click", funcNewMember);

