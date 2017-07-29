<style>
.abour-root{
  background-color: black;
}
</style>

<template>
<div class="about-root">
  <h2>About</h2>
  <li v-for="(key,index) in items" v-bind:key="index" @click="click(key)">
    {{ index }}
  </li>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    click(key) {
      console.log(key);
    },
  },
  created() {
    console.log('About created');
  },
  beforeMount() {
    console.log('About beforeMount ');
  },
  mounted() {
    console.log('About mounted');
  },
  updated() {
    console.log('About updated');
  },
};
</script>