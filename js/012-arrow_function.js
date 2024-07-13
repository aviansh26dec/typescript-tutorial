"use strict";
/**
 * Regular functions have their own this context.
 * And this is determined dynamically depending on how you
 * call or execute the function. Arrow functions, on the other hand,
 * do not have their own this context. Instead, they capture the
 * this value from the surrounding lexical context in which the arrow function was created.
 */
var gradeCheck = (grade) => {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradeCheck(45));
console.log(gradeCheck(100));
console.log(gradeCheck(85));
