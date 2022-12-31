const express = require('express');
const app = express();
const appRouts = require('./routes');
const path = require('path');

/*
  Swagger Configuration
*/
const swaggerDocument = require("../doc/swagger.json");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mean App",
      version: "0.1.0",
      description:
        "This is a simple Mean App with CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://github.com/manish29ify/mean/blob/master/LICENSE",
      },
      contact: {
        name: "Mean App",
        url: "http://localhost:3000",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js", "./models/*.js"],
};

const specs = swaggerJsdoc(options);
// app.use('/docs',
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerDocument, {
//     explorer: true
//   })
// );
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
/*
  Swagger Configuration
*/

app.use('/api', appRouts);

app.use('/public',
  function (req, res) {
    console.log('====================================');
    console.log(req.url);
    console.log('====================================');
    // res.json(req.url)
    res.sendFile(path.join(__dirname, "../public" + req.url));
  });


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, '../view/index.html'));
});


module.exports = app;
