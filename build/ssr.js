const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');

const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');

const ROOT = path.resolve('');

const template = fs.readFileSync(path.resolve('./src/index.ssr.html'), 'utf-8');


const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});


const context = {
  head: '<h1>head</h1>',
  styles: '<style>body{background-color:green}</style>',
  state: JSON.stringify({ name: 'milkmidi' }),
};
renderer.renderToString(context, (err, html) => {
  if (err) {
    throw err.stack;
  }
  fs.writeFileSync(`${ROOT}/dist/index.html`, html);
  process.exit(0);
});
