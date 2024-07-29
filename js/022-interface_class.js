"use strict";
class Admin {
    constructor(email) {
        this.email = email;
        this.role = 'Admin';
    }
}
function userProfile(user) {
    return `Welcome ${user.email}`;
}
var joe = new Admin("aksingh@gmail.com");
console.log(joe.role);
class Post {
    constructor(ipost) {
        this.title = ipost.title;
        this.body = ipost.body;
    }
    printPost() {
        console.log(`Title : ${this.title}`);
        console.log(`body : ${this.body}`);
    }
}
var post = new Post({ title: "Welcome to India!", body: "India has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society." });
post.printPost();
