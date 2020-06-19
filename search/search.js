function showR(){

var title;
var desc ;
var link ;
var card ;
const cont =  document.getElementById("sres");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('q');
cont.innerHTML += `<h1>Search: ${myParam}</h1>`;
var results = document.querySelectorAll(".gsc-webResult.gsc-result");
var nResults = document.querySelectorAll(".gs-no-results-result");
if (nResults.length == 1){
document.getElementById("spin").style.display="none";
cont.innerHTML += `<p class="mt-2">There are no results for your query.</p>`;
cont.innerHTML += `<a href=#googleStuff class="text-muted">Search results and order determined by <u>Google CSE.</u></a>`;
return null;}
console.log(nResults.length);
results.forEach(function (currentValue){
title = currentValue.querySelector("a.gs-title").innerHTML;
desc = currentValue.querySelector(".gs-bidi-start-align.gs-snippet").innerText;
link = currentValue.querySelector(".gs-bidi-start-align.gs-visibleUrl.gs-visibleUrl-long").innerText;
card = `<div class="card pop my-3 no-def">
<div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}</p>
      <a href="${link}" class="float-right btn btn-lg btn-success stretched-link"  style="min-width:10rem">Visit</a>
  </div>
</div>`;
cont.innerHTML += card;});
cont.innerHTML += `<a href=#googleStuff class="text-muted">Search results and order determined by <u>Google CSE.</u></a>`;
document.getElementById("spin").style.display="none";
}