const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const { registration, checklogin } = require('../middlewares/jsonSchema/validateUser');
const { createUser } = require('../controllers/cont_user');
const { createAccessToken, createRefreshToken, createTokenDoc } = require('../controllers/ctrl_jwt');

router.all('/*', validateAccessToken);

router.post('/signUp', registration, async(req, res) => {
  console.log('Parms Auth: ', req.params.auth);
  const newUser = await createUser(req.body);
  const  { id: uid, name } = newUser;
  const accessToken = await createAccessToken({ uid, name});
  const refreshToken = createRefreshToken();
  const token_id = await createTokenDoc({ uid, refreshToken });
  if(accessToken && refreshToken && token_id) {
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.send({status: 'success', payload: { uid, name }});
  } else {
    res.send({status: 'error', message: "You have't got access token or refresh token"});
  }
});

module.exports = router;