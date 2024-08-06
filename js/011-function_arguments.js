"use strict";
/**
 * streetTwo? is optional parameter it is not required to enter any value at the time of function call
 * state = 'IN' is pre intialize parameter if we not pass any value in this parameter than its take defaultvalue is N.
 */
function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'IN'; }
    console.log(street + ',');
    if (streetTwo) {
        console.log(streetTwo + ',');
    }
    console.log(state);
}
printAddress('H.No. 592');
printAddress('H.No. 592', 'Ramtoal');
printAddress('H.No. 592', 'Ramtoal', 'US');
/**
 * Spread Argument in Javascript and Rest argument in typescript
 */
function listCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player_1 = players_1[_a];
        console.log(player_1);
    }
}
listCard("India", "Virat Kholi", "Rohit Sharma", "Surya Kumar Yadav");
