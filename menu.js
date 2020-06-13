
if (!document.getElementById("navigation")){document.write(`<div class="container-fluid text-center bg-transparent text-light masthead-sub">
    <h1 class="mastTitle-sub " ><a href="/" style="text-decoration:none;color:white;"><b>SOCRATHEMATICS</b></a></h1>
  <p class="mastTitle-sub-2" ><b>Learn math. Effortlessly.</b></p>

</div>
<nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top" id="navigation" style="overflow: auto;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="/"><img src="https://socrathematics.github.io/favicon.png" height=40 width="40"> <span class="sr-only">(current)</span></a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link pop" href="/modular-arithmetic" id="mod">Modular Arithmetic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pop" href="/trigonometry" id="trig">Trigonometry</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pop" href="/calculus" id="calc">Calculus</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link pop" href="/request-course" id="rc">Request a Course</a>
      </li>
    </ul>
  </div>
</nav>`);
console.log("hi")}

function activate(id){
document.getElementById(id).className += " top active ";}
