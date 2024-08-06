"use strict";
/**
 * namespaces are used to organize code into logical groups and to prevent name collisions.
 * Namespaces can contain interfaces, classes, functions, and variables.
 * They are declared using the namespace keyword.
 */
var BlogPost;
(function (BlogPost) {
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
    BlogPost.Post = Post;
})(BlogPost || (BlogPost = {}));
var post = new BlogPost.Post({ title: "Welcome to India!", body: "India has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society." });
post.printPost();
