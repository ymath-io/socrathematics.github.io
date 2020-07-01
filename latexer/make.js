var root = document.querySelector("#root");
var info = [{type:"none"}];
var uinfo = [];
var lastFocused={id:"e0"};
var pnum=0;
/*
elementToObserve = window.document.getElementById('out');

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
observer = new MutationObserver(function(mutationsList, observer) {
    makeCourse();
});

// call `observe` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});

*/


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function addEquation(){
    n = document.createElement("SPAN");
    if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML = `<span id='e${info.length}' class='form-control-sm answerb bg-white pt-2 ' onclick='lastFocused=this;'></span>`;

    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length), {
    handlers: {}});document.getElementById("e"+info.length).click();
    console.log("hi");
    l = info.length;
    info.push({type:"mq",
    id: "e"+info.length,
    elem: document.querySelector("#e"+info.length),
    mathfield: answerMathField
    });
    uinfo.push({type:"mq",
    id: "e"+l,
    elem: document.querySelector("#e"+l),
    mathfield: answerMathField
    });
answerMathField.focus();
};

function addDisplayEquation(){
    holder = document.createElement("DIV");
    holder.className = "text-center";
    holder.id = "h"+info.length;
    n = document.createElement("SPAN");
    holder.appendChild(n);
    if(!!document.getElementById(lastFocused.id)){
    $(holder).insertAfter("#"+lastFocused.id);}
    else{$(holder).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML = `<span id="e${info.length}" class="form-control-sm answerb bg-white pt-2 " onclick="lastFocused = document.querySelector('#e${info.length}').parentElement;"></span>`;
    document.getElementById("e"+info.length).click();
    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length), {
    handlers: {}});
    l = info.length;
    info.push({type:"dmq",
    id: "e"+info.length,
    elem: document.querySelector("#e"+info.length),
    mathfield: answerMathField
    });
    uinfo.push({type:"dmq",
    id: "e"+l,
    elem: document.querySelector("#e"+l),
    mathfield: answerMathField
    });

answerMathField.focus();
};

function addText(){
    n = document.createElement("span");
    if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML = '<span contenteditable="true" id="e'+info.length+'" class="form-control-sm answerb my-2 input-sm bg-white" style="font-size:14pt" onfocus="lastFocused=this;"></span>';
document.getElementById("e"+info.length).focus();
l = info.length;
    info.push({type:"text",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });
    uinfo.push({type:"text",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });

};

function addBreak(){
    n = document.createElement("hr");
    if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML='<hr id="e'+info.length+'" onclick="lastFocused=this;">';
    document.getElementById("e"+info.length).click();
    l = info.length;
    info.push({type:"break",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });
    uinfo.push({type:"break",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });

};

function addItem(){
    n = document.createElement("li");
    if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML = '<li ><span contenteditable="true" id="e'+info.length+'" class="form-control-sm answerb my-2 input-sm bg-white" style="font-size:14pt" onfocus="lastFocused=this;"></span></li>';
document.getElementById("e"+info.length).focus();
l = info.length;
    info.push({type:"item",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });
    uinfo.push({type:"item",
    id: "e"+l,
    elem: document.querySelector("#e"+l)

    });

};

function makeCourse(data){
var final = "<p>";
var lat = "";
for (num in data){
obj = data[num];
if (obj.type == "text"){
    e = document.createElement("p");
    e.innerHTML = document.querySelector("#"+obj.id).innerHTML;
    final += e.innerHTML;
    lat += e.innerHTML

}

if (obj.type == "item"){
    e = document.createElement("li");
    e.innerHTML = document.querySelector("#"+obj.id).innerHTML;
    final += e.outerHTML;
    if (e.innerHTML.slice(-4)=="<br>"){n = e.innerHTML.slice(0,-4)}else{n=e.innerHTML}
    lat += "\\item " + n;

}
if (obj.type == "mq"){
e = document.createElement("p");
    e.innerHTML = " $"+obj.mathfield.latex()+"$ ";
    final += e.innerHTML;
    lat += e.innerHTML

}
if (obj.type == "dmq"){
e = document.createElement("p");
    e.innerHTML = " $$"+obj.mathfield.latex()+"$$ ";
    final += e.innerHTML;
    lat += e.innerHTML
}
if (obj.type =="break"){
e = document.createElement("BR");
//final+=e.outerHTML;
final += "</p><p>";
lat += "~\\\\"
}
}
final += "</p>"
document.querySelector("#out").innerHTML = final;
MathJax.typeset();
document.querySelector("#out2").innerHTML = decodeHtml(lat);

}



function deleteElement(){
var index = document.querySelector("#indexer").value;
ob = uinfo[index];
console.log(ob.elem);
e = ob.elem;
e.remove();
num = ob.id[1];
info[num] = {type:"none"};
uinfo.pop(index)
}