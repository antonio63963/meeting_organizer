const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  title: {
    type: Schema.Types.String, 
    minLength: 1,
    required: true
  },
  speaker: {
    type: Schema.Types.String,
    minLength: 1,
    required: true
  },
  avatar: {
    type: Schema.Types.String,
    minLengs: 10
  },
  description: {
    type: Schema.Types.String,
    minLength: 1,
  },
  startDate: {
    type: Schema.Types.Number,
    minLength: 10, 
    required: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tag'
  }],
  status: {
    type: Schema.Types.String,
    enum: ["archive", "soon", "active"],
    default: "soon"
  }

}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;