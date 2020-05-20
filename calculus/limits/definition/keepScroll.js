function addComp(level){
    var extension = `/gibgi/calculus/limits/definition/?level=${encodeURIComponent(level)}`;
    window.location = extension;
    console.log(level)
    }

function preserveOpen(level){
    if (level>=1){
        /*c1 = document.getElementById("sec1");
        c1.className = "collapse show";
        b1 = document.getElementById("button1");
        b1.setAttribute("aria-expanded","true");
        b1.innerHTML = "Hide";*/
        $('#sec1').collapse('show');}
    if (level>=2){
        /*c2 = document.getElementById("sec2");
        c2.className = "collapse show";
        b2 = document.getElementById("button2");
        b2.setAttribute("aria-expanded","true");
        b2.innerHTML = "Hide";*/
        $('#sec2').collapse('show');}
    if (level>=3){
        //c3 = document.getElementById("sec3");
        $('#sec3').collapse('show');
        /*c3.className = "collapse show";
        b3 = document.getElementById("button3");
        b3.setAttribute("aria-expanded","true");
        b3.innerHTML = "Hide";*/}
    }
/*
if (document.location == "https://socrathematics.github.io/calculus/limits/definition/#sec1"){
    preserveOpen(1);
}
if (document.location == "https://socrathematics.github.io/calculus/limits/definition/#sec2"){
    preserveOpen(2);
}
if (document.location == "https://socrathematics.github.io/calculus/limits/definition/#sec3"){
    preserveOpen(3);
}*/

if (document.location == "http://localhost:63342/gibgi/calculus/limits/definition/#sec1"){
    preserveOpen(1);
}
if (document.location == "http://localhost:63342/gibgi/calculus/limits/definition/#sec2"){
    preserveOpen(2);
}
if (document.location == "http://localhost:63342/gibgi/calculus/limits/definition/#sec3"){
    preserveOpen(3);
}




        document.getElementById("lim_def_1").value = getSavedValue("lim_def_1");    // set the value to this input
        document.getElementById("lim_def_2").value = getSavedValue("lim_def_2");   // set the value to this input
        document.getElementById("lim_def_3").value = getSavedValue("lim_def_3");
        /* Here you can add more inputs to set value. if it's saved */

        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it .
            var val = e.value; // get the value.
            localStorage.setItem(id, val);// Every time the user is writing something, the localStorage's value will override .
        }

        //get the saved value function - return the value of "v" from localStorage.
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";// You can change this to your default value.
            }
            return localStorage.getItem(v);
        }