/* eslint no-console:off */


const express = require('express');
const ssr = require('./build/ssr');

ssr().then((html) => {
  console.log(html);
});
/*
const app = express();


function render(req, res) {
  res.setHeader('Content-Type', 'text/html');
  ssr.default().then((html) => {
    res.end(html);
  });
}
app.get('*', render);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});*/
