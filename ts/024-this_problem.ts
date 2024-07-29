class PrintInvoice {
    total : number;

    constructor( amount : number){
        this.total = amount;
    }

    printTotal(){
        console.log(this.total);
    }

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
    printLater(time : number){
        setTimeout(() => {
            console.log(this.total);
        }, time);
    }
}

var printInvoice = new PrintInvoice(400);
printInvoice.printTotal();
printInvoice.printLater(1000);
