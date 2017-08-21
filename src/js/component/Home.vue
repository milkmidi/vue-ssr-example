<style>
  .home-root{
    background: green;
  }
</style>

<template>
  <div class="home-root">
    <h1>Home</h1>
    <button @click="click">button123456789</button>
    <p v-for="i in list">{{i}}</p>
  </div>
</template>


<script>
/* eslint no-console:off */


export default {
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  components: {
  },
  methods: {
    click() {
      console.log('click');
    },
  },
  created() {
    console.log('Home created');
  },
  mounted() {
    console.log('Home mounted');
  },
  updated() {
    console.log('Home updated');
  },

};
</script>
