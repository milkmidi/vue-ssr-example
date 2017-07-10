const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');


const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');

const template = fs.readFileSync(path.resolve('./src/index.template.html'), 'utf-8');


const renderer = createBundleRenderer(serverBundle, {
  template,
  runInNewContext: false,
  clientManifest,
});


module.exports = () => new Promise((resolve, reject) => {
  renderer.renderToString((err, html) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(html);
  });
});
