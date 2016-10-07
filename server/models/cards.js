var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var cardSchema = mongoose.Schema({
    bankName:String,
    type:String,
    cardClass:String,
    dtCreated:Date
})

module.exports= mongoose.model('cards', cardSchema)
