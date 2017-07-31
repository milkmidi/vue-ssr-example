/* eslint no-console:0 */
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { createBundleRenderer } = require('vue-server-renderer');

const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');

const ROOT = path.resolve('');

const template = fs.readFileSync(path.resolve('./dist/index.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  template,
  runInNewContext: false,
  clientManifest,
});

const generateHTML = url => new Promise((resolve, reject) => {
  const context = {
    // head: `<!--${url}-->`,
    // styles: '<style>body{background-color:green}</style>',
    state: JSON.stringify({ name: `state${url}` }),
    url,
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      reject(err.stack);
      return;
    }
    let toPath = `${ROOT}/dist/`;
    const fileName = '/index.html';
    if (url !== '/') {
      toPath += url.substr(1);
      fs.mkdirSync(toPath);
    }
    fs.writeFileSync(toPath + fileName, html);
    console.log(url);
    resolve();
  });
});

const rimrafPromise = file =>
  new Promise((resolve, reject) =>
    rimraf(file, error => (error ? reject(error) : resolve())));

const promiseSequence = (routers, fn) =>
  routers.reduce((promise, url) =>
    promise.then(() => fn(url)), Promise.resolve());

const routers = ['/', '/about', '/project'];
promiseSequence(routers, generateHTML)
  .then(() => Promise.all([
    rimrafPromise(`${ROOT}/dist/vue-ssr-client-manifest.json`),
    rimrafPromise(`${ROOT}/dist/vue-ssr-server-bundle.json`),
  ]))
  .then(() => {
    console.log('vue ssr complete');
    process.exit(0);
  }).catch((err) => {
    console.error(err);
    process.exit(0);
  });
