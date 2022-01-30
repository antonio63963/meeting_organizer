const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const { findUserById, changeUserProfile } = require('../controllers/cont_user');
const {uploadSingle} = require('../middlewares/upload')


router.post('/editProfile', validateAccessToken, uploadSingle, async (req, res) => {
  console.log("EDITTTT======", req.body);
  if(!req.params.auth) {
    res.send({status: 'error'});
    return
  };
  const { uid } = req.params.auth;
  const filePath = req.params.photoPath;
  try {
    if(filePath || req.body) {
      const data = Object.entries(req.body).reduce((acc, entry) =>{
        acc[entry[0]] = entry[1];
        return acc;
      }, {});
      const userData = filePath ? {...data, avatar: filePath} : data;
      const newDoc = await changeUserProfile(uid, userData);
  
      console.log('newDoc', newDoc);
      res.send({status: 'success', payload: newDoc});
      return
    } 
  } catch (e) {
    res.status(500).json(e)
  } 

});

router.get('/', validateAccessToken, async(req, res) => {
  console.log('++++++########++++++');
  if(req.params.auth) {
    const { uid } = req.params.auth;
    const userDoc = await findUserById(uid);
    const { _id, name, timezone, country, role, auth, avatar } = userDoc;
    res.send({status: 'success', payload: {
      uid: _id.toString(), 
      role, 
      name, 
      timezone, 
      country, 
      email: auth.login,
      avatar
    }});
  }else {
    res.send({status: 'error'})
  }
});


module.exports = router;