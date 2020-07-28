
if (!document.getElementById("navigation")){document.write(`<div class="container-fluid text-center bg-transparent text-light masthead-sub">
    <h1 class="mastTitle-sub " ><a href="/" style="text-decoration:none;color:white;"><b>SOCRATHEMATICS</b></a></h1>
  <p class="mastTitle-sub-2" ><b>Math, right at your fingertips</b></p>

</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top " style="opacity:0.9;">
            <a class="navbar-brand" href="/"><img class="rounded" width="50" src="/favicon.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <ul class="navbar-nav nav nav-fill">
                    
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle pop text-dark cursor-pointer" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Courses
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="max-height:90vh;overflow:scroll">
                        <div class="d-md-flex align-items-start justify-content-start">
                        <div>   
                          <div class="dropdown-header"><a class=" text-dark" href="/modular-arithmetic">Modular Arithmetic</a></div>
                          <a class="dropdown-item" href="/modular-arithmetic/">About</a>
                          <a class="dropdown-item" href="/modular-arithmetic/introduction">Introduction</a>
                         </div>
                         <div>   
                          <div class="dropdown-header"><a class=" text-dark" href="/trigonometry">Trigonometry</a></div>
                          <a class="dropdown-item" href="/trigonometry/">About</a>
                          <a class="dropdown-item" href="/trigonometry/functions/">Functions</a>
                          <a class="dropdown-item" href="/trigonometry/identities/">Identities</a>
                          <a class="dropdown-item" href="/trigonometry/law-of-sines/">Law of Sines</a>
                          <a class="dropdown-item" href="/trigonometry/law-of-cosines/">Law of Cosines</a>
                          <a class="dropdown-item" href="/trigonometry/Tilting-A-Parabola.pdf">Rotating a Parabola</a>
                         </div>
                         <div>   
                          <div class="dropdown-header"><a class=" text-dark" href="/calculus">Calculus</a></div>
                          <a class="dropdown-item" href="/calculus/">About</a>
                          <a class="dropdown-item" href="/calculus/limits/">Limits</a>
                          <a class="dropdown-item" href="/calculus/derivatives/">Derivatives</a>
                          <a class="dropdown-item" href="/calculus/integrals/">Integrals</a>
                          
                         </div>
                         <div>   
                          <div class="dropdown-header"><a class=" text-dark" href="/exponents-and-more">Exponents &amp; More</a></div>
                          <a class="dropdown-item" href="/exponents-and-more/">About</a>
                          <a class="dropdown-item" href="/exponents-and-more/exponents/">Exponents</a>
                         
                          
                         </div>
                    
                    </div>
                      </div>
                    </li>
                    <li><a class="nav-item nav-link text-dark pop" href="/request-course" >Request a Course</a>
                      </li>
                      <li><a class="nav-item nav-link text-dark pop" href="/cc" >Course Catalog</a></li>
                      <li><a class="nav-item nav-link text-dark pop" href="/faq" >FAQ</a></li>
                </ul>
                
                <ul class="navbar-nav ml-md-auto text-center">
                    <form class="form-inline my-2 my-lg-0 text-center justify-content-center">
                        <input class="form-control mr-sm-2 mx-1" type="search"  placeholder="Search"  id="sque" aria-label="Search" >
                        <button class="btn btn-outline-main my-2 mx-1 my-sm-0" id="sbut" type="button">Search</button>
                    </form>
                    <li class="nav-item nav-link text-dark poop cursor-pointer" id="su" data-toggle="modal" data-target="#sum" style="display:none">Sign Up</li>
                    <li class="nav-item nav-link text-dark pop cursor-pointer" id="si" data-toggle="modal" data-target="#sim" style="display:none">Sign In</li>

                    <li class="nav-item dropdown" id="ma"  style="display:none">
                        <a class="nav-link pop dropdown-toggle text-dark"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="http://placehold.it/40x40" id="top-photo" height="40px" width="40px" class="rounded-circle"> <span id="top-name">My Account</span></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item cursor-pointer"   href="/u/my-account" >Account Info</a>
                            <a class="dropdown-item cursor-pointer" href="/u/dashboard">Dashboard</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item cursor-pointer"  data-toggle="modal" data-target="#som">Sign out</a>

                        </div>
                    </li>
                    <li class="mt-1 mb-0 pop" style="height:40px"><img src="/icons/eclipse-light.png" height="40px" id="themer" class="btn" onclick="toggleTheme(this)">
                    <script>

                      b = document.querySelector('body');

                      if ( localStorage.getItem("theme")=="light" ){
                        b.setAttribute('data-theme','light'); 
                        document.getElementById("themer").src='/icons/eclipse-dark.png';
                        localStorage.setItem('theme', 'light');}
                        else if (localStorage.getItem("theme")=="dark"){
                        b.setAttribute('data-theme','dark'); 
                        document.getElementById("themer").src='/icons/eclipse-light.png';
                        localStorage.setItem('theme', 'dark');}

                      function toggleTheme(el){
                        
                        if ( b.getAttribute('data-theme')=="dark" ){
                        b.setAttribute('data-theme','light'); 
                        el.src='/icons/eclipse-dark.png';
                        localStorage.setItem('theme', 'light');}
                        else {
                        b.setAttribute('data-theme','dark'); 
                        el.src='/icons/eclipse-light.png';
                        localStorage.setItem('theme', 'dark');}
                      }
                    </script>
                    </li>
                </ul>
            </div>
        </nav>

    <div class="modal fade" id="sum" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="suml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="suml">Get your very own account!</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form id="signup-form" >
        <div class="form-group">
            <label class="" for="signup-email">Email Address</label>
            <input class="form-control" type="email" id="signup-email" required />

        </div>
        <div class="form-group">
            <label class="" for="signup-password">Password</label>
            <input class="form-control" type="password" id="signup-password" required />
            
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox">
            <input class="custom-control-input " type="checkbox"  id="ppagree" required>
            <label class="custom-control-label" for="ppagree">
              By signing up, you agree that you know what you're getting into, because you read the <a href="/faq" class="link"><u>FAQ</u></a> and you don't hold the owner of this website liable for anything that happens to you.
            </label>
          </div>
          <p class="text-muted form-text" id="sum-e"><br></p>
        </div>
    </form>
  </div>

  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
    <button type="submit" id="sub" class="btn btn-success" >Sign Up</button>
  </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="sim" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="siml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="siml">Sign in to your account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
        <form id="signin-form">
            <div class="form-group">
                <label class="" for="signin-email">Email Address</label>
                <input class="form-control" type="email" id="signin-email" required />

            </div>
            <div class="form-group">
                <label class="" for="signin-password">Password</label><a class="text-success float-right" href="/auth/forgot-password/">Forgot password?</a>
                <input class="form-control" type="password" id="signin-password" required />
                <p class="text-muted form-text" id="sim-e" style=""><br></p>
            </div>
        </form>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="sib">Sign In</button>
      </div>
    </div>
  </div>
</div>


     <div class="modal fade" id="vm" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="vml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="vml">Verify your email</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <p> It looks like you're using an unverified email. If you want to continue using this email, please verify your email.</p>
          <p>If you would like to activate your account at a later time, you can sign out and continue using SOCRATHEMATICS.</p>
      </div>
      <div class="modal-footer">
        <button type="button" id="vdb"  class="btn btn-danger">Delete my account</button>
        <button type="button" id="vsob" class="btn btn-secondary" >Sign Out</button>
          <button type="button" id="vrb" class="btn btn-success" >Reload</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="som" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="soml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="soml">Sign Out</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
        <p>Are you sure you want to sign out? Any progress won't be saved unless you log back in.</p>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="sob" class="btn btn-success">Sign Out</button>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="mam" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="maml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="maml">My Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
            <p>You are logged in as <a id="mam-email">(error fetching email)</a>.</p>
            <div class="form-group form-row">
                <label for="mam-name" class="col-form-label col-sm-2">Name</label>
                <input id="mam-name" class="form-control col-sm-10">
            </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="mab" class="btn btn-success">Save Changes</button>
      </div>
    </div>
  </div>
</div>
`);
console.log("Menu and header successfully written to DOM.")}

function activate(id){
//document.getElementById(id).className += " top active ";
}

document.querySelector("#sbut").addEventListener("click", (e) => {
e.preventDefault();
var query = document.getElementById("sque");


const params = new URLSearchParams(location.search);
params.set('q', query.value);

console.log(params.toString());
document.location  =  "/search/?" + params.toString();


});

document.querySelector("#sque").addEventListener("search", (e) => {
e.preventDefault();
var query = document.getElementById("sque");


const params = new URLSearchParams(location.search);
params.set('q', query.value);

console.log(params.toString());
document.location  =  "/search/?" + params.toString();


});

function searchit(){

var query = document.getElementById("sque");


const params = new URLSearchParams(location.search);
params.set('q', query.value);

console.log(params.toString());
document.location  =  "/search/?" + params.toString();
}
