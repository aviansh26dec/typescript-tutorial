"use strict";
// string
var userName = "Avinash Kumar Singh";
// number
var totalCount = 1.3;
// boolean
var result = true;
// tuple
var player = ["Avinash", 23];
// enum
var approvalStatus;
(function (approvalStatus) {
    approvalStatus[approvalStatus["Active"] = 0] = "Active";
    approvalStatus[approvalStatus["Inavtive"] = 1] = "Inavtive";
})(approvalStatus || (approvalStatus = {}));
;
var job = approvalStatus.Active;
// Array
var age = [25, 23, 22];
// Any
var data = [25, "Avinash"];
// Void
function sendSms(msg) {
    console.log("You are registered successfully.");
}
