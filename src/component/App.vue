<style>
  #app{
    width: 100%;
    height: 100%;
    background: red;
  }
</style>

<template>
  <div id="app">
    <h1>Hi SSR</h1>
    <About></About>
  </div>
</template>


<script>
import About from './About.vue';
export default{
  components:{
    About
  }
}
</script>
