/**
 * In TypeScript, which is a superset of JavaScript, an interface is a formal way to define the shape of an object. It specifies the structure and types of properties that an object must have. This helps in creating contracts for classes or objects and provides type-checking capabilities.
 */

interface User {
    email : string;
    firstName: string;
    lastName: string;
    Address? : string; // this is optional
}

function profile(user: User) : string {
    return `Welcome ${user.firstName} ${user.lastName}`;
}

var realUser = {
    email: "avinashkumarsingh.ignou@gmail.com",
    firstName: "Avinash",
    lastName: "Singh"
}

console.log(profile(realUser));

