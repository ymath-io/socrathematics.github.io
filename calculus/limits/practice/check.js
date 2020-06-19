  /*** Tracking ***/
  var user;
  var dref;





  //number one

  var answerSpan = document.getElementById('answer1');
  var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
        correct = checka(enteredMath,"1","1",null);
        user = firebase.auth().currentUser;

     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.update({
            "limits.practice.one": correct
        })
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


      }
    }
  });

    //number two
      var answerSpan2 = document.getElementById('answer2');
  var answerMathField2 = MQ.MathField(answerSpan2, {
    handlers: {
      edit: function() {
        var enteredMath2 = answerMathField2.latex(); // Get entered math in LaTeX format
        correct = checka(enteredMath2,"2","4",null);
        user = firebase.auth().currentUser;

     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.update({
            "limits.practice.two": correct
        })
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
      }
    }
  });
    //number three
      var answerSpan3 = document.getElementById('answer3');
  var answerMathField3 = MQ.MathField(answerSpan3, {
    handlers: {
      edit: function() {
        var enteredMath3 = answerMathField3.latex(); // Get entered math in LaTeX format
        correct = checka(enteredMath3,"3","undefined","tldne");
        user = firebase.auth().currentUser;

     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.update({
            "limits.practice.three": correct
        })
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
      }
    }
  });

//to check the answers!
    function checka(l,n, a1,a2){
    if (l==a1 || l==a2){
    document.getElementById("answer"+n).style.color="var(--success)";
    document.getElementById("tu"+n).style.display="inline";
    return true
    }
else{document.getElementById("answer"+n).style.color="var(--dark)";
    document.getElementById("tu"+n).style.display="none";
    return false
    }
    }




firebase.auth().onAuthStateChanged(function(user) {


     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.get().then(function(doc) {
           if (doc.exists) {
               d = doc.data().limits.practice;
               if (d.one){checka("1","1","1",null);
               //math jax type into box
               answerMathField.latex("1");
               }
               if(d.two){checka("4","2","4",null);
               answerMathField2.latex("4");
               }
               if(d.three){checka("undefined","3","undefined","tldne");
               answerMathField3.latex("undefined");}
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
