const mongoose = require("mongoose");
const historySchema = new mongoose.Schema({
  city: {
    type: String,
    required: false,
    min: 6,
    max: 255
  },
  date: {
    type: String,
    required: false,
    min: 6,
    max: 255
  },
  table: {
      type: Array,
      required:false
  }
})
module.exports = mongoose.model("HistoryList", historySchema);
