function send(){
    var auth = firebase.auth();
var emailAddress = document.getElementById("uem").value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  document.getElementById("uem").value = "";
  document.getElementById("errm").innerHTML="Great! We've sent you a password reset email at "+emailAddress+".";
}).catch(function(error) {
  // An error happened.
  console.log(error)
  if(error.code=="auth/invalid-email"){
    document.getElementById("errm").innerHTML="That doesn't look like a valid email."
  }
  else if(error.code=="auth/user-not-found"){
    document.getElementById("errm").innerHTML="It doesn't look like you have an account with this email. Have you spelled it correctly?"
  }
  else if(error.code=="auth/network-request-failed"){
    document.getElementById("errm").innerHTML="Whoops! Sorry, but there's something wrong with the server. Check your network connection, or try again in a few minutes."
  }
  else{
    document.getElementById("errm").innerHTML=error.message;
  }
});

}