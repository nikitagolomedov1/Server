const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({
  table: {
      type: Array,
      required:true
  }
})
module.exports = mongoose.model("Table", tableSchema);
