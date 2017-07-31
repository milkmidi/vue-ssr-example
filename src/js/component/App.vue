<style>
  #app{
    width: 100%;
    height: 100%;
    background: red;
  }
</style>

<template>
  <div id="app">
    <h1>Hi Vue SSR Example</h1>
    <Navigation></Navigation>
    <router-view class="view"></router-view>
  </div>
</template>


<script>
/* eslint no-console:off */
import Navigation from './Navigation.vue';

export default{
  components: {
    Navigation,
  },
  methods: {
    click() {
    },
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },

};
</script>
