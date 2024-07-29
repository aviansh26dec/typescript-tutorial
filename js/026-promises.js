"use strict";
/**
 * Promises in TypeScript (and JavaScript) are used to handle asynchronous operations.
 * A Promise represents an operation that hasn't completed yet but is expected in the future.
 *
 */
let performUpload = function (imgStatus) {
    return new Promise((resolve, reject) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            if (imgStatus == "false") {
                reject({ imgStatus: "Error occured!" });
            }
            else {
                resolve({ imgStatus: imgStatus });
            }
        }, 1000);
    });
};
var upload;
var transfer;
var compress;
performUpload("Uploading...")
    .then((res) => {
    upload = res;
    return performUpload("compressing...");
})
    .then((res) => {
    compress = res;
    return performUpload("transferring...");
})
    .then((res) => {
    transfer = res;
    return performUpload("Image upload completed.");
}).catch((res) => {
    console.error(res); // If rejected, this would run
});
;
