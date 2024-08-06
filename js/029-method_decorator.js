"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountPayableMethod = /** @class */ (function () {
    function AccountPayableMethod() {
    }
    AccountPayableMethod.prototype.deleteBill = function () {
        console.log("Deleting User Account");
    };
    __decorate([
        admin,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AccountPayableMethod.prototype, "deleteBill", null);
    AccountPayableMethod = __decorate([
        detailedLogMethod("billing"),
        __metadata("design:paramtypes", [])
    ], AccountPayableMethod);
    return AccountPayableMethod;
}());
function detailedLogMethod(dashboard) {
    if (dashboard == 'billing') {
        console.log("working on the billing department");
        return function (target) { };
    }
    else {
        return function (target) { };
    }
}
function admin(target, propertyKey, descriptor) {
    console.log("Doing Admin Check");
    return descriptor;
}
var postDeco = new AccountPayableMethod();
postDeco.deleteBill();
