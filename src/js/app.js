import Vue from 'vue';
import App from './component/App.vue';
import router from './app.router';
import store from './vuex/store';

export function createApp() {
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
}
