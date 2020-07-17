function toggleComplete(path,selector){
firebase.auth().onAuthStateChanged( function(user) {
  if (user) {
    var docRef = db.doc('users/'+user.uid+'/progress/'+path);
    docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        if(eval("doc.data()." + selector) == null){
    elem.innerHTML  = "Mark as complete";
    elem.className = "btn btn-dark";
        }
        else{
    elem.innerHTML  = "Mark as incomplete";
    elem.className = "btn btn-outline-dark";
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
     elem.innerHTML  = "Mark as complete";
    elem.className = "btn btn-dark";
});

//that was for setting up

//this is for changing it live


var elem = document.querySelector("#mcb");
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var docRef = db.doc('users/'+user.uid+'/progress/'+path);
    docRef.get().then(function(doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        if(eval("doc.data()." + selector) == null){
            eval("docRef.update({'"+selector+"': firebase.firestore.Timestamp.now()})");
    elem.innerHTML  = "Mark as incomplete";
    elem.className = "btn btn-outline-dark";
        }
        else if (window.confirm("Are you sure you want to mark this lesson as incomplete? You'll permanently lose the timestamp associated with your completion.")){
            eval("docRef.update({'"+selector+"': null})");
    elem.innerHTML  = "Mark as complete";
    elem.className = "btn btn-dark";
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

  });
  }
});
}
