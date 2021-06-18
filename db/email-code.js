const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmailCodeSchema = new Schema({
    code: String,
    mail:String
});
  
module.exports = mongoose.model('mailcode', EmailCodeSchema);