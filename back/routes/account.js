const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const { findUserById } = require('../controllers/cont_user');
const {uploadSingle} = require('../middlewares/upload')


router.all('/*', validateAccessToken);

router.get('/', validateAccessToken, async(req, res) => {
  console.log('++++++########++++++');
  if(req.params.auth) {
    const { auth } = req.params;
    const { uid, role, name } = auth;
    const userDoc = await findUserById(uid);
    const { _id, name, timezone, country, role, email }
    res.send({status: 'success', payload: {uid: _id.toString(), role, name, timezone, country, email}});
  }else {
    res.send({status: 'error'})
  }
});

module.exports = router;