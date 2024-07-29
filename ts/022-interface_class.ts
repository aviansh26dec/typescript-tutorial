// Loosely connected Interface with class
interface User{
    email: string;
    fName? : string;
    lName? : string;
}

class Admin {
    role : string;
    constructor(public email: string) {
        this.role = 'Admin';
    }
}

function userProfile (user : User) : string {
    return `Welcome ${user.email}`;
}

var joe = new Admin("aksingh@gmail.com");
console.log(joe.role);

// Direct Implementation
interface Ipost{
    title : string;
    body  : string;
}

class Post implements Ipost{
    title : string;
    body  : string;

    constructor(ipost : Ipost){
        this.title = ipost.title;
        this.body = ipost.body;
    }

    printPost(){
        console.log(`Title : ${this.title}`);
        console.log(`body : ${this.body}`);
    }
}

var post = new Post({ title : "Welcome to India!", body: "India has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society."});
post.printPost();
