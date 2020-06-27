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
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       eval("dref.update({'derivatives.practice."+numname+"' : correct})")
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
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.get().then(function(doc) {
           if (doc.exists) {
               d = doc.data().derivatives.practice;
               if (d[numname]){//checka(answers[0],num,answers);
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

}

    //number one
initfield("1","one",["\\cos x","\\cos\\ x"]);
    //number two
initfield("2","two",["-\\sin x","-\\sin\\ x"]);
    //number three
initfield("3","three",["e^x"]);
    //number four
initfield("4","four",["\\frac{1}{x}"]);


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
/*
firebase.auth().onAuthStateChanged(function(user) {


     if (user) {
       // User is signed in.
       dref = db.doc("users/"+user.uid+"/progress/calculus");
       dref.get().then(function(doc) {
           if (doc.exists) {
               d = doc.data().derivatives.practice;
               if (d.one){checka("\\cos x","1",["\\cos x","\\cos\\ x"]);
               //math jax type into box
               answerMathField.latex("\\cos x");
               }
               if(d.two){checka("-\\sin x","2",["-\\sin x","-\\sin\\ x"]);
               answerMathField2.latex("-\\sin x");
               }
               if(d.three){checka("e^x","3",["e^x"]);
               answerMathField3.latex("e^x");
               }
               if(d.four){checka("\\frac{1}{x}","4",["\\frac{1}{x}"]);
               answerMathField4.latex("\\frac{1}{x}");
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

});*/