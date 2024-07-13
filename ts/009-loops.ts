var x : number = 0;

while(x < 10){
    console.log("value of x is: "+x);
    x++;
}

let loopPlayers : number[] = [25, 21, 48, 47];

// for in (for in loop return the index value of an array)
for (let player in loopPlayers){
    console.log(player);
}

// for of (for out loop retur the value of an array)
for (let player of loopPlayers){
    console.log(player);
}