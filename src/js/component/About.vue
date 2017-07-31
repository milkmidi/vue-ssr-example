<style>
.about-root{
  background-color: #d3d3d3;
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
/* eslint no-console:0 */
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
  },
  beforeMount() {
  },
  mounted() {
  },
  updated() {
  },
};
</script>