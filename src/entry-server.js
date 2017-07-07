import { createApp } from './app';

export default context => new Promise((resolve, reject) => {
  const { app } = createApp();
  resolve(app);
})
;
