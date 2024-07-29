"use strict";
/**
 * namespaces are used to organize code into logical groups and to prevent name collisions.
 * Namespaces can contain interfaces, classes, functions, and variables.
 * They are declared using the namespace keyword.
 */
var BlogPost;
(function (BlogPost) {
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
    BlogPost.Post = Post;
})(BlogPost || (BlogPost = {}));
var post = new BlogPost.Post({ title: "Welcome to India!", body: "India has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society." });
post.printPost();
