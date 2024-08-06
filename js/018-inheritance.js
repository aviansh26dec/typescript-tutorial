"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CompanyProfile = /** @class */ (function () {
    function CompanyProfile(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return CompanyProfile;
}());
var GenerateInvoice = /** @class */ (function (_super) {
    __extends(GenerateInvoice, _super);
    function GenerateInvoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    GenerateInvoice.prototype.printBill = function () {
        return this.name + "-" + this.total;
    };
    return GenerateInvoice;
}(CompanyProfile));
var Billlanding = /** @class */ (function (_super) {
    __extends(Billlanding, _super);
    function Billlanding(name, state, city) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.state = state;
        _this.city = city;
        return _this;
    }
    Billlanding.prototype.printBill = function () {
        return this.name + "-" + this.state + "-" + this.city;
    };
    return Billlanding;
}(CompanyProfile));
var invoiceOne = new GenerateInvoice("Google", 2000);
var billAddress = new Billlanding("Food Corporation Of India", "Barakhaba", "New Delhi");
console.log(invoiceOne);
console.log(billAddress);
