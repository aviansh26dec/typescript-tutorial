@detailedLog("billing")
class AccountPayable{
    constructor(){

    }
}

@detailedLog("payment")
class ProductManager{
    constructor(){
        
    }
}

function detailedLog ( dashboard : string ){
    if(dashboard == 'billing'){
        console.log("working on the billing department");
        return function(target : object){}
    }else{
        return function(target : object){}
    }
}

