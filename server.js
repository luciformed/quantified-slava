"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();
var apiApp = require("./api/index.js");

var contentBase = path.resolve(__dirname, "src");


app.use('/api', apiApp);
app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(contentBase, "index.html"));
});


var server = new WebpackDevServer(webpack(config), {
  contentBase: "./src/",
  hot: true,
  quiet: false,
  noInfo: false,
  publicPath: "/assets/",

  stats: {
    colors: true
  }
});

// ## run the two servers
server.listen(8081, "localhost", function() {});
app.listen(8080);
