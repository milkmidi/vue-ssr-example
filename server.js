/*const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})*/
// const renderer = require('vue-server-renderer').createRenderer()

const express = require('express');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

const clientManifest = require('./build/vue-ssr-server-bundle.json')
const template = fs.readFileSync(path.resolve('./src/index.template.html'), 'utf-8');
// const code = fs.readFileSync(path.join(__dirname, './build/bundle.server.js'), 'utf8');

function createRenderer (options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(options, {
    template,    
    // this is only needed when vue-server-renderer is npm-linked
    // basedir: path.resolve('./dist'),
    // recommended for performance
    runInNewContext: false
  })
}

const renderer = createRenderer(clientManifest);
renderer.renderToString((err, html) => {
    if (err) {
      return console.log(err);
    }
    console.log(html);
  })
/*const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
});*/