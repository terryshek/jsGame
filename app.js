const express = require("express");
const app = express()


const hostname = '127.0.0.1';
const port = 8100;

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port} @ ${hostname}!`)
})