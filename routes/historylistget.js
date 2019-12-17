const router = require("express").Router();
const mongoose = require("mongoose");
const HistoryList = require("../model/HistoryList");

router.get("/historylist", (req, res) => {

   HistoryList.find({}, function(err, docs){
    if(err) return console.log(err);
     res.send(docs)
});
})
router.get("/historylist/details/:id", (req, res) => {

  HistoryList.findOne({_id: req.params.id}, function(err, docs){
   if(err) return console.log(err);
    res.send(docs)
});
})
module.exports = router;
