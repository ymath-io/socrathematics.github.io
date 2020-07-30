function makeComment(c) {
    return "<li class=\"list-group-item pb-0\"><h5><img height=\"30px\" src=\"" + c.author.photoUrl + "\" class=\"rounded-circle\">&nbsp;&nbsp;&nbsp;" + c.author.username + "</h5>\n                    <div class=\"pl-5\">\n                        <p>" + c.content + "</p>\n                    </div>\n\n                </li>";
}
function makeCommentList(comms) {
    var complete = "";
    for (var _i = 0, comms_1 = comms; _i < comms_1.length; _i++) {
        var c = comms_1[_i];
        complete += makeComment(c);
    }
    return complete;
}
// @ts-ignore
function makePost(p) {
    return "<div class=\"card my-3 no-def\" >\n        <div class=\"card-body\">\n            <h5 class=\"card-title\"><img alt=\"" + p.author.username + "\" height=\"40px\" src=\"" + p.author.photoUrl + "\" class=\"rounded-circle\"> &nbsp;&nbsp;  " + p.title + "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">By " + p.author.username + " on " + p.time.toString() + "</h6>\n            <p class=\"card-text\">" + p.content + "</p>\n            " + (p.comments.length == 0 ? "" : "<details><summary><h5 class=\"card-title\">Comments  <a class=\"text-dark\"><i class=\"fas fa-angle-down pt-1\"></i></a></h5></summary>\n            <ul class=\"list-group\" >\n                " + makeCommentList(p.comments) + "\n\n            </ul>\n            </details>") + "\n        </div>\n    </div>";
}
// @ts-ignore
function showPost(p, dest) {
    var newPost = document.createElement("DIV");
    document.getElementById(dest).appendChild(newPost);
    newPost.outerHTML = makePost(p);
}
var example = {
    author: { username: "Saumya Singhal", uid: "abcd", photoUrl: "https://socrathematics.github.io/icons/redPi.png" },
    title: "An example post",
    time: new Date(2020, 7, 31, 8, 42, 31, 45),
    content: "This is an example post.",
    comments: [{ author: { username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg" }, time: new Date(2020, 7, 31, 8, 42, 31, 45), content: "This is an example comment." }]
};
var example2 = {
    author: { username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg" },
    title: "Another example post",
    time: new Date(2020, 7, 31, 8, 42, 31, 45),
    content: "This is another example post.",
    comments: []
};
var posts = [example, example2];
for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
    var p = posts_1[_i];
    showPost(p, "postHolder");
}
//showPost(example);
//# sourceMappingURL=postlister.js.map