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
    return `<li class="list-group-item pb-0"><h5><img height="30px" src="${c.author.photoUrl}" class="rounded-circle">&nbsp;&nbsp;&nbsp;${c.author.username}</h5>
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

// @ts-ignore
 function makePost(p:Post): string {
    return `<div class="card my-3 no-def" >
        <div class="card-body">
            <h5 class="card-title"><img alt="${p.author.username}" height="40px" src="${p.author.photoUrl}" class="rounded-circle"> &nbsp;&nbsp;  ${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">By ${p.author.username} on ${p.time.toString()}</h6>
            <p class="card-text">${p.content}</p>
            ${p.comments.length==0 ? ``:`<details><summary><h5 class="card-title">Comments  <a class="text-dark"><i class="fas fa-angle-down pt-1"></i></a></h5></summary>
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

    document.getElementById(dest).appendChild(newPost);
    newPost.outerHTML = makePost(p);
}



const example: Post = {
    author: {username: "Saumya Singhal", uid: "abcd", photoUrl: "https://socrathematics.github.io/icons/redPi.png"},
    title: "An example post",
    time: new Date(2020, 7, 31, 8, 42, 31, 45),
    content: "This is an example post.",
    comments:[{author:{username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg"}, time: new Date(2020, 7, 31, 8, 42, 31, 45), content: "This is an example comment."}]
};

 const example2: Post = {
     author: {username: "Saumya Singhal", uid: "abcd", photoUrl: "https://i.redd.it/79pyeyh73f921.jpg"},
     title: "Another example post",
     time: new Date(2020, 7, 31, 8, 42, 31, 45),
     content: "This is another example post.",
     comments:[]
 };

const posts:Post[] = [example,example2];
for (var p of posts){
    showPost(p, "postHolder");
}
//showPost(example);