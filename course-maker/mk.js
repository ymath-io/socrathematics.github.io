

var titleb = document.getElementById("ctitle");
var t1 = document.getElementById("ct-1");
var t2 = document.getElementById("ct-2");
var t3 = document.getElementById("ct-3");
var t4 = document.getElementById("ct-4");
var q1 = document.getElementById("cq-1");
var q2 = document.getElementById("cq-2");
var q3 = document.getElementById("cq-3");
var navt = document.getElementById("navt");
var navs = document.getElementById("navs");
function make(){
//console.log("Make function was called");
var element = document.createElement('a');
//<html>
var H = document.createElement("HTML");
//<head>
var head = document.createElement("HEAD");
//<title>
var title  = document.createElement("TITLE");
title.innerHTML = titleb.value;
//</title>
head.appendChild(title);

head.innerHTML +={b:`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163408633-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-163408633-2');
</script>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF58PDC');</script>
<!-- End Google Tag Manager -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-title" content="SOCRATHEMATICS">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

  <link rel="icon" href="/favicon.png">
  <link rel="stylesheet" href="/fonts.css">
  <link rel="stylesheet" href="/header.css">
  <link rel="stylesheet" href="/style.css">

    <!--mathjax-->
  <script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};

</script>

  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
`}["b"]; //all the head stuff ;)
//</head>
H.appendChild(head);

var body = document.createElement("BODY");
var therest  = {b:`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF58PDC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script src="/menu.js"></script>
<div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-3" >
      <h3>`}["b"];

therest += navt.value;
therest += {b:`</h3><p>`}["b"];
therest += navs.value;
therest += {b:`</p><nav class="nav nav-pills flex-column" >
        <li class="nav-item">
          <a class="nav-link" href="../">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="../limits">Limits</a>
            <nav class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link ml-3 my-1" href="definition">Definition</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ml-3 my-1 disabled" href="practice">Practice</a>
        </li>
          <li class="nav-item">
          <a class="nav-link ml-3 my-1 disabled" href="applications">Applications</a>
        </li>
      </nav>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="../derivatives">Derivatives</a>
        </li>
          <li class="nav-item">
          <a class="nav-link disabled" href="../integrals">Integrals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Chapter 4 - Coming Soon</a>
        </li>
      </nav>
      <hr class="d-sm-none">
    </div>

    <div class="col-sm-8">
      <div class="container" >
      <h2>`}["b"]; //all the way until h2
therest += titleb.value;
therest += {b:`</h2><p style="white-space: pre-wrap;">`}["b"];//end the title, begin the text: make sure to preserve the enters
therest += t1.value + '\n' + q1.value;
therest += {b:`</p><input type="text" id="txt_1" onkeyup="saveValue(this);" placeholder="Type your answer here" class="form-control form-control-sm">
        <pre></pre>
        <p><a
                class="btn btn-success text-light" id="button1" data-toggle="collapse" href="#sec1" aria-expanded="false" aria-controls="Collapse">Continue
        </a></p>
<div class="collapse" id="sec1"><p>`}["b"]; //beginning the next section!
therest += t2.value + "\n" + q2.value;
therest += {b:`</p><input type="text" id="txt_2" onkeyup="saveValue(this);" placeholder="Type your answer here" class="form-control form-control-sm">
  <pre></pre>
<p><a
                class="btn btn-success text-light" id="button2" data-toggle="collapse" href="#sec2" aria-expanded="false" aria-controls="Collapse">Continue
        </a></p>
</div>
<div class="collapse" id="sec2">
<p>`}["b"];
therest += t3.value + "\n" + q3.value;
therest += {b:`</p>
  <input type="text" id="txt_3" onkeyup="saveValue(this);" placeholder="Type your answer here" class="form-control form-control-sm">
  <pre></pre>
<p><a
                class="btn btn-success text-light" id="button3" data-toggle="collapse" href="#sec3" aria-expanded="false" aria-controls="Collapse">Continue
        </a></p>
</div>

<div class="collapse" id="sec3">

<p>`}["b"];
therest += t4.value + `</p> </div>

    </div>
  </div>
</div>
<script src="keepScroll.js"></script>
</div>
</div>`;
body.innerHTML += therest;
//</body>
H.appendChild(body);
//</html>
var text=H.outerHTML;
var zip = new JSZip();
var fol = zip.folder(titleb.value);
var ht = fol.file("index.html", text,{base64:false});
var ja = fol.file("keepScroll.js", {b:`

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
function keep(){
if (window.location.hash == "#sec1"){
    preserveOpen(1);
}
if (window.location.hash == "#sec2"){
    preserveOpen(2);
}
if (window.location.hash == "#sec3"){
    preserveOpen(3);
}}

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
`}["b"],{base64:false});
/*
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', "index.html");

element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);*/
  zip.generateAsync({type:"base64"}).then(function (base64) {
    location.href="data:application/zip;base64," + base64;
});
}