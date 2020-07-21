var sdata;
function showR(sdata){
var title;
var desc ;
var link ;
var card ;
const cont =  document.getElementById("sres");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('q');
cont.innerHTML += `<h1>Search: ${myParam}</h1>`;
var results = sdata.items
var nResults = sdata.searchInformation.totalResults;
if (nResults==0){
document.getElementById("spin").style.display="none";
cont.innerHTML += `<p class="mt-2">There are no results for your query.</p>`;
return null;}
console.log(nResults.length);
results.forEach(function (currentValue){
title = currentValue.htmlTitle;
desc = currentValue.snippet;
link = currentValue.formattedUrl;
card = `<div class="card pop my-3 no-def">
<div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}</p>
      <a href="${link}" class="float-right btn btn-lg text-light btn-success stretched-link"  style="min-width:10rem">Visit</a>
  </div>
</div>`;
cont.innerHTML += card;});
document.getElementById("spin").style.display="none";
}

function getData(){
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('q');
fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA6bA3PlHiFGHB1CIWobuBUsEa9IQ7AL3I&cx=016043130169791063080:mbkue25xulm&q=${myParam}`)
.then(response => {return response.json()})
.then(data => {console.log(data);showR(data)})
return sdata;
}
