/**
 * function have access to any public variables in the outer scope
 */

function nameFunction (name : string) : void{
    let n : string = name;

    function printName(){
        console.log(n);
    }

    return printName();
}

nameFunction("Avinash Kumar Singh");

/**
 * The inner function function maintian access to the outer scope event AFTER the values are returned!
 */

function secondNameFunction (name : string){
    let n : string = name;

    return function(){
        console.log(n);
    }
}

var printSecondName = secondNameFunction("Siddharth Singh");
printSecondName();

function lineUp (){
    var nowBatting : number = 1;

    return {
        nextBatter(){ nowBatting ++},
        currentBatter(){ return nowBatting }
    }
}

let batter = lineUp();
console.log(batter.currentBatter());
batter.nextBatter();
console.log(batter.currentBatter());
batter.nextBatter();
console.log(batter.currentBatter());
batter.nextBatter();

let pitcher = lineUp();
console.log(pitcher.currentBatter());
pitcher.nextBatter();