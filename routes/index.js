const express = require('express');
const app = express();
const appRouts = require('./routes');
const swaggerDocument = require("../doc/swagger.json");
const swaggerUi = require("swagger-ui-express");
const path = require('path');


app.use('/api', appRouts);

app.use('/public',
  function (req, res) {
    console.log('====================================');
    console.log(req.url);
    console.log('====================================');
    // res.json(req.url)
    res.sendFile(path.join(__dirname, "../public" + req.url));
  });

app.use('/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true
  })
);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, '../view/index.html'));
});


module.exports = app;
