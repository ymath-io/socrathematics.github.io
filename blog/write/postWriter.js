function makeComment(c) {
    return "<li class=\"list-group-item pb-0\"><h5><img height=\"30px\" src=\"" + c.author.photoUrl + "\" class=\"rounded-circle mr-3\">" + c.author.username + "</h5>\n                    <div class=\"pl-5\">\n                        <p>" + c.content + "</p>\n                    </div>\n\n                </li>";
}
function makeCommentList(comms) {
    var complete = "";
    for (var _i = 0, comms_1 = comms; _i < comms_1.length; _i++) {
        var c = comms_1[_i];
        complete += makeComment(c);
    }
    return complete;
}
function typeset() {
    // @ts-ignore
    renderMathInElement(document.querySelector("#postHolder"), { delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ] });
}
function printDate(d) {
    var minSince = Math.ceil((Date.now() - d.getTime()) / 60000);
    var hrSince = Math.floor(minSince / 60);
    var daySince = Math.floor(hrSince / 24);
    var weekSince = Math.floor(daySince / 7);
    var monthSince = Math.floor(weekSince / 4);
    //const yearSince:number  = Math.floor(monthSince/12);
    if (minSince == 0) {
        return "just now";
    }
    else if (minSince < 60) {
        return minSince + " minute" + (minSince == 1 ? '' : 's') + " ago";
    }
    else if (hrSince < 24) {
        return hrSince + " hour" + (hrSince == 1 ? '' : 's') + " ago";
    }
    else if (daySince < 7) {
        return daySince + " day" + (daySince == 1 ? '' : 's') + " ago";
    }
    else if (weekSince < 4) {
        return weekSince + " week" + (weekSince == 1 ? '' : 's') + " ago";
    }
    else {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return "on " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
        // on Jul 31, 1975
    }
}
// @ts-ignore
function makePost(p) {
    return "<div class=\"card my-3 no-def\" >\n        <div class=\"card-body\">\n            <h3 class=\"card-title\"><img alt=\"" + p.author.username + "\" height=\"40px\" src=\"" + p.author.photoUrl + "\" class=\"rounded-circle mr-3 mb-1\">" + p.title + "</h3>\n            \n            <h6 class=\"card-subtitle mb-2 text-muted\">By " + p.author.username + " " + 
    //@ts-ignore
    printDate(p.time.toDate()) + "</h6>\n            <p class=\"card-text\">" + p.content + "</p>\n            " + (p.comments.length == 0 ? "" : "<details><summary><h5 class=\"card-title comment-title\">Comments </h5></summary>\n            <ul class=\"list-group\" >\n                " + makeCommentList(p.comments) + "\n\n            </ul>\n            </details>") + "\n        </div>\n    </div>";
}
// @ts-ignore
function showPost(p, dest) {
    var newPost = document.createElement("DIV");
    document.getElementById(dest).prepend(newPost);
    newPost.outerHTML = makePost(p);
}
function sendPost() {
    //get the details about the post
    // @ts-ignore
    var u = auth.currentUser;
    var p = {
        author: {
            username: u.displayName,
            uid: u.uid,
            photoUrl: u.photoURL
        },
        // @ts-ignore
        title: document.getElementById("wpTitle").value,
        // @ts-ignore
        content: document.getElementById("wpContent").value,
        comments: [],
        time: new Date()
    };
    //get a reference to the database, and push the post.
    // @ts-ignore
    db.collection("blog").doc("posts").update({
        // @ts-ignore
        all: firebase.firestore.FieldValue.arrayUnion(p)
    })
        .then(function () {
        console.log("Document successfully written!");
    })
        .catch(function (error) {
        console.error("Error writing document: ", error);
    });
    //@ts-ignore
    document.getElementById("wpTitle").value = "";
    //@ts-ignore
    document.getElementById("wpContent").value = "";
    return p;
}
// @ts-ignore
var posts;
// @ts-ignore
db.collection("blog").doc("posts")
    .onSnapshot(function (doc) {
    //console.log("Current data: ", doc.data());
    var d = doc.data();
    posts = d.all;
    document.getElementById("postHolder").innerHTML = "";
    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
        var p = posts_1[_i];
        showPost(p, "postHolder");
    }
    typeset();
});
// @ts-ignore
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (user.photoURL != null) {
            document.getElementById("wpPic").src = user.photoURL;
        }
        else {
            document.getElementById("wpPic").src = "/icons/greenPi.svg";
        }
    }
    else { }
});
//# sourceMappingURL=postWriter.js.map