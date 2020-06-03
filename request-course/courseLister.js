'use strict';

//grab a form


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


var ref = firebase.database().ref();
var data = "";
ref.on("value", function(snapshot) {
   data = snapshot.val().courseRequests;
   console.log(data);
   document.getElementById("crCards").innerHTML = "";
   var d;
   for (d in data){
    console.log(data[d]["Course"]);

    var card = document.createElement("DIV");
    card.className = "card bg-light  no-def mt-2";
    var cardbody = document.createElement("DIV");
    cardbody.className = "card-body row";
    var desc = document.createElement("DIV");
    desc.className = "col-8";
    var title = document.createElement("H4");
    title.innerHTML = data[d]["Course"];
    var subtext = document.createElement("P");
    subtext.innerHTML = data[d]["What"];
    var sliderHolder = document.createElement("DIV");
    sliderHolder.className = "col-3";
    var sliderLabel = document.createElement("LABEL");
    sliderLabel.setAttribute("for",d);
    sliderLabel.innerHTML = "Completion";
    var slider = document.createElement("INPUT");
    slider.type = "range";
    slider.id = d;
    slider.step = "10";
    slider.setAttribute("value", data[d]["Progress"]);
    console.log(data[d]["Progress"]);
    slider.className = "form-control-range";
    sliderHolder.appendChild(sliderLabel);
    sliderHolder.appendChild(slider);
    desc.appendChild(title);
    desc.appendChild(subtext);
    cardbody.appendChild(desc);
    cardbody.appendChild(sliderHolder);
    cardbody.innerHTML += '<div class="col-1"> <button type="button" class="btn btn-light red-btn mt-2"> <img src="../icons/x.svg" class="red-icon"></button> <button type="button" class="btn btn-light mt-3"> <img src="../icons/check.svg" class="green-icon"></button> </div>'
    card.appendChild(cardbody);
    document.getElementById("crCards").appendChild(card);
    console.log(card)

    document.getElementById(d).oninput = function() {
        var val = document.getElementById(d).getAttribute("value"); //gets the oninput value
        //document.getElementById('output').innerHTML = val //displays this value to the html page
        console.log(val)
        };
    document.getElementById(d).addEventListener('change',function() {
  this.setAttribute('value',this.value);
});
    }
}, function (error) {
   console.log("Error: " + error.code);
});

