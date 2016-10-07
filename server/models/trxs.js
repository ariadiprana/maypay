var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var trxSchema = mongoose.Schema({
    refNo:String,
    role:String,
    lenderId:String,
    userId:String,
    status:String,
    cardId:String,
    productName:String,
    location:String,
    maxPymt:Number,
    realPymt:Number,
    profit:Number,
    lenderPhone:String,
    lenderRating:Number,
    lenderTotTrx:Number,
    UserPhone:String,
    UserRating:Number,
    UserTotTrx:Number,
    dtCreated:Date
})

module.exports= mongoose.model('trxs', trxSchema)
