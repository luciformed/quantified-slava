"use strict";

const express = require('express');
const settings = require("../settings/api.js");

const bodyParser = require('body-parser');
const dbSettings = require("../settings/db.js");

const rdb = require("rethinkdb");

const logAndReturn = function(arg) {
  console.log(arg);
  return arg;
};

let router = express.Router();

router.use(bodyParser.json());

let dbConnection;
let db;

let dbConnected = rdb.connect({
  host: dbSettings.DB_HOST,
  port: dbSettings.DB_PORT,
  db: "test"
}).then((conn) => {
  console.log('dbConnection');
  dbConnection = conn;
  // db = rdb.db('test');

  // rdb.tableCreate("kebabs").run(dbConnection).then((result) => {
  //   console.log(result, 'result');
  // }).catch((err) => {
  //   //
  // });


  // let kebabs = rdb.table("kebabs");


});

const getSurveys = () => rdb.table('survey').distinct().run(dbConnection).then((cursor) => cursor.toArray());
const updateSurvey = (id, data) => rdb.table('survey').get(id).update(data).run(dbConnection);



router.get('/survey', function(req, res) {
  console.log('tryna get surveys');
  dbConnected.then(getSurveys).then(logAndReturn).then(res.json.bind(res));
});

router.put('/survey/:id', function (req, res) {

  console.log(req.params, req.body);

  dbConnected.then(updateSurvey.bind(null, req.params.id, req.body)).then(logAndReturn).then(res.json.bind(res));
});



router.get('/', function(req, res) {

  console.log({
    uri
  });

  res.json({
    message: 'Hello World!'
  });
});




module.exports = router;

// Start the server
// app.listen(port);
// console.log('start server ' + port);
