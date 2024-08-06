"use strict";
/**
 * function have access to any public variables in the outer scope
 */
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    return printName();
}
nameFunction("Avinash Kumar Singh");
/**
 * The inner function function maintian access to the outer scope event AFTER the values are returned!
 */
function secondNameFunction(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var printSecondName = secondNameFunction("Siddharth Singh");
printSecondName();
function lineUp() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batter = lineUp();
console.log(batter.currentBatter());
batter.nextBatter();
console.log(batter.currentBatter());
batter.nextBatter();
console.log(batter.currentBatter());
batter.nextBatter();
var pitcher = lineUp();
console.log(pitcher.currentBatter());
pitcher.nextBatter();
