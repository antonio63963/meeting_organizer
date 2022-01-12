const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.post('/signUp', function(req, res, next) {
  console.log('signUp!!!!', req.body);
 
});

module.exports = router;