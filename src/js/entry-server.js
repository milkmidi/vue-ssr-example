import { createApp } from './app';

export default context => new Promise((resolve, reject) => {
  const { app, router, store } = createApp();
  router.push(context.url);
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents.length) {
      reject({ code: 404 });
      return;
    }
    // context.state = { url: context.url };
    context.state = { ...store.state, currentRoute: context.url };
    resolve(app);
    /* Promise.all(matchedComponents.map((Component) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute,
        });
      }
    })).then(() => {
      // context.state = store.state;
      resolve(app);
    }).catch(reject); */
  }, reject);
});

