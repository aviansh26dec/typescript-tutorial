"use strict";
var pageTitle1 = "some amazing title";
var pageTitle2 = "Another Amazing Title";
var pageTitle3 = "A rEAlY weIrd TiTLE";
var pageTitle4 = "";
var capatilizeWord = function (str) {
    var startChar = str.charAt(0).toUpperCase();
    var otherChar = str.substring(1).toLowerCase();
    return "".concat(startChar).concat(otherChar);
};
var capitizeEachWord = function (str) {
    return str.split(" ").map(function (word) { return capatilizeWord(word); }).join(" ");
};
console.log(capitizeEachWord(pageTitle1));
console.log(capitizeEachWord(pageTitle2));
console.log(capitizeEachWord(pageTitle3));
console.log(capitizeEachWord(pageTitle4));
