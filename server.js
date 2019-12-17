// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const passport = require('passport')
const historylistRoute = require("./routes/historylist");
const historylistgetRoute = require("./routes/historylistget");
const users = require('./routes/user')
const passportUse = require('./passport')
mongoose.connect(
  "mongodb://127.0.0.1:27017",
  { useNewUrlParser: true },
  (err, database) => {
    console.log("connected to db");
    if (err) return console.log(err);
  }
);

app.use(passport.initialize())
passportUse(passport)

app.use(cors());
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.use("/api/history", historylistRoute);
app.use("/api/history", historylistgetRoute);
const port = process.env.port || 8000;
app.listen(port, () => console.log("Server Up on port" + port));
