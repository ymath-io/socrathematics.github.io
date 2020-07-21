<template>
<nav class="text-center">
    <h5 class="text-center text-success">{{ heading }}</h5>
  <ul class="pagination justify-content-center">
    <li class="page-item {{ optionOne }}"><a class="page-link" href="{{ pathOne }}"> &laquo; {{ titleOne }}</a></li>
    <li class="page-item active"><a class="page-link" href="">•</a></li>
    <li class="page-item {{ optionTwo }}"><a class="page-link" href="{{ pathTwo }}">{{titleTwo}} &raquo;</a></li>
    
  </ul>
     </nav>
</template>

<script>
export default {
    name: 'footer'
}
</script>