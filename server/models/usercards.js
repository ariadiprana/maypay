var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userCardSchema = mongoose.Schema({
    userId:String,
    cardId:String,
    isActive:Boolean,
    dtCreated:Date
})

module.exports= mongoose.model('usercards', userCardSchema)
