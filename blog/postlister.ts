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

function makePost(p:Post): string {
    return;
}