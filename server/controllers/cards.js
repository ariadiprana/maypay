/*
      bankName:String,
      type:String,
      cardClass:String,
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
      bankName:req.body.bankName,
      type:req.body.type,
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
      items.bankName = req.body.bankName
      items.type = req.body.type
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
