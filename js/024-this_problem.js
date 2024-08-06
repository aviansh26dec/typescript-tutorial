"use strict";
var PrintInvoice = /** @class */ (function () {
    function PrintInvoice(amount) {
        this.total = amount;
    }
    PrintInvoice.prototype.printTotal = function () {
        console.log(this.total);
    };
    /**
     * this keyword do the problem when we call in another scope
     */
    // printLater(time : number){
    //     setTimeout(function(){
    //         console.log(this.total);
    //     }, time);
    // }
    /**
     * to resolve this issue we can use arrow function
     */
    PrintInvoice.prototype.printLater = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.total);
        }, time);
    };
    return PrintInvoice;
}());
var printInvoice = new PrintInvoice(400);
printInvoice.printTotal();
printInvoice.printLater(1000);
