/*
          userId:String,
          cardId:String,
          isActive:Boolean,
          dtCreated:Date
*/
var Cards = require('../models/cards')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus,
  detail:detail
}

function insert(req,res,next){
    var items = new Cards({
      userId:req.body.userId,
      cardId:req.body.cardId,
      cardClass:req.body.cardClass,
      dtCreated:new Date()
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Cards.findOne({
    _id:req.params.id
  },(err,items) => {
      items.userId = req.body.userId
      items.cardId = req.body.cardId
      items.cardClass = req.body.cardClass
      items.dtCreated = new Date()

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Cards.findOne({
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
    Cards.find({},(err,result) => {
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
