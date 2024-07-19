class Invoice {
    companyProfile : string;
    
    constructor(public name : string){
        this.companyProfile = name;
    }
}

var invoice = new Invoice("Google");
console.log(invoice);