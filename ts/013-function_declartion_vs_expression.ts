/**
 * A function declaration defines a named function using the function keyword. This type of function is hoisted, meaning it is available throughout the entire scope in which it is defined, even before the line of code where it appears.
 */

function fullName (firstName : string, lastName : string) :string {
    return firstName + " " + lastName;
}   

/**
 * A function expression defines a function inside an expression, often assigning it to a variable. Function expressions can be anonymous (no name) or named. Unlike function declarations, function expressions are not hoisted. They are available only after the line of code where they are defined is executed.
 */

var otherName : (firstName : string, lastName : string) => string;
otherName = (firstName : string, lastName : string) => {
    return firstName + " " + lastName;
}

var thirdOtherName = function(firstName : string, lastName : string) : string{
    return firstName + " " + lastName;
}

console.log(fullName("Avinash", "Singh"));
console.log(otherName("Siddharth", "Singh"));
console.log(thirdOtherName("Abhijeet", "Singh"));