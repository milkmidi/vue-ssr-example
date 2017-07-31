<style>
  .home-root{
    background: green;
  }
</style>

<template>
  <div class="home-root">
    <h1>Home</h1>
    <button @click="click">button</button>
  </div>
</template>


<script>
/* eslint no-console:off */


export default{
  components: {
  },
  methods: {
    click() {
      console.log('click');
    },
  },
  created() {
  },
  mounted() {
  },
  updated() {
  },

};
</script>
