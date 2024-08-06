"use strict";
var _a;
var dataChaining;
dataChaining = {
    employeesChaning: [
        { email: "test@example.com", roles: ["admin", "superAdmin"] },
        { email: "test2@example.com" },
        { email: "test3@example.com" },
    ]
};
// let formattedEmployees;
// if (dataChaining && dataChaining.employeesChaning) {
//     formattedEmployees = dataChaining.employeesChaning.map((employee: EmployeeType) => {
//         let roles;
//         if (employee.roles) {
//             roles = employee.roles.join(", ");
//         }
//         return `${employee.email.toUpperCase()} ${roles}`;
//     })
// }
var formattedEmployees = (_a = dataChaining === null || dataChaining === void 0 ? void 0 : dataChaining.employeesChaning) === null || _a === void 0 ? void 0 : _a.map(function (employee) {
    var _a;
    return "".concat(employee === null || employee === void 0 ? void 0 : employee.email.toUpperCase(), " ").concat((_a = employee === null || employee === void 0 ? void 0 : employee.roles) === null || _a === void 0 ? void 0 : _a.join(", "));
});
console.log(formattedEmployees);
