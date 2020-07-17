function makeFooter(t1, l1, t2, l2){
document.write(`
<nav>
  <ul class="pagination justify-content-center">
    
    <li class="page-item"><a class="page-link" href="${l1}">&laquo; ${t1}</a></li>
    <li class="page-item active"><a class="page-link" href="">•</a></li>
    <li class="page-item disabled"><a class="page-link" href="${l2}">${t2} &raquo;</a></li>
    
  </ul>
     </nav>
`)
}
