/*
 * @Author: ye.chen
 * @Date: 2020-05-09 16:14:40
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-05-09 16:55:54
 */
if (typeof window === 'undefined') {
  global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const paths = require('../webpack/config/paths');
const ssr = require('../dist/main-server.js');

const template = fs.readFileSync(path.join(paths.appDist, 'index.html'), 'utf-8');

server(process.env.PORT || 3000);

function server(port) {
  const app = express();

  app.get('/', (req, res) => {
    const html = renderMarkup(renderToString(ssr));
    res.status(200).send(html);
  });

  app.use(express.static('dist'));

  app.listen(port, () => {
    console.log('server is running on port:' + port);
  });
}

const renderMarkup = (str) => {
  // const dataStr = JSON.stringify(data);
  return template.replace('<!--HTML_PLACEHOLDER-->', str);
  // .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`);
};
