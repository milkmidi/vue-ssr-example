import { createApp } from './app';

const { app, router } = createApp();

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    /* const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    // 我们只关心之前没有渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false;
    const activated = matched.filter((c, i) => diffed || (diffed = (prevMatched[i] !== c)));
    if (!activated.length) {
      return next();
    } */
    next();
  });
  app.$mount('#app');
});
