var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
    email:String,
    phoneNo:String,
    lenderRating:Number,
    lenderTotTrx:Number,
    userRating:Number,
    userTotTrx:Number
})

module.exports= mongoose.model('users', userSchema)
