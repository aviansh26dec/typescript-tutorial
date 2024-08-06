"use strict";
var names = ["Avinash", "Siddharth", "Abhijeet", "Shakti"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
