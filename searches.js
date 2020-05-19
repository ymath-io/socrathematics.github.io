function search(){
    event.preventDefault();
    var inp = document.getElementById("search-input").value;
    console.log(inp);
    var extension = `?search=${encodeURIComponent(inp)}`;
    window.location = "/gibgi/search.html"+extension;
    }

function evalSearch(){
    const queryString = window.location.search;
    console.log(queryString);
    const searchString = new URLSearchParams(queryString).get("search");
    console.log(searchString);
    var container = document.getElementById("yay");
    container.innerHTML = searchString;

}