const express = require('express');
const router = express.Router();
const { registration, checklogin } = require('../middlewares/jsonSchema/validateUser');
const { createUser } = require('../controllers/cont_user');


router.post('/signUp', registration, (req, res) => {
  console.log('signUp!!!!', req.body);
  res.send({status: 'success'});
});

module.exports = router;