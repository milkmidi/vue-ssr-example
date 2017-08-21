import Vue from 'vue';
import App from './component/App.vue';
import { createRouter } from './app.router';
import store from './vuex/store';

export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
}
