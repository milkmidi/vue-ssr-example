import { createApp } from './app';

export default context => new Promise((resolve) => {
  const { app } = createApp();
  context.initialState = {
    name: 'milkmidi',
  };
  resolve(app);
})
;
