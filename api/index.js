"use strict";

const express = require('express');
const settings = require("../settings/api.js");

const bodyParser = require('body-parser');
const dbSettings = require("../settings/db.js");

const rdb = require("rethinkdb");
const Agenda = require("agenda");


let mongoConnectionString = "mongodb://127.0.0.1/agenda";

let agenda = new Agenda({
  db: {
    address: mongoConnectionString
  }
});


const logAndReturn = function(arg) {
  console.log(arg);
  return arg;
};



let router = express.Router();

// agenda.on('ready', () => {
//   // router.use('/agenda-ui', AgendaUI(agenda, {
//   //   poll: 1000
//   // }))
// });



router.use(bodyParser.json());

let dbConnection;

let dbConnected = rdb.connect({
  host: dbSettings.DB_HOST,
  port: dbSettings.DB_PORT,
  db: "test"
}).then((conn) => {
  dbConnection = conn;
});


const getSurveys = () => rdb.table('survey').distinct().run(dbConnection).then((cursor) => cursor.toArray());
const updateSurvey = (id, data) => rdb.table('survey').get(id).update(data).run(dbConnection);
const createSurvey = (data) => rdb.table('survey').insert(data).run(dbConnection);

const JOB_ADD_SURVEY = "ADD_SURVEY";


agenda.define(JOB_ADD_SURVEY, function(job, done) {
  console.log("Should add new survey", new Date());
  dbConnected.then(() => createSurvey({
    created_date: new Date()
  })).then(() => done());
});


agenda.on('ready', function() {
  agenda.start();

  // let addSurvey = agenda.create(JOB_ADD_SURVEY);

  // addSurvey.repeatEvery('0 21 * * * *', {
  //   timezone: "Europe/London"
  // }).save();

});


router.get('/survey', function(req, res) {
  console.log('tryna get surveys');
  dbConnected.then(getSurveys).then(logAndReturn).then(res.json.bind(res));
});

router.put('/survey/:id', function(req, res) {

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
