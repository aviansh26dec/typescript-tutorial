var names : string[] = ["Avinash","Siddharth","Abhijeet","Shakti"];
var counter : number = 0;

(function(){
    for(let name in names){
        counter++;
    }
})();

console.log(counter);