// onclick's
var print_name_button = document.getElementById("print_name");
print_name_button.onclick = function() {
                                print_team_name(team_name);
                            }

var print_members_button = document.getElementById("print_members");
print_members_button.onclick = function() {
                                  print_team_members(team_members);
                              }

var introduction_button = document.getElementById("print_complete_introduction");
introduction_button.onclick = function() {
                                  introduce(team_name, team_members);
                              }