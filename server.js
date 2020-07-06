const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/src/frontend_vue/dist')));

const port = process.env.PORT || 8080;

app.listen(3000);

console.log('listen port : ', port);
