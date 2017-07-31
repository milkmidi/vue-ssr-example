import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './component/Home.vue';
import About from './component/About.vue';
import Project from './component/Project.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/project', component: Project },
  ],
});

export default router;
