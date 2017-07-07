<template>
<div class="about-root">
  <h2>About</h2>
  <li v-for="(key,index) in items" v-bind:key="index">
    {{ index }}
  </li>
</div>
</template>

<script>
export default {
  data(){
    return {
      items:[1,2,3,4,5]
    }
  }
}
</script>