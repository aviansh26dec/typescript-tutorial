"use strict";
var names = ["Avinash", "Siddharth", "Abhijeet", "Shakti"];
var counter = 0;
(function () {
    for (let name in names) {
        counter++;
    }
})();
console.log(counter);
