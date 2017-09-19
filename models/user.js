const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email : {type:String },
    username : {type:String },
    password : {type:String }
});

module.exports = mongoose.model('User' , userSchema);