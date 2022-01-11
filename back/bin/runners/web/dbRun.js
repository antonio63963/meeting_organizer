const mongoose = require('mongoose');
const { url, options } = require('../../../config').db;
const db = require('../../../storages/db');

function run() {
  mongoose.connect(url, options);
  // const db = mongoose.connection;
  db.once('open', () => console.log('DB has run successfully'));
  db.once('close', () => console.log('DB has failed'));
  db.on('error', err => console.log('Error: ' + err));
};

module.exports = run;