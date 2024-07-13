let userEmail : string = 'avinash26dec@gmail.com';
let userPassword : string = 'm2n1shlko';

if(userEmail == 'avinash26dec@gmail.com' && userPassword == 'm2n1shlko'){
    console.log("AND operator: You are authorized to access all the features.");
}else{
    console.log("AND operator: You are not authorize!");
}

if(userEmail == 'avinash26dec1@gmail.com' || userPassword == 'm2n1shlko'){
    console.log("OR operator: You are authorized to access all the features.");
}else{
    console.log("OR operator: You are not authorize!");
}


if(!(userEmail == "avinash26dec@gmail.com")){
    console.log("You are not authorized.");
}