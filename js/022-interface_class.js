"use strict";
var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function userProfile(user) {
    return "Welcome ".concat(user.email);
}
var joe = new Admin("aksingh@gmail.com");
console.log(joe.role);
var Post = /** @class */ (function () {
    function Post(ipost) {
        this.title = ipost.title;
        this.body = ipost.body;
    }
    Post.prototype.printPost = function () {
        console.log("Title : ".concat(this.title));
        console.log("body : ".concat(this.body));
    };
    return Post;
}());
var post = new Post({ title: "Welcome to India!", body: "India has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society." });
post.printPost();
