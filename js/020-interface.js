"use strict";
/**
 * In TypeScript, which is a superset of JavaScript, an interface is a formal way to define the shape of an object. It specifies the structure and types of properties that an object must have. This helps in creating contracts for classes or objects and provides type-checking capabilities.
 */
function profile(user) {
    return "Welcome ".concat(user.firstName, " ").concat(user.lastName);
}
var realUser = {
    email: "avinashkumarsingh.ignou@gmail.com",
    firstName: "Avinash",
    lastName: "Singh"
};
console.log(profile(realUser));
