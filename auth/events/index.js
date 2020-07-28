function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
  $("#vm").remove();
  // Get the action to complete.
  const mode = getParameterByName('mode');
  // Get the one-time code from the query parameter.
  const actionCode = getParameterByName('oobCode');
  // (Optional) Get the continue URL from the query parameter if available.
  const continueUrl = getParameterByName('continueUrl');
  // (Optional) Get the language code if available.
  const lang = getParameterByName('lang') || 'en';

  // Configure the Firebase SDK.

  //this is done in index.html

  // Handle the user management action.
  switch (mode) {
    case 'resetPassword':
      // Display reset password handler and UI.
      handleResetPassword(auth, actionCode, continueUrl, lang);
      break;
    case 'recoverEmail':
      // Display email recovery handler and UI.
      handleRecoverEmail(auth, actionCode, lang);
      break;
    case 'verifyEmail':
      // Display email verification handler and UI.
      handleVerifyEmail(auth, actionCode, continueUrl, lang);
      break;
    default:
      // Error: invalid mode.
          document.getElementById("error").style.display=null;
  }
}, false);

function handleResetPassword(auth, actionCode, continueUrl, lang) {
  // Localize the UI to the selected language as determined by the lang
  // parameter.
  var accountEmail;
  // Verify the password reset code is valid.
  auth.verifyPasswordResetCode(actionCode).then(function(email) {
    accountEmail = email;

    const resCont = document.getElementById("reset");
    resCont.querySelector(".slide-1").style.display=null;
    resCont.querySelector(".slide-2").style.display="none";
    resCont.querySelector(".slide-3").style.display="none";
    document.getElementById("error").style.display="none";
    document.getElementById("reset-em").innerText=accountEmail;
    // Save the new password.
    const resetForm = document.getElementById("reset-form");
    resetForm.addEventListener("submit",(e) =>{
        //when the user submits the form, this function will be called.
      e.preventDefault()
      const newPassword = resetForm["new-pass"].value; //get the new password
      auth.confirmPasswordReset(actionCode, newPassword).then(function(resp) {
        // Password reset has been confirmed and new password updated.
        // if the page belongs to the same domain as the app:
        auth.signInWithEmailAndPassword(accountEmail, newPassword);
        //show the confirmation message.
        document.getElementById("reset").querySelector(".slide-1").style.display="none";//hide the screen
        document.getElementById("reset").querySelector(".slide-2").style.display=null;//show the new screen

      }).catch(function(error) {
        // Error occurred during confirmation. The code might have expired or the
        // password is too weak.
        if (error.code=="auth/weak-password"){
          document.getElementById("resetErrCode").innerText = "Your password must be at least 6 characters."
        }
      });

    });


  }).catch(function(error) {
    // Invalid or expired action code. Ask user to try to reset the password
    // again.
    console.log(error);
    document.getElementById("reset").querySelector(".slide-1").style.display="none";
    document.getElementById("reset").querySelector(".slide-2").style.display="none";
    document.getElementById("reset").querySelector(".slide-3").style.display=null;
  });
}

function handleRecoverEmail(auth, actionCode, lang) {
  // Localize the UI to the selected language as determined by the lang
  // parameter.
  var restoredEmail = null;
  // Confirm the action code is valid.
  auth.checkActionCode(actionCode).then(function(info) {
    // Get the restored email address.
    restoredEmail = info['data']['email'];

    // Revert to the old email.
    return auth.applyActionCode(actionCode);
  }).then(function() {
    // Account email reverted to restoredEmail
    var confCont = document.getElementById("recover");
    confCont.querySelector(".slide-1").style.display=null //unhide the confirmation
    // You might also want to give the user the option to reset their password
    // in case the account was compromised:
    document.getElementById("sendReset").addEventListener("click",(e)=>{
      //happens if user agrees to reset password
      auth.sendPasswordResetEmail(restoredEmail).then(function() {
        // Password reset confirmation sent. Ask user to check their email.
        document.getElementById("recoverUem").innerText = restoredEmail;
        confCont.querySelector(".slide-1").style.display="none"; // continue to "check your email" slide
        confCont.querySelector(".slide-2").style.display=null;
      }).catch(function(error) {
        // Error encountered while sending password reset code.
        confCont.querySelector(".slide-1").style.display="none";
        confCont.querySelector(".slide-2").style.display="none";
        confCont.querySelector(".slide-3").style.display="none";
        confCont.querySelector(".slide-4").style.display=null; //go to error-2 slide


      });

    })

  }).catch(function(error) {
    // Invalid code.
    var confCont = document.getElementById("recover");
    confCont.querySelector(".slide-1").style.display="none";
    confCont.querySelector(".slide-2").style.display="none";
    confCont.querySelector(".slide-3").style.display=null; //go to error-1 slide
  });
}

function handleVerifyEmail(auth, actionCode, continueUrl, lang) {
  // Localize the UI to the selected language as determined by the lang
  // parameter.
  // Try to apply the email verification code.
  auth.applyActionCode(actionCode).then(function(resp) {
    // Email address has been verified.

    // TODO: Display a confirmation message to the user.
    // You could also provide the user with a link back to the app.
    var verCont = document.getElementById("verify");
    verCont.querySelector(".slide-1").style.display=null;
    // TODO: If a continue URL is available, display a button which on
    // click redirects the user back to the app via continueUrl with
    // additional state determined from that URL's parameters.
  }).catch(function(error) {
    // Code is invalid or expired. Ask the user to verify their email address
    // again.
    var verCont = document.getElementById("verify");
    verCont.querySelector(".slide-1").style.display="none";
    verCont.querySelector(".slide-2").style.display=null;
  });
}
