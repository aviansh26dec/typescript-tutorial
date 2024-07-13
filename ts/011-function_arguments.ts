/**
 * streetTwo? is optional parameter it is not required to enter any value at the time of function call
 * state = 'IN' is pre intialize parameter if we not pass any value in this parameter than its take defaultvalue is N.
 */
function printAddress(street: string, streetTwo?: string, state = 'IN'){
    console.log(street+',');
    if(streetTwo){
        console.log(streetTwo+',');   
    }
    console.log(state);
}

printAddress('H.No. 592');
printAddress('H.No. 592','Ramtoal');
printAddress('H.No. 592','Ramtoal','US');

/**
 * Spread Argument in Javascript and Rest argument in typescript
 */

function listCard(team: string, ...players : string[]){
    console.log("Team: "+team);
    for(let player of players){
        console.log(player);
    }
}

listCard("India","Virat Kholi","Rohit Sharma","Surya Kumar Yadav");

