const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('start page');
  const file = path.resolve('public/index.html');
  console.log('path: ', file)
  res.sendFile(file);
});

module.exports = router;
