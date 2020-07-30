// @ts-ignore
function makePost(p) {
    return "<div class=\"card my-3 no-def\" >\n        <div class=\"card-body\">\n            <h5 class=\"card-title\"><img height=\"40px\" src=\"" + p.author.photoUrl + "\" class=\"rounded-circle\" alt=\"" + p.author.username + "\"> &nbsp;&nbsp;  " + p.title + "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">By " + p.author.username + " on " + p.time.toString() + "</h6>\n            <p class=\"card-text\">" + p.content + "</p>\n            \n        </div>\n    </div>";
}
// @ts-ignore
function showPost(p, dest) {
    var newPost = document.createElement("DIV");
    document.getElementById(dest).appendChild(newPost);
    newPost.outerHTML = makePost(p);
}
//# sourceMappingURL=postWriter.js.map