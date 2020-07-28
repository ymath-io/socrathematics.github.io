<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html style="scroll-behavior: smooth;">
      <head>
        <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-163408633-2');
</script>
        <meta charset="UTF-8"/>
        <title>Course Catalog - SOCRATHEMATICS</title>
        <meta name="description" content="Self-paced high school math material, explained to be understood."/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
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
      <script src="/menu.js"></script>

    <div class="container py-5">
  <h1 class="display-4">Course Catalog</h1><hr/><!-- This is the title printed to the page-->
  <div class="card no-def py-3 px-3 my-3">
    <h5>Jump To</h5>
    <xsl:for-each select="courses/course">
    <a class="link cursor-pointer text-success" href="#{title}"><xsl:value-of select="title"/></a>
  </xsl:for-each>
  </div><hr/>
    <xsl:for-each select="courses/course"> <!-- within the courses tag, for each course-->
    <span id="{title}" class="pb-5 mb-5"></span>
    <div class="pt-5 mt-5">
      <h2><a href="{link}" class="text-dark"><xsl:value-of select="title"/></a></h2><!-- write the title and description-->
      <p><xsl:value-of select="description"/></p>
      <div class="container row" >
        
            <div class="col-9">
      <xsl:for-each select="topics/topic"><!-- for every topic -->
        
          <xsl:if test="link != ''">
            <div class="card pop my-3 no-def ml-5">
              <div class="card-body">
                  <h3 class="card-title"><a href="{link}" class="text-dark"><xsl:value-of select="title"/></a><p class="float-right card-title"><xsl:value-of select="difficulty"></xsl:value-of></p></h3>
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
                          float-right btn btn-lg btn-success text-light
                          
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
