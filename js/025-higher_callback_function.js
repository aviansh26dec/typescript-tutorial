"use strict";
/**
 * A higher-order function is a function that either:
 * Takes one or more functions as arguments, or
 * Returns a function as its result.
 */
/**
 * A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed.
 * Callbacks are commonly used in asynchronous programming.
 */
/**
 * Synchronous Execution: Tasks are performed one at a time, blocking the execution of subsequent tasks.
 * Asynchronous Execution: Tasks can be performed in the background, allowing the main thread to continue executing other code.
 */
var dbQuery = function () {
    setTimeout(function () {
        console.log("DB query fetched");
    }, 3000);
};
function loadPage(q) {
    console.log("header");
    q();
    console.log("sidebar");
    console.log("footer");
}
loadPage(dbQuery);
