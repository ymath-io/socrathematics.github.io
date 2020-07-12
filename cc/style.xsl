<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
        <link rel="stylesheet" href="/header.css"/>
        <link rel="stylesheet" href="/style.css"/>
        <link rel="stylesheet" href="/fonts.css"/>
        <link rel="icon" href="/favicon.png"/>
        
                <!--mathjax-->
                <xsl:element name="script">
                    MathJax = {
                        tex: {
                          inlineMath: [['$', '$'], ['\\(', '\\)']]
                        }
                      };
                </xsl:element>
            
              <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script id="MathJax-script" async="" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    
      </head>
  <body class="">
    <div class="container-fluid text-center bg-transparent text-light masthead-sub">
      <h1 class="mastTitle-sub " ><a href="/" style="text-decoration:none;color:white;"><b>SOCRATHEMATICS</b></a></h1>
    <p class="mastTitle-sub-2" ><b>Math, right at your fingertips</b></p>
    
    </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top " style="opacity:0.9;">
            <a class="navbar-brand pop" href="/"><img class="rounded" width="50" src="/favicon.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <ul class="navbar-nav nav nav-fill">
                    
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle pop text-dark cursor-pointer" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Courses
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
                          <div class="dropdown-header"><a class=" text-dark" href="/exponents">Exponents &amp; Logarithms</a></div>
                          <a class="dropdown-item" href="/exponents/">About</a>
                          <a class="dropdown-item" href="/exponents/exponents-2/">Exponents</a>
                         
                          
                         </div>
                    
                    </div>
                      </div>
                    </li>
                    <li><a class="nav-item nav-link text-dark pop" href="/request-course" >Request a Course</a>
                      </li>
                      <li><a class="nav-item nav-link text-dark pop" href="/cc" >Course Catalog</a></li>
                      <li><a class="nav-item nav-link text-dark pop" href="/faq" >FAQ</a></li>
                </ul>
                
                <ul class="navbar-nav ml-md-auto">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 mx-1" type="search" placeholder="Search" id="sque" aria-label="Search">
                        <button class="btn btn-outline-success my-2 mx-1 my-sm-0" id="sbut" type="button">Search</button>
                    </form>
                    <li class="nav-item nav-link text-dark cursor-pointer" id="su" data-toggle="modal" data-target="#sum" style="display:none">Sign Up</li>
                    <li class="nav-item nav-link text-dark cursor-pointer" id="si" data-toggle="modal" data-target="#sim" style="display:none">Sign In</li>
                    <li class="nav-item dropdown" id="ma"  style="display:none">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item cursor-pointer"  data-toggle="modal" data-target="#mam" >Account Info</a>
                            <a class="dropdown-item cursor-pointer" href="/u/dashboard">Dashboard</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item cursor-pointer"  data-toggle="modal" data-target="#som">Sign out</a>
                        </div>
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
              <span aria-hidden="true">&#215;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="signup-form">
                <div class="form-group">
                    <label class="" for="signup-email">Email Address</label>
                    <input class="form-control" type="email" id="signup-email" required="" />
    
                </div>
                <div class="form-group">
                    <label class="" for="signup-password">Password</label>
                    <input class="form-control" type="password" id="signup-password" required='' />
                    <p class="text-muted form-text" id="sum-e" style=""><br/></p>
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
              <span aria-hidden="true">&#215;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-body">
            <form id="signin-form">
                <div class="form-group">
                    <label class="" for="signin-email">Email Address</label>
                    <input class="form-control" type="email" id="signin-email" required="" />
    
                </div>
                <div class="form-group">
                    <label class="" for="signin-password">Password </label><a class="text-success cursor-pointer float-right">Forgot password?</a>
                    <input class="form-control" type="password" id="signin-password" required="" />
                    <p class="text-muted form-text" id="sim-e" style=""><br/></p>
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
    
        <div class="modal fade" id="som" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="soml" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="soml">Sign Out</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&#215;</span>
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
              <span aria-hidden="true">&#215;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-body">
                <p>You are logged in as <a id="mam-email">(error fetching email)</a>.</p>
                <div class="form-group form-row">
                    <label for="mam-name" class="col-form-label col-sm-2"><b>Name</b></label>
                    <input id="mam-name" class="form-control col-sm-10"/>
    
                </div>
                <h6>Danger Zone</h6>
                <hr/>
                <button class="btn btn-danger" id="madb">Delete my Account</button>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="submit" id="mab" class="btn btn-success">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
    
         <div class="modal fade" id="vm" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="vml" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="vml">Verify your email</h5>
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>-->
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
    <div class="container py-5">
  <h1 class="display-4">Course Catalog</h1><hr/><!-- This is the title printed to the page-->
    <xsl:for-each select="courses/course"> <!-- within the courses tag, for each course-->
    <div>
      <h2><xsl:value-of select="title"/></h2><!-- write the title and description-->
      <p><xsl:value-of select="description"/></p>
      <div class="container row">
        
            <div class="col-9">
      <xsl:for-each select="topics/topic"><!-- for every topic -->
        
          <xsl:if test="link != ''">
            <div class="card pop my-3 no-def ml-5">
              <div class="card-body">
                  <h3 class="card-title"><xsl:value-of select="title"/><p class="float-right card-title"><xsl:value-of select="difficulty"></xsl:value-of></p></h3>
                  <p class="card-text"><xsl:value-of select="description"/></p>
                  <ul class="list-group list-group-flush">
                      <xsl:for-each select="subtopics/subtopic"><!-- for every subtopic within that topic-->
                      <li class="list-group-item pop">
                          <xsl:element name="a" >
                      <xsl:attribute name="href">
                          <xsl:value-of select="link"/>
                          
                      </xsl:attribute>
                      <xsl:attribute name="class"> <!-- we need to decide if the link even exists -->
                        <xsl:choose>
                          <xsl:when test="link = ''">
                            btn disabled py-0 px-0 mx-0 my-0 <!-- apparently, you cannot disable a link. Made a button and removed button-like style.-->
                          </xsl:when>
                          <xsl:otherwise>
                            link
                          </xsl:otherwise>
                        </xsl:choose><!-- stop the choosing -->
                          
                      </xsl:attribute><!-- close the class attribute -->
                      <xsl:value-of select="title"/><!-- the link should be written as the course name -->
                  </xsl:element>
                  </li>
                  </xsl:for-each><!-- stop looping through subtopics -->
                    </ul>
                  <xsl:element name="a" >
                      <xsl:attribute name="href">
                          <xsl:value-of select="link"/>
                          
                      </xsl:attribute>
                      <xsl:attribute name="class">
                          float-right btn btn-lg btn-success text-white
                          
                      </xsl:attribute>
                      Begin
                  </xsl:element>
                </div>
              </div>
            </xsl:if>
    
    </xsl:for-each><!-- stop looping through topics -->
    </div>
    <div class="col-3">
      <h4>Prerequisites</h4>
      <xsl:choose>
        <xsl:when test="not(prerequisites)">
              None
            </xsl:when>
      <xsl:otherwise>
            <ul class="">
              <xsl:for-each select="prerequisites/prerequisite"><!--  can you figure out what this does? -->
                <li class="py-3">
                  <xsl:element name="a" >
                    <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                        
                    </xsl:attribute>
                    <xsl:attribute name="class">
                        <xsl:choose>
                      <xsl:when test="link != ''">
                        link
                      </xsl:when>
                      <xsl:otherwise>
                        btn disabled py-0 px-0 mx-0 my-0 <!-- apparently, you cannot disable a link. Made a button and removed button-like style.-->
                      </xsl:otherwise>
                    </xsl:choose><!-- stop the choosing -->
                        
                    </xsl:attribute>
                    <xsl:value-of select="name"/>
                </xsl:element></li>
              </xsl:for-each>
            </ul>
          </xsl:otherwise>
            
            </xsl:choose>
            </div>
    </div></div>
    </xsl:for-each><!-- stop looping through courses -->
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
  <script>
    
    <xsl:text disable-output-escaping="yes">
    $("#navbarNavAltMarkup").on('show.bs.collapse', function () {
    if (window.scrollY &lt; 170){
    window.scrollTo(0,170);}
  })
  
  $(function() {
    $('a.down').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
</xsl:text>
  </script>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
  
  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  
  <script  src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>
  <script  src="https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js"></script>
  <script  src="https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js"></script>
  <script  src="https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js"></script>
  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyA6bA3PlHiFGHB1CIWobuBUsEa9IQ7AL3I",
      authDomain: "socrathematics.firebaseapp.com",
      databaseURL: "https://socrathematics.firebaseio.com",
      projectId: "socrathematics",
      appId: "1:809638401187:web:9608adf73f25ced6d45b16",
      measurementId: "G-2QEQZPCEZR"
  
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
    const auth=firebase.auth();
    const db = firebase.firestore();
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();
  
  </script>
  <script type="text/javascript" src="/auth/auth.js"></script>
  <script type="text/javascript">
      document.querySelector("#sque").addEventListener("search", (e) => {
  e.preventDefault();
  var query = document.getElementById("sque");
  
  
  const params = new URLSearchParams(location.search);
  params.set('q', query.value);
  
  console.log(params.toString());
  document.location  =  "/search/?" + params.toString();
  
  
  });
  
  document.querySelector("#sbut").addEventListener("click", (e) => {
  e.preventDefault();
  var query = document.getElementById("sque");
  
  
  const params = new URLSearchParams(location.search);
  params.set('q', query.value);
  
  console.log(params.toString());
  document.location  =  "/search/?" + params.toString();
  
  
  });
  </script>
  </html>
</xsl:template>


</xsl:stylesheet> 
