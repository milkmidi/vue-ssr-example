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
/* eslint no-console:off */
import About from './About.vue';

export default{
  components: {
    About,
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('About updated');
  },

};
</script>
