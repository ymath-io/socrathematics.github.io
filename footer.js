function makeFooter(t1, l1, t2, l2, b1=false, b2=false){
    document.createElement("NAV")
    document.getElementById("bod2").appendChild(n);
    n.innerHTML=`
    <nav>
      <ul class="pagination justify-content-center">
        
        <li class="page-item ${b1? "disabled" : ""}"><a class="page-link" href="${l1}">&laquo; ${t1}</a></li>
        <li class="page-item active"><a class="page-link" href="">•</a></li>
        <li class="page-item ${b2? "disabled" : ""}"><a class="page-link" href="${l2}">${t2} &raquo;</a></li>
        
      </ul>
         </nav>
    `;
      console.log("Footer written to DOM.");
    }