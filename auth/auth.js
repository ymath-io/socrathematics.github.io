//providers
var gprovider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

function waitfor(test, expectedValue, msec, count, source, callback) {
    // Check if condition met. If not, re-check later (msec).
    while (test() !== expectedValue) {
        count++;
        setTimeout(function() {
            waitfor(test, expectedValue, msec, count, source, callback);
        }, msec);
        return;
    }
    // Condition finally met. callback() can be executed.
    console.log(source + ': ' + test() + ', expected: ' + expectedValue + ', ' + count + ' loops.');
    callback();
}


// signup
const signupForm = document.querySelector("#signup-form");
const signupButton = document.querySelector("#sub");
signupButton.addEventListener("click",(e)=>{
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    if (!document.querySelector('#ppagree').checked){
      document.getElementById("sum-e").innerHTML = "You must agree before proceeding.";
      return;
    };

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
    var user = firebase.auth().currentUser;

    db.doc("/users/"+user.uid+"/progress/calculus").set({limits:{},derivatives:{}});

        user.sendEmailVerification().then(function() {
          // Email sent.
            $("#sum").modal('hide');
           signupForm.reset();

        }).catch(function(error) {
          if (error.code == "auth/email-already-in-use"){
    console.log("email has been verified");
    document.getElementById("sum-e").innerHTML = "Great! Your email has been verified.";
    $("#sum").modal('hide');
    signupForm.reset();}
        });



    }).catch(function(error) {
    if(error.code=="auth/weak-password"){
    console.log("weak password");
    document.getElementById("sum-e").innerHTML = "Your password should be at least 6 characters.";}
    else if (error.code == "auth/email-already-in-use"){
    console.log("you already have an account!");
    document.getElementById("sum-e").innerHTML = "It looks like you already have an account. Sign in instead?";}
    else if (error.code == "auth/invalid-email"){
      document.getElementById("sum-e").innerHTML = "That does not look like a valid email.";
    }
    else{console.log(error.code)}
    });


})

//logout
const logout  = document.querySelector("#sob");
logout.addEventListener("click",(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
    console.log("User has been logged out.");
    $("#som").modal('hide');
    });
});

//sign in

const signinForm = document.querySelector("#signin-form");
const signinButton = document.querySelector("#sib");
signinButton.addEventListener("click",(e)=>{
    e.preventDefault();

    //get user info
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred => {
        $("#sim").modal('hide');
        signinForm.reset();

    }).catch(function(error) {
    if(error.code=="auth/wrong-password"){
    console.log("wrong password");
    document.getElementById("sim-e").innerHTML = "Incorrect password.";}
    else if (error.code == "auth/user-not-found"){
    console.log("user does not have an account");
    document.getElementById("sim-e").innerHTML = "We didn't find an account with that email. Sign up instead?";}
    else if (error.code == "auth/too-many-requests"){
      console.log("too many tries");
      document.getElementById("sim-e").innerHTML = "It looks like you've tried to log in too many times  in the past minute. We've locked your account for the next two minutes.";}
    else{console.log(error.code)}
});

})

//update data - this is now done in /u/my-account
/*const nameF = document.querySelector("#mam-name");
const mab = document.querySelector("#mab");
var user = firebase.auth().currentUser;

mab.addEventListener("click",(e)=>{
    e.preventDefault();
    var user = firebase.auth().currentUser;
    const n=nameF.value;

user.updateProfile({
  displayName: n
}).then(function() {
    $("#mam").modal("hide");
});
});*/

//verification
const vsob  = document.querySelector("#vsob");
vsob.addEventListener("click",(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
    console.log("User has been logged out.");
    $("#vm").modal('hide');
    });
});

const vr  = document.querySelector("#vrb");
vr.addEventListener("click",(e)=>{
    e.preventDefault();
    location.reload();
});

const vdb  = document.querySelector("#vdb");
vdb.addEventListener("click",(e)=>{
    var user = firebase.auth().currentUser;

user.delete().then(function() {
  location.reload();
}).catch(function(error) {
  console.log(error.code);
});
});


//neutral
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  if(!user.emailVerified){
        // Here you can create an alert to let the user know that
        // the reason they can't log in is that they haven't verified
        // their email address.
        $("#vm").modal("show");
      } else {
        document.getElementById("su").style.display="none";
   document.getElementById("si").style.display="none";
   //document.getElementById("so").style.display="inline";
   document.getElementById("ma").style.display=null;


   //document.getElementById("mam-email").innerHTML=user.email;

        //document.getElementById("mam-name").value = user.displayName;

        if (user.displayName==false || user.displayName==null){
            document.getElementById("top-name").innerText = user.email;
        }
        else {
      document.getElementById("top-name").innerText = user.displayName;}
      if (user.photoURL==false || user.photoURL==null){
          document.getElementById("top-photo").src = "/icons/greenPi.svg";
      }
      else {
          document.getElementById("top-photo").src = user.photoURL;}

        console.log("User authenticated: " + user.displayName);

   //console.log(user.email);
      document.querySelectorAll(".auth").forEach(function(currentValue){
    currentValue.style.display=null;
    console.log(currentValue);
   });
      }

  } else {
   document.getElementById("ma").style.display="none";
   document.getElementById("su").style.display=null;
   document.getElementById("si").style.display=null;
   //console.log(document.querySelectorAll(".auth"));
   if (document.querySelectorAll(".auth").length == 0){location.reload}
   document.querySelectorAll(".auth").forEach(function(currentValue){ //don't show auth specific elements
    currentValue.style.display="none";
    console.log(currentValue);
   });
console.log(document.querySelectorAll(".auth-admin"));
   if (document.querySelectorAll(".auth-admin").length == 0){location.reload}
   document.querySelectorAll(".auth-admin").forEach(function(currentValue){ //don't show auth-admin specific elements
    currentValue.style.display="none";
    console.log(currentValue);
   });

  }
});
