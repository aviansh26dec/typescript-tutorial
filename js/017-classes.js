"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Invoice;
}());
var invoice = new Invoice("Google");
console.log(invoice);
