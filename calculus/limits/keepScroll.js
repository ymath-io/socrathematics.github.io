function addComp(level){
    var extension = `/gibgi/calculus/limits/?level=${encodeURIComponent(level)}`;
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

if (document.location == "https://socrathematics.github.io/calculus/limits/#sec1" || document.location == "http://localhost:63342/gibgi/calculus/limits/#sec1"){
    preserveOpen(1);
}
if (document.location == "https://socrathematics.github.io/calculus/limits/#sec2" || document.location == "http://localhost:63342/gibgi/calculus/limits/#sec2"){
    preserveOpen(2);
}
if (document.location == "https://socrathematics.github.io/calculus/limits/#sec3" || document.location == "http://localhost:63342/gibgi/calculus/limits/#sec3"){
    preserveOpen(3);
}

        document.getElementById("txt_1").value = getSavedValue("txt_1");    // set the value to this input
        document.getElementById("txt_2").value = getSavedValue("txt_2");   // set the value to this input
        document.getElementById("txt_3").value = getSavedValue("txt_3");
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

$('#sec3').on('hidden.bs.collapse', function (event) {
        var elem3 = document.getElementById("button3");
        elem3.innerHTML = "Continue";
        $('#sec3').collapse('hide');
        document.location  = "./#sec2";

        })
        $('#sec3').on('show.bs.collapse', function (event) {
        var elem3 = document.getElementById("button3");
        elem3.innerHTML = "Hide";
        document.location  = "./#sec3";
        })
$('#sec2').on('hidden.bs.collapse', function (event) {
        var elem2 = document.getElementById("button2");
        elem2.innerHTML = "Continue";
        document.location  = "./#sec1";

        })
        $('#sec2').on('show.bs.collapse', function (event) {
        var elem2 = document.getElementById("button2");
        elem2.innerHTML = "Hide";
        document.location  = "./#sec2";
        })
$('#sec1').on('hidden.bs.collapse', function (event) {

        var elem1 = document.getElementById("button1");
        elem1.innerHTML = "Continue";
        document.location  = "./";

        })
        $('#sec1').on('show.bs.collapse', function (event) {
        var elem1 = document.getElementById("button1");
        elem1.innerHTML = "Hide";
        document.location  = "./#sec1";
        })
