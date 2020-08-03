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
// @ts-ignore
function typeset(){
    // @ts-ignore
    renderMathInElement(document.querySelector("#postHolder"),{delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ]});
}

// @ts-ignore
 function makeComment(c:Comm):string{
    return `<li class="list-group-item pb-0"><h5><img height="30px" src="${c.author.photoUrl}" class="rounded-circle mr-3">${c.author.username}</h5>
                    <div class="pl-5">
                        <p>${c.content}</p>
                    </div>

                </li>`;
}

// @ts-ignore
 function makeCommentList(comms:Array<Comm>){
    let complete: string = ``;
    for (var c of comms){
        complete += makeComment(c);
    }
    return complete
}

// @ts-ignore
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
         // @ts-ignore
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


/*
const example: Post = {
    author: {username: "Saumya Singhal", uid: "abcd", photoUrl: "https://socrathematics.github.io/icons/redPi.png"},
    title: "An example post",
    time: new Date(),
    content: "This is an example post.",
    comments:[{author:{username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg"}, time: new Date(2020, 7, 31, 8, 42, 31, 45), content: "This is an example comment."}]
};

 const example2: Post = {
     author: {username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg"},
     title: "Another example post",
     time: new Date("2020-07-29T19:58:00-07:00"),
     content: "This is another example post.",
     comments:[]
 };
*/
 // @ts-ignore
 let posts;
 // @ts-ignore
 db.collection("blog").doc("posts")
     .onSnapshot(function(doc) {
         console.log("Current data: ", doc.data());
         const d =doc.data();
         posts = d.all;
         document.getElementById("postHolder").innerHTML = "";
         for (var p of posts){
             showPost(p, "postHolder");
         }
        typeset()
     });


//goal is to get posts from firebase




//showPost(example);