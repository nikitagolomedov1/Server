const router = require("express").Router();
const HistoryList = require("../model/HistoryList");

router.post("/historylist", async (req, res) => {
  const historylist = new HistoryList({
    city: req.body.city,
    date: req.body.date,
    table: req.body.table
  });
  try {
    const savedHistoryList = await historylist.save();
    res.send(savedHistoryList);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
