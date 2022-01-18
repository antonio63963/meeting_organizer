const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const { registration, checklogin } = require('../middlewares/jsonSchema/validateUser');
const { createUser, checkUserByEmail, loginUser } = require('../controllers/cont_user');
const { createAccessToken, getRefreshTokenDoc } = require('../controllers/ctrl_jwt');

const createCookie = (accessToken, refreshToken, res) => {
  res.cookie('accessToken', accessToken, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true }); 
};

router.all('/*', validateAccessToken);

router.post('/signUp', registration, async(req, res) => {
  console.log('Parms Auth: ', req.params.auth);
  const { auth } = req.params;
  if( auth ) {
    const { name, uid, role } = auth;
    res.send({ status: 'success', payload: { name, uid, role } });
  } else {
    const isUserLogined = await checkUserByEmail();
    if(!isUserLogined) {
      const newUser = await createUser(req.body);
      const  { id: uid, name, role } = newUser;
      const accessToken = await createAccessToken({ uid, name, role});
      const { refreshToken } = await getRefreshTokenDoc(uid);
      if(accessToken && refreshToken) {
        createCookie(accessToken, refreshToken, { uid, name }, res);
        res.send({ status: 'success', payload: { uid, role, name } });
      } else { 
        res.send({status: 'error', message: "You have't got access token or refresh token"});
      };
    } else {
      res.send({status: 'error', message: "This user already exist"});
    };
  }
});

router.post('/login', checklogin, async(req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { id, name, role } = auth;
    res.send({status: 'success', payload: {id, name, role}});
    return
  };
  const { email, password } = req.body;
  const loginResult = await loginUser(email, password);
  if(loginResult) {
    const { uid, role, name } = loginResult;
    console.log('Login result: ', uid);
    const accessToken = await createAccessToken({ uid, role, name });
    const { refreshToken } = await getRefreshTokenDoc(uid);
    
    if(accessToken && refreshToken) {
      createCookie(accessToken, refreshToken, res);
      res.send({status: 'success', payload: { uid, role, name }});
    } else { 
      res.send({status: 'error', message: "You have't got access token or refresh token"});
    };
  };

});

router.post('/logout', async(req, res) => {
  console.log('LogOut:  ', req.body);
})

module.exports = router;