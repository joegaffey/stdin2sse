#!/usr/bin/env node

var express = require('express');

var app = express();
app.listen(8001);

var SSE = require('express-sse');
var sse = new SSE();
app.get('/events', sse.init);

app.use(express.static(__dirname + '/'));

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', function (cmd) {
  sse.send(cmd);
});
