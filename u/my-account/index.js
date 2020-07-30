var user;


firebase.auth().onAuthStateChanged(function(u) {
    if (u) {
        user=u;
        document.getElementById("acc-name").value = u.displayName;
        document.getElementById("acc-email").value = u.email;
        possURL = u.photoURL;
        if (possURL){
            document.getElementById("acc-photo").src = u.photoURL;}
        else {
            document.getElementById("acc-photo").src = "/icons/greenPi.svg"
        }
    } else {
        // No user is signed in.
        $("#sim").modal("show");
    }
});


const idenForm = document.getElementById("iden");

idenForm.addEventListener("input",(e)=>{
    $("#idenbut").toggleClass("disabled",false);
})

idenForm.addEventListener("submit",(e)=>{
    //whenever user submits something, this is called.
    e.preventDefault()
    user = firebase.auth().currentUser;
    var newName  =document.getElementById("acc-name").value;
    var newEmail  =document.getElementById("acc-email").value;
    var newPhoto  =document.getElementById("acc-photo").src;


    //If name/email are same do not update them before the password.

    //update photo
    var ref = storage.ref().child(`users/${user.uid}/pp.png`);
    var message = newPhoto;
    if (newPhoto !== user.photoURL && photoType==="data") {

        // Data URL string
        //message = newPhoto;
        ref.putString(message, 'data_url').then(function(snapshot) {
            ref.getDownloadURL().then(function(url) {

                user.updateProfile({
                    photoURL: url
                }).then(function () {
                    // Update successful.
                    document.getElementById("top-photo").src=url;
                }).catch(function (error) {
                    // An error happened.
                    console.log(error);
                    return;
                });

            }).catch(function(error) {
                // Handle any errors
            });




        });
    }

    else if (newPhoto !== user.photoURL && photoType==="url") {


        user.updateProfile({
            photoURL: newPhoto
        }).then(function () {
            // Update successful.
            document.getElementById("top-photo").src=newPhoto;
        }).catch(function (error) {
            // An error happened.
            console.log(error);
            return;
        });


    }
    else if (newPhoto !== user.photoURL && photoType==="defaults") {


        user.updateProfile({
            photoURL: newPhoto
        }).then(function () {
            // Update successful.
            document.getElementById("top-photo").src=newPhoto;
        }).catch(function (error) {
            // An error happened.
            console.log(error);
            return;
        });


    }

    //update name
    if (newName !== user.displayName) {
        user.updateProfile({
            displayName: newName
        }).then(function () {
            // Update successful.
            document.getElementById("top-name").innerText = user.displayName; //update the name up above
            document.getElementById("name-conf").innerText="Your profile was updated."
        }).catch(function (error) {
            // An error happened.
            console.log(error);
            return;
        });
    }

    //update email
    if (newEmail !== user.email) {
        $("#ram").modal("show"); //prompt for password
        document.querySelector("#ram .btn-success").addEventListener("click",(e)=>{ //when the user says they are done

            const credential = firebase.auth.EmailAuthProvider.credential( //get user credentials from modal
                user.email,
                document.querySelector("#ram input").value
            );
            var oldEmail = user.email;
            user.reauthenticateWithCredential(credential).then(function() { //reauthenticate the user
                // User re-authenticated.
                document.querySelector("#ram .text-danger").innerHTML = ""
                document.querySelector("#ram input").value = "";
                $("#ram").modal("hide"); // hide the modal if everything went smoothly
                user.updateEmail(newEmail).then(function () {
                    // Update successful.
                    user.sendEmailVerification().then(function () {
                        // Email sent.
                        document.querySelector("#ram .text-danger").innerHTML = ""
                        document.getElementById("em-conf").innerText = `Great! We've sent you a verification email at ${newEmail} and a recovery email at ${oldEmail}.`
                    }).catch(function (error) {
                        // An error happened while sending verification.

                        console.log(error);
                        return;
                    });

                }).catch(function (error) {
                    // An error happened while updating the email. the email might not be valid..
                    if (error.code==="auth/invalid-email"){
                        document.getElementById("em-err").innerText="That does not look like a valid email."
                        document.getElementById("em-conf").innerText=""
                    }
                    else if (error.code==="auth/email-already-in-use"){
                        document.getElementById("em-err").innerText="There's already an account with that email.";
                        document.getElementById("em-conf").innerText="";
                        document.getElementById("acc-email").value = user.email;
                    }
                    console.log(error);
                    return;
                });

            }).catch(function(error) {
                // An error happened while reauthenticating the user. Likely the password given is incorrect. (the modal is still open)
                document.querySelector("#ram .text-danger").innerHTML = "Incorrect password."
                console.log(error);
                return;
            });

        });

    }
    //update password
    var oldpass = document.getElementById("acc-oldp").value;
    var slot1 = document.getElementById("acc-newp").value;
    var slot2 = document.getElementById("acc-newp2").value;
    if (oldpass != "" || slot2 != "" || slot1 != "") {
        updatePass()
    }
})

function updatePass() {
    // get slot 1, slot 2, old slot.
    var oldpass = document.getElementById("acc-oldp").value;
    var slot1 = document.getElementById("acc-newp").value;
    var slot2 = document.getElementById("acc-newp2").value;



    if (oldpass == ""){
        document.getElementById("pw-err").innerText="You must provide your current password."
        return;
    }


    if (slot1 !== slot2){
        document.getElementById("pw-err").innerText="The two passwords do not match. Try again."
        return;
    }
    //reauthenticate using the old slot value and email value.
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldpass
    );

    user.reauthenticateWithCredential(credential).then(function() {
        // User re-authenticated.

        //update password using value of slot 1.
        user.updatePassword(slot1).then(function() {
            // Update successful.
            document.getElementById("pw-err").innerText="" // clear the error field
            document.getElementById("acc-oldp").value = "";
            document.getElementById("acc-newp").value = "";
            document.getElementById("acc-newp2").value = "";
            document.getElementById("pw-conf").innerText="Success! Your password was changed."
        }).catch(function(error) {
            if (error.code==="auth/weak-password"){
                document.getElementById("pw-err").innerText="Your password must be at least 6 characters."
            }
            console.log(error)
        });



    }).catch(function(error) {
        // An error happened.
        console.log(error)
        document.getElementById("pw-err").innerText="The current password provided is incorrect."
        return;
    });


}

/* code for the drag and drop input*/

var uploadedPhoto;
var photoType;
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
    document.body.addEventListener(eventName, preventDefaults, false)
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}

function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('active')
}

function handleDrop(e) {
    var dt = e.dataTransfer
    var files = dt.files

    handleFiles(files)
}


function handleFiles(files) {
    files = [...files]
    previewFile(files[0]);
    //uploadedPhoto = files[0]
}

function previewFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        document.getElementById('gallim').src = reader.result
    }
    //uploadedPhoto = reader.result;
    console.log(reader.result);
}

// for the paste URL thing
document.querySelector("#fromUrl button").addEventListener("click",(e)=>{
    e.preventDefault();
    previewURL()
})

function previewURL(){
    var url = document.getElementById("imgUrl").value;
    document.querySelector("#fromUrl .img-fluid").src=url;
}



function choosePhoto(){
    if (document.querySelector("#exampleModal .nav-link.active").id==="home-tab") {
        uploadedPhoto = document.querySelector("#exampleModal img:not(.img-fluid)").src; //get the value and store it in a variable
        photoType = "data"
    }
    else if (document.querySelector("#exampleModal .nav-link.active").id==="url-tab") {
        uploadedPhoto = document.querySelector("#exampleModal .img-fluid").src; //get the value and store it in a variable
        photoType = "url"
    }
    else if (document.querySelector("#exampleModal .nav-link.active").id==="defaults-tab") {
        uploadedPhoto = document.querySelector("#exampleModal .img-input-select:checked + label img").src; //get the value and store it in a variable
        photoType = "defaults"
    }
    document.getElementById("acc-photo").src=uploadedPhoto; //preview it in the card
    $("#exampleModal").modal("hide");
    document.querySelector(".modal-backdrop.fade.in").style.display="none";
    $("#idenbut").toggleClass("disabled",false);
}

