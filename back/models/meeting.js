const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  title: {
    type: Schema.Types.String, 
    minLength: 1
  },
  speaker: {
    type: Schema.Types.String,
    minLength: 1
  },
  avatar: {
    type: Schema.Types.String,
    minLengs: 10
  },
  startDate: {
    type: Schema.Types.Number,
    minLength: 10
  },
  tag: {
    
  }

}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;