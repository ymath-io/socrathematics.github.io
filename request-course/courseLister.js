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

//listing the courses
var fdb = firebase.database();
var ref = firebase.database().ref();
var data = "";
ref.on("value", function(snapshot) {
   data = snapshot.val().courseRequests;
   //console.log(data);
   //var rejb;
   var d;
   var loctar;
   document.getElementById("crCards").innerHTML = "";
   document.getElementById("crCardsDone").innerHTML = "";
   document.getElementById("crCardsRej").innerHTML = "";
   document.getElementById("crCardsCons").innerHTML = "";
   
   for (d in data){
   loctar = document.getElementById("crCardsCons");
   if (data[d]["Status"]=="done"){
    loctar = document.getElementById("crCardsDone")}
    if (data[d]["Status"]=="rejected"){
    loctar = document.getElementById("crCardsRej");
    //console.log(data[d]["Course"])
    }
    if (data[d]["Status"]=="inprogress"){
        loctar = document.getElementById("crCards");
        //console.log(data[d]["Course"])
        }

    //console.log(data[d]["Course"]);
    var card = document.createElement("DIV");
    card.className = "card bg-light  no-def mt-2 mb-2";
    var cardbody = document.createElement("DIV");
    cardbody.className = "card-body row";
    var desc = document.createElement("DIV");
    desc.className = "col-8";
    var title = document.createElement("H4");
    title.innerHTML = data[d]["Course"];
    var subtext = document.createElement("P");
    subtext.innerHTML = data[d]["What"];
    subtext.style = "white-space: pre-wrap;";
    var sliderHolder = document.createElement("DIV");
    sliderHolder.className = "col-3";
    var sliderLabel = document.createElement("LABEL");
    sliderLabel.setAttribute("for",d);
    sliderLabel.innerHTML = "Completion";
    var slider = document.createElement("DIV");
    slider.className = "progress";
    slider.id = d;
    var bar = document.createElement("DIV")

    //bar.outerHTML  = `<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>`;
    bar.className = "progress-bar bg-success";
    bar.role = "progressbar";
    bar.setAttribute("aria-valuemin","0");
    bar.setAttribute("aria-valuemax","100");
    bar.setAttribute("aria-valuenow", data[d]["Progress"]);
    bar.setAttribute("style", "width:"+data[d]["Progress"]+"%");
    slider.appendChild(bar);
    sliderHolder.appendChild(sliderLabel);
    sliderHolder.appendChild(slider);
    desc.appendChild(title);
    desc.appendChild(subtext);
    cardbody.appendChild(desc);
    cardbody.appendChild(sliderHolder);
    cardbody.innerHTML += `<div class="col-1">
     <button type="button" id="R`+ d +`" onclick="rejC('`+d+`','`+data[d]['Status']+`')" class="btn btn-light red-btn mt-2"> <img src="/icons/x.svg" class="red-icon"></button> <button type="button" id="P'+d+'" onclick="progC('`+d+`','`+data[d]['Status']+`')" class="btn btn-light blue-btn mt-2 align-top "> \u22EF</button> <button type="button" id="D'+d+'" onclick="donC('`+d+`','`+data[d]['Status']+`')" class="btn btn-light green-btn mt-3"> <img src="/icons/check.svg" class="green-icon"></button> </div>`
    card.appendChild(cardbody);
    loctar.appendChild(card);

    }
    /*
    var id;
    var ids = ["crCards", "crCardsDone","crCardsRej"];
    for (id in ids){
    console.log(ids[id]);
    if (document.getElementById(ids[id]).innerHTML == ""){
    console.log(ids[id]);
    $("#"+ids[id]).style.display = "none";}
    }*/
}, function (error) {
   console.log("Error: " + error.code);
});

function rejC (id,stat) {
        //update["/courseRequests/"+id+"/Rejected"] = true;
        var dbloc = fdb.ref("courseRequests/"+id)
        if (stat !="rejected"){
            dbloc.update({"Status":"rejected"});
            }
            else {
                dbloc.update({"Status":"inconsideration"});
            }
        console.log("I deleted the course request!");
        return null;

    }

function donC (id,stat) {
        //update["/courseRequests/"+id+"/Rejected"] = true;
        var dbloc = fdb.ref("courseRequests/"+id)
        
        if (stat !="done"){
        dbloc.update({"Status":"done"});
        }
        else {
            dbloc.update({"Status":"inconsideration"});
        }
        console.log("I finished the course request!");
        return null;

    }

    function progC (id,stat) {
        //update["/courseRequests/"+id+"/Rejected"] = true;
        var dbloc = fdb.ref("courseRequests/"+id)
        
        if (stat !="inprogress"){
        dbloc.update({"Status":"inprogress"});
        }
        else {
            dbloc.update({"Status":"inconsideration"});
        }
        console.log("I began working on the course request!");
        return null;

    }