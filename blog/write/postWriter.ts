interface Person {
    username : string,
    uid: string,
    photoUrl: string
}

interface Comm{
    author: Person,

    time: Date,
    content: string
}

interface Post {
    author: Person,
    title: string,
    time: Date,
    content: string,
    comments:Array<Comm>
}

function makeComment(c:Comm):string{
    return `<li class="list-group-item pb-0"><h5><img height="30px" src="${c.author.photoUrl}" class="rounded-circle mr-3">${c.author.username}</h5>
                    <div class="pl-5">
                        <p>${c.content}</p>
                    </div>

                </li>`;
}

function makeCommentList(comms:Array<Comm>){
    let complete: string = ``;
    for (var c of comms){
        complete += makeComment(c);
    }
    return complete
}

function typeset(){
    // @ts-ignore
    renderMathInElement(document.querySelector("#postHolder"),{delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ]});
}


function printDate(d:Date){
    const minSince:number = Math.ceil((Date.now()-d.getTime())/60000);
    const hrSince:number  = Math.floor(minSince/60);
    const daySince:number  = Math.floor(hrSince/24);
    const weekSince:number  = Math.floor(daySince/7);
    const monthSince:number  = Math.floor(weekSince/4);
    //const yearSince:number  = Math.x_y(monthSince/12);
    if (minSince==0){
        return "just now";
    }
    else if (minSince < 60){
        return `${minSince} minute${minSince==1 ? '':'s'} ago`;
    }
    else if (hrSince < 24){
        return `${hrSince} hour${hrSince==1 ? '':'s'} ago`;
    }
    else if (daySince < 7){
        return `${daySince} day${daySince==1 ? '':'s'} ago`;
    }
    else if (weekSince < 4){
        return `${weekSince} week${weekSince==1 ? '':'s'} ago`;
    }
    else {

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return `on ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        // on Jul 31, 1975
    }
}
// @ts-ignore
function makePost(p:Post): string {
    return `<div class="card my-3 no-def" >
        <div class="card-body">
            <h3 class="card-title"><img alt="${p.author.username}" height="40px" src="${p.author.photoUrl}" class="rounded-circle mr-3 mb-1">${p.title}</h3>
            
            <h6 class="card-subtitle mb-2 text-muted">By ${p.author.username} ${
        //@ts-ignore
        printDate(p.time.toDate())}</h6>
            <p class="card-text">${p.content}</p>
            ${p.comments.length==0 ? ``:`<details><summary><h5 class="card-title comment-title">Comments </h5></summary>
            <ul class="list-group" >
                ${makeCommentList(p.comments)}

            </ul>
            </details>`}
        </div>
    </div>`;
}

// @ts-ignore
function showPost(p: Post, dest:string) :void {
    const newPost = document.createElement("DIV");

    document.getElementById(dest).prepend(newPost);
    newPost.outerHTML = makePost(p);
}

function editPost(pt:Date):void{
    //get the post by the timestamp? Should we not use an array....? Use
}

function sendPost(){
    //get the details about the post
    // @ts-ignore
    const u :firebase.user = auth.currentUser;
    const p:Post = {
        author:{
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
    }

    //get a reference to the database, and push the post.
    // @ts-ignore

    db.collection("blog").doc("posts").update({
        // @ts-ignore
        all: firebase.firestore.FieldValue.arrayUnion(p)
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    //@ts-ignore
    document.getElementById("wpTitle").value = "";
    //@ts-ignore
    document.getElementById("wpContent").value = "";
    return p;
}


// @ts-ignore
let posts;
// @ts-ignore
db.collection("blog").doc("posts")
    .onSnapshot(function(doc) {
        //console.log("Current data: ", doc.data());
        const d =doc.data();
        posts = d.all;
        document.getElementById("postHolder").innerHTML = "";
        for (var p of posts){
            showPost(p, "postHolder");
        }
        typeset()
    });
// @ts-ignore
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user.photoURL != null) {
            // @ts-ignore
            document.getElementById("wpPic").src = user.photoURL;
        }
        else{
            // @ts-ignore
            document.getElementById("wpPic").src = "/icons/greenPi.svg";
        }
    }
    else {}
});