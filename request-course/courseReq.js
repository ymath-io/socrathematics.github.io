'use strict';

//grab a form
const form = document.querySelector('#CRForm');
//grab an input
const inputCourse = document.querySelector('#inputCourse');
const inputWhy = document.querySelector('#inputWhy');
console.log(form);
console.log("got the components")


//config your firebase push
const config = {
    apiKey: "AIzaSyA6bA3PlHiFGHB1CIWobuBUsEa9IQ7AL3I",
    authDomain: "socrathematics.firebaseapp.com",
    databaseURL: "https://socrathematics.firebaseio.com",
    projectId: "socrathematics",
    storageBucket: "socrathematics.appspot.com",
    messagingSenderId: "809638401187",
    appId: "1:809638401187:web:9608adf73f25ced6d45b16",
    measurementId: "G-2QEQZPCEZR"
};


//create a functions to push
    function firebasePush(course,why) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('courseRequests').push().set(
            {
                Course: course.value,
                What: why.value,
                Progress:0,
                Done:false,
                Rejected:false
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputCourse, inputWhy);
            inputCourse.value = "";
            inputWhy.value = "";
            //shows alert if everything went well.
            document.querySelector("#tyCont").className = "alert alert-success";
            document.querySelector("#tyCont").innerHTML = "<b>Your course request has been submitted!</b> Thank you for your contribution.";
            return null;
        })
    }
