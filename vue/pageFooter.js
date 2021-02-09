Vue.component('page-footer', {
    props: ["alt"],
    template: `<div style="position:relative;bottom:0;width:100%;left:0">
<div style="height:7vh"></div>
<footer class="jumbotron  mb-0 py-3 pt-4 footer" style="background-color: var(--grey4)">

<div class="container">
  
<div class="row ">
  <div class="col">
  <p class=""><img height="40px" class="mr-3" src="/faviconGrey.png"/><u><a class="text-dark" href="/faq/copyright-notice">© Copyright 2021 {{ alt==undefined? "Saumya Singhal" : "Sophia Zhu" }} - all rights reserved.</a></u></p> 
</div>
<div class="col text-right">
 <p><a href="https://discord.gg/NPbfRt4wNM" tabindex="1" target="_blank" class="btn btn-link py-0  px-1"><img height="40px"  src="/icons/discordlogo.png"/> </a></p>
</div>
</div>
</div>
</footer>
</div>`});

var pageFoot = new Vue({
    el:".page-footer"
});