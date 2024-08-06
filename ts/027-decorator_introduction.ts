
class DecoratorIntroduction{

    @processOnce()
    @processTwo()
    someFunction(){}
}

function processOnce(){
    console.log("processOne has run");
    return function (target : object, propertyKey : string, descriptor : PropertyDescriptor){
        console.log("processOne has called");
    }
}

function processTwo(){
    console.log("processTwo has run");
    return function (target : object, propertyKey : string, descriptor : PropertyDescriptor){
        console.log("processTwo has called");
    }
}