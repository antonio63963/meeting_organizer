const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const {uploadSingle} = require('../middlewares/upload')


router.all('/*', validateAccessToken);

router.get('/', validateAccessToken, async(req, res) => {
  console.log('++++++########++++++');
  if(req.params.auth) {
    const { auth } = req.params;
    const { uid, role, name } = auth;
    // console.log('++++ACCOUNT+++', req.params);
    res.send({status: 'success', payload: {uid, role, name}});
  }else {
    res.send({status: 'error'})
  }
});

module.exports = router;