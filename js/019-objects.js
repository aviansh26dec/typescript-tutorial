"use strict";
var userInfo = {
    "firstName": "Avinash",
    "lastName": "Singh",
    "emailAddress": "avinashkumarsingh.ignou@gmail.com",
    "mobileNumber": "8957947870",
    sayHello(name) {
        return "Hey " + name + "! how are you";
    }
};
console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.emailAddress);
console.log(userInfo.mobileNumber);
console.log(userInfo.sayHello("Avinash"));
