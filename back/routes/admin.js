const express = require('express');
const router = express.Router();
const validateAccessToken = require('../middlewares/validateAccess');
const {uploadSingle} = require('../middlewares/upload')


router.all('/*', validateAccessToken);

router.post('/addTag', validateAccessToken, async (req, res) => {
  console.log("Tag: ", req.body);
})

router.post('/addMeeting', uploadSingle, async(req, res) => {
  console.log('Parms Auth: ', req.params.auth);
  console.log('=====ADD MEETING======', req.body);
  console.log('=====ADD MEETING======', req.params);
  res.send({status: 200})
});

module.exports = router;