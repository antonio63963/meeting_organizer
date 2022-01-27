const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const { findUserById, changeUserAvatar } = require('../controllers/cont_user');
const {uploadSingle} = require('../middlewares/upload')


router.all('/*', validateAccessToken);

// router.post('/changeAvatar', validateAccessToken, uploadSingle, async (req, res) => {
//   console.log('changeAvatar');
//   if(!req.params.auth) res.send({status: 'error'});
//   const { uid } = req.params.auth;
//   const filePath = req.params.photoPath;  
//   if(filePath) {
//     console.log('FILE AVATAR: ', filePath);
//     const newDoc = await changeUserAvatar(uid, filePath);
//     console.log('newDoc:', newDoc);
//     res.send({status: 'success', payload: {avatar: newDoc.avatar}});
//   } else if() else {
//     res.send({status: 'error'});
//   } 
// });

router.post('/editProfile',validateAccessToken, uploadSingle, async (req, res) => {
  console.log("EDITTTT======", req.body);
  if(!req.params.auth) {
    res.send({status: 'error'});
    return
  };
  const { uid } = req.params.auth;
  const filePath = req.params.photoPath;  
  if(filePath || req.body) {
    const userData = filePath ? {...req.body, avatar: filePath} : req.body;
    console.log('FILE AVATAR: ', userData);
    
  }
  console.log("edit profile: ", req.body);
  res.send({status: 'success'});
});

module.exports = router;