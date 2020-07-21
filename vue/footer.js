

Vue.component('footer-nav', {
  props: ['h','o1','p1','t1','o2','p2','t2'],
  template: `<nav class="text-center">
  <h5 class="text-center text-success">{{ h }}</h5>
<ul class="pagination justify-content-center">
  <li class="page-item" :class="o1"><a class="page-link" :href="p1"> &laquo; {{ t1 }}</a></li>
  <li class="page-item active"><a class="page-link">•</a></li>
  <li class="page-item" :class="o2"><a class="page-link" :href="p2">{{ t2 }} &raquo;</a></li>
  
</ul>
   </nav>`
})
var footerV = new Vue({
    el:".footer"
  })