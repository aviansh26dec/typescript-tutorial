"use strict";
class CompanyProfile {
    constructor(name) {
        this.name = name;
        this.companyProfile = name;
    }
}
class GenerateInvoice extends CompanyProfile {
    constructor(name, total) {
        super(name);
        this.name = name;
        this.total = total;
    }
    printBill() {
        return this.name + "-" + this.total;
    }
}
class Billlanding extends CompanyProfile {
    constructor(name, state, city) {
        super(name);
        this.name = name;
        this.state = state;
        this.city = city;
    }
    printBill() {
        return this.name + "-" + this.state + "-" + this.city;
    }
}
var invoiceOne = new GenerateInvoice("Google", 2000);
var billAddress = new Billlanding("Food Corporation Of India", "Barakhaba", "New Delhi");
console.log(invoiceOne);
console.log(billAddress);
