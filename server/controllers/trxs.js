/*
        refNo:String,
        lenderId:String,
        userId:String,
        status:String,
        cardId:String,
        productName:String,
        location:String,
        mayPymt:Integer,
        realPymt:Integer,
        lenderPhone:String,
        lenderRating:Integer,
        lenderTotTrx:Integer,
        UserPhone:String,
        UserRating:Integer,
        UserTotTrx:Integer,
        dtCreated:Timestamp
*/
var Orders = require('../models/trxs')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus,
  detail:detail
}

function insert(req,res,next){
    var fs = require('fs')

    var items = new Orders({
      refNo:req.body.refNo,
      lenderId:req.body.lenderId,
      userId:req.body.userId,
      status:req.body.status,
      cardId:req.body.cardId,
      productName:req.body.productName,
      location:req.body.location,
      mayPymt:req.body.mayPymt,
      realPymt:req.body.realPymt,
      lenderPhone:req.body.lenderPhone,
      lenderRating:req.body.lenderRating,
      lenderTotTrx:req.body.lenderTotTrx,
      UserPhone:req.body.UserPhone,
      UserRating:req.body.UserRating,
      UserTotTrx:req.body.UserTotTrx,
      dtCreated:new Date()

    })
    items.save()
    res.json(items)
}


function update(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      items.refNo = req.body.refNo
      items.lenderId = req.body.lenderId
      items.userId = req.body.userId
      items.status = req.body.status
      items.cardId = req.body.cardId
      items.productName = req.body.productName
      items.location = req.body.location
      items.mayPymt = req.body.mayPymt
      items.realPymt = req.body.realPymt
      items.lenderPhone = req.body.lenderPhone
      items.lenderRating = req.body.lenderRating
      items.lenderTotTrx = req.body.lenderTotTrx
      items.UserPhone = req.body.UserPhone
      items.UserRating = req.body.UserRating
      items.UserTotTrx = req.body.UserTotTrx
      items.dtCreated = new Date()

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}


function hapus(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      if(err)throw err

      items.remove((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function display(req,res,next){
    Orders.find({},(err,result) => {
          res.json(result)
    })
}

function detail(req,res,next){
    Cards.findOne({
      _id:req.params.id
    },(err,result) => {
          res.json(result)
    })
}
