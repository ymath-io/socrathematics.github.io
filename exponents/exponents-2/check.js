function initfield(num,numname,answers){
    //number x
  var answerSpan = document.getElementById('answer'+num);
  var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
        correct = checka(enteredMath,num,answers);
        user = firebase.auth().currentUser;

     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/exponents");
       eval("dref.update({'exponents2.intro."+numname+"' : correct})")
        .then(function() {
            //console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
     } else {
       // No user is signed in.
       console.log("no user");
     }
/*
     */
      }
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {


     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/exponents");
       dref.get().then(function(doc) {
           if (doc.exists) {
               d = doc.data().exponents2.intro;
               if (d[numname]){checka(answers[0],num,answers);
               //math jax type into box
               answerMathField.latex(answers[0]);
               }
           } else {
               // doc.data() will be undefined in this case
               console.log("No such document!");
           }
       }).catch(function(error) {
           console.log("Error getting document:", error);
       });
     } else {
       // No user is signed in.
       console.log("no user");
     }

});
return answerMathField;
}

    //number one
f1 = initfield("1","one",["2^4"]); // idk which ones you want to include
    //number two
//f2 = initfield("2","two",["f\\left(x\\right)+f'\\left(x\\right)","f'\\left(x\\right)+f\\left(x\\right)"]);
    //number three
//f3 = initfield("3","three",["\\sec x\\tan x","\\tan x\\sec x","\\sec x\\cdot\\tan x","\\tan x\\cdot\\sec x"]);
    //number four
//f4 = initfield("4","four",["-\\csc x\\cot x","-\\cot x\\csc x","-\\csc x\\cdot\\cot x","-\\cot x\\cdot\\csc x"]);


//to check the answers!
    function checka(l,n, answers){
    if (answers.includes(l)){
    document.getElementById("answer"+n).style.color="var(--success)";
    document.getElementById("tu"+n).style.display="inline";
    return true
    }
else{document.getElementById("answer"+n).style.color="var(--dark)";
    document.getElementById("tu"+n).style.display="none";
    return false
    }
    }