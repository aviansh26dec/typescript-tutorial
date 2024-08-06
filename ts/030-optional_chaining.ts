type EmployeeType = {
    email: string;
    roles?: string[];
}

let dataChaining: {employeesChaning?: EmployeeType[]};

dataChaining = {
    employeesChaning: [
        {email: "test@example.com", roles: ["admin", "superAdmin"]},
        {email: "test2@example.com"},
        {email: "test3@example.com"},
    ]
}

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

const formattedEmployees = dataChaining?.employeesChaning?.map((employee: EmployeeType) => {
    return `${employee?.email.toUpperCase()} ${employee?.roles?.join(", ")}`;
});
console.log(formattedEmployees);