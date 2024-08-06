"use strict";
var x = 0;
while (x < 10) {
    console.log("value of x is: " + x);
    x++;
}
var loopPlayers = [25, 21, 48, 47];
// for in (for in loop return the index value of an array)
for (var player_1 in loopPlayers) {
    console.log(player_1);
}
// for of (for out loop retur the value of an array)
for (var _i = 0, loopPlayers_1 = loopPlayers; _i < loopPlayers_1.length; _i++) {
    var player_2 = loopPlayers_1[_i];
    console.log(player_2);
}
