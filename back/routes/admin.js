const express = require('express');
const router = express.Router();
const {uploadSingle} = require('../middlewares/upload');
const { addManyTags, getAllTags } = require('../controllers/cont_tags');
const validateAdmin = require('../middlewares/validateAdmin');

router.post('/addTags', validateAdmin, async (req, res) => {
  const newDocs = await addManyTags(req.body);
  const newTags = newDocs.map(({name, _id}) => ({name, id: _id.toString()}));
  console.log('newTags: ', newTags);
  newTags ? res.send({status: 'success', payload: newTags}) : res.send({status: 'error'})
});

router.get('/getTags', validateAdmin, async (req, res) => {
  console.log("isAdmin: ", req.params.auth);
  const tags = await getAllTags();
  tags ? res.send({status: 'success', payload: tags}) : res.send({status: 'error'})
});

router.post('/addMeeting', validateAdmin, uploadSingle, async(req, res) => {
  console.log('Parms Auth: ', req.params.auth);
  console.log('=====ADD MEETING======', req.body);
  console.log('=====ADD MEETING======', req.params);

  res.send({status: 200})
});

module.exports = router;