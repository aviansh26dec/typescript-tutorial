interface InvoiceFunc {
    (user : string, total : number) : void;
}

var myInvoice : InvoiceFunc;
myInvoice = function (user, total)  {
    console.log(user, total);
}

myInvoice("Google", 500);

console.log(myInvoice);