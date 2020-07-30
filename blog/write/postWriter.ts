interface Person {
    username : string,
    uid: string,
    photoUrl: string
}
interface Post {
    author: Person,
    title: string,
    time: Date,
    content: string
}

// @ts-ignore
function makePost(p:Post): string {
    return `<div class="card my-3 no-def" >
        <div class="card-body">
            <h5 class="card-title"><img height="40px" src="${p.author.photoUrl}" class="rounded-circle" alt="${p.author.username}"> &nbsp;&nbsp;  ${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">By ${p.author.username} on ${p.time.toString()}</h6>
            <p class="card-text">${p.content}</p>
            
        </div>
    </div>`;
}

// @ts-ignore
function showPost(p: Post, dest:string) :void {
    const newPost = document.createElement("DIV");

    document.getElementById(dest).appendChild(newPost);
    newPost.outerHTML = makePost(p);
}

