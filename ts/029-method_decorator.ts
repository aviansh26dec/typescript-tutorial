@detailedLogMethod("billing")
class AccountPayableMethod{
    constructor(){}

    @admin
    deleteBill(){
        console.log("Deleting User Account");
    }
}

function detailedLogMethod ( dashboard : string ){
    if(dashboard == 'billing'){
        console.log("working on the billing department");
        return function(target : object){}
    }else{
        return function(target : object){}
    }
}

function admin(target : object, propertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
    console.log("Doing Admin Check");
    return descriptor;
}

let postDeco = new AccountPayableMethod();
postDeco.deleteBill();