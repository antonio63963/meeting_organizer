const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  refreshToken: {
    type: Schema.Types.String
  },

}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;