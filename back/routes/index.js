var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('wow');
  const file = path.resolve(__dirname, '../index.html');
  console.log('path: ', file)
  res.sendFile(file);
  // res.json({status: 'asdfasdfasdf'})
});

module.exports = router;
