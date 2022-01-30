const TagModel = require('../models/tag');

const createTag = async (tag) => {
  const tagDoc = new TagModel;
  tagDoc.name = tag;
  const doc = await tagDoc.save();
  console.log(doc);
  return doc;
};
const addManyTags = async (tags) => {
  const tagsArr = tags.map(tag => ({name: tag}))
  const res = await TagModel.insertMany(tagsArr, {ordered: false});
  const newTags = res.map(tag => ({name: tag, id: tag._id.toString()}));
  return newTags;
}
const getAllTags = async () => {
  const tags = await TagModel.find({}, {name: 1});
  const correctTagEntry = tags.map(tag => ({name: tag.name, id: tag._id.toString()}));
  return correctTagEntry;
}

const findTagById = async(id) => {
  const tag = await TagModel.findOne({id});
  return tag;
};

module.exports = {
  findTagById,
  getAllTags,
  addManyTags
};
