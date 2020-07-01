var root = document.querySelector("#root");
var info = [{type:"none"}];
var uinfo = [];
var lastFocused={id:"e0"};
var pnum=0
function addEquation(){
    n = document.createElement("SPAN");
    if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.outerHTML = `<span id='e${info.length}' class='form-control-sm answerb bg-white pt-2 ' onclick='lastFocused=this;'></span>`;
    document.getElementById("e"+info.length).click();
    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length), {
    handlers: {}});
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

function addEquation2(id){
    n = document.createElement("SPAN");
    var l;
    document.getElementById(id).appendChild(n);
    console.log(id);
    if (id.slice(0,2)=="h1"){
    l = info[id[2]].h1field.info.length;
    n.outerHTML = `<span id='e${info.length}h1${l}' class='form-control-sm answerb bg-white pt-2 '></span>`;
    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length+"h1"+l), {
    handlers: {}});
    info[id[2]].h1field.info.push({type:"mq",
    id: "e"+info.length+"h1"+l,
    elem: document.querySelector("#e"+info.length+"h1"+l),
    mathfield: answerMathField
    });}
    if (id.slice(0,2)=="h2"){
    l = info[id[2]].h2field.info.length;
    n.outerHTML = `<span id='e${info.length}h2${l}' class='form-control-sm answerb bg-white pt-2 '></span>`;
    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length+"h2"+l), {
    handlers: {}});
    info[id[2]].h2field.info.push({type:"mq",
    id: "e"+info.length+"h2"+l,
    elem: document.querySelector("#e"+info.length+"h2"+l),
    mathfield: answerMathField
    });}
    if (id[0]=="s"){
    l = info[id[1]].sfield.info.length;
    n.outerHTML = `<span id='e${info.length}s${l}' class='form-control-sm answerb bg-white pt-2 '></span>`;
    var answerMathField = MQ.MathField(document.querySelector("#e"+info.length+"s"+l), {
    handlers: {}});
    info[id[1]].sfield.info.push({type:"mq",
    id: "e"+info.length+"s"+l,
    elem: document.querySelector("#e"+info.length+"s"+l),
    mathfield: answerMathField
    });}





};

function addDisplayEquation2(id){
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


};

function addText2(id){
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

function addProblem(){
pnum+=1;
n = document.createElement("LI");
if(!!document.getElementById(lastFocused.id)){
    $(n).insertAfter("#"+lastFocused.id);}
    else{$(n).insertAfter("#"+(lastFocused.id-1));}
    n.className = "card-body card no-def my-3 pop";
    n.innerHTML = `<p><span id='q${info.length}' class='form-control-sm answerb' ></span><div id="h1${info.length}"><div class="btn-group mb-5" role="group"><button type="button"  class="btn btn-secondary" onclick="addEquation2('h1${info.length}');">Math</button>
              <button type="button"  class="btn btn-secondary" onclick="addDisplayEquation2('h1${info.length}');">Display Math</button>
  <button type="button" id="txt" class="btn btn-secondary" onclick="addText2('h1${info.length}');">Text</button>
  </div></div><div id="h2${info.length}"><div class="btn-group mb-5" role="group">
  <button type="button" class="btn btn-secondary" onclick="addEquation2('h2${info.length}');">Math</button>
              <button type="button"  class="btn btn-secondary" onclick="addDisplayEquation2('h2${info.length}');">Display Math</button>
  <button type="button"  class="btn btn-secondary" onclick="addText2('h2${info.length}');">Text</button></div></div><div id="s${info.length}"><div class="btn-group mb-5" role="group"><button type="button"  class="btn btn-secondary" onclick="addEquation2('s${info.length}');">Math</button>
              <button type="button"  class="btn btn-secondary" onclick="addDisplayEquation2('s${info.length}');">Display Math</button>

  <button type="button" id="txt" class="btn btn-secondary" onclick="addText2('s${info.length}');">Text</button>
  <button type="button" id="lb" class="btn btn-secondary" onclick="addBreak2('s${info.length}');">Line break</button></div></div></p>`
    n.id = "e"+info.length;
    n.onclick='lastFocused=this;'
    var answerMathField = MQ.MathField(document.querySelector("#q"+info.length), {
    handlers: {}});
    l = info.length;
    info.push({type:"problem",
    id: "e"+l,
    elem: document.querySelector("#e"+l),
    qfield:answerMathField,
    pnum:pnum,
    h1field:{info:[]},
    h2field:{info:[]},
    sfield:{info:[]}

    });
//have a form to fill out, can put mathquills in for answers, hint space (2) and solution space.
}

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

function makeCourse(data){
var final = "<h1>"+document.querySelector("#ctitle").value+"</h1><p>";
for (num in data){
obj = data[num];
if (obj.type == "text"){
    e = document.createElement("p");
    e.innerHTML = document.querySelector("#"+obj.id).innerHTML;
    final += e.innerHTML

}
if (obj.type == "mq"){
e = document.createElement("p");
    e.innerHTML = " $"+obj.mathfield.latex()+"$ ";
    final += e.innerHTML;

}
if (obj.type == "dmq"){
e = document.createElement("p");
    e.innerHTML = " $$"+obj.mathfield.latex()+"$$ ";
    final += e.innerHTML;

}
if (obj.type =="break"){
e = document.createElement("BR");
//final+=e.outerHTML;
final += "</p><p>"
}
if (obj.type =="problem"){
//console.log(obj.qfield);
console.log(obj.h2field);
var soltext = make(obj.sfield.info);
final += `</p><li class="card card-body no-def my-3 pop">

    <p>$\\displaystyle{ ${obj.qfield.latex()} }$ <span id="answer${obj.pnum}" class="form-control-sm answerb"></span><svg id="tu${obj.pnum}" class="bi bi-hand-thumbs-up" width="2em" height="2em" style="display:none" viewBox="0 0 16 16" fill="var(--success)" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd"
        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg></p>
            <!--Hints--><details><summary class="btn btn-outline-success btn-sm mt-2">Hint</summary> ${make(obj.h1field.info)}</details>
            <details><summary class="btn btn-outline-success btn-sm mt-2">Hint</summary> ${make(obj.h2field.info)}</details>
            <!--Solution--><details><summary class="btn btn-sm btn-outline-success mt-2">Show/Hide Solution</summary>
                ${soltext}
        </details>
        </li><p>`
}
}
final += "</p>"
document.querySelector("#out").innerHTML = final;
MathJax.typeset();
document.querySelector("#out2").innerHTML = final;

}

function make(data){
var final = "<p>";
for (num in data){
obj = data[num];
if (obj.type == "text"){
    e = document.createElement("p");
    e.innerHTML = document.querySelector("#"+obj.id).innerHTML;
    final += e.innerHTML

}
if (obj.type == "mq"){
e = document.createElement("p");
    e.innerHTML = " $"+obj.mathfield.latex()+"$ ";
    final += e.innerHTML;

}
if (obj.type == "dmq"){
e = document.createElement("p");
    e.innerHTML = " $$"+obj.mathfield.latex()+"$$ ";
    final += e.innerHTML;

}
if (obj.type =="break"){
e = document.createElement("BR");
//final+=e.outerHTML;
final += "</p><p>"
}
}
final += "</p>"
return final;

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