class CompanyProfile {
    companyProfile : string;

    constructor(public name : string){
        this.companyProfile = name;
    }
}

class GenerateInvoice extends CompanyProfile {

    constructor(public name : string, public total : number){
        super(name);
    }

    printBill(){
        return this.name + "-" + this.total;
    }
}

class Billlanding extends CompanyProfile {

    constructor(public name : string, public state : string , public city : string){
        super(name);
    }

    printBill(){
        return this.name + "-" + this.state + "-" + this.city;
    }
}

var invoiceOne = new GenerateInvoice("Google", 2000);
var billAddress = new Billlanding("Food Corporation Of India","Barakhaba","New Delhi");

console.log(invoiceOne);
console.log(billAddress);