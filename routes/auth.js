// const router = require("express").Router();
// const User = require("../model/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { registerValidation, loginValidation } = require("../validation");

// router.post("/register", async (req, res) => {
//   const { error } = registerValidation(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }
//   const usernameExist = await User.findOne({ username: req.body.username });
//   if (usernameExist) {
//     return res.status(400).send("Username already exists");
//   }
//   const emailExist = await User.findOne({ email: req.body.email });
//   if (emailExist) {
//     return res.status(400).send("Email already exists");
//   }

//   // const salt = await bcrypt.genSalt(10);
//   // const hashPassword = await bcrypt.hash(req.body.password, salt);
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) console.error("There was an error" + error);
//     else {
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         if (err) console.error("There was an error" + err);
//         else {
//           user.password = hash;
//           user.save().then(user => {
//             res.json(user);
//           });
//         }
//       });
//     }
//   });

//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: hashPassword,
//     repeat_password: req.body.repeat_password
//   });
//   try {
//     const savedUser = await user.save();
//     res.send(savedUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// router.post("/login", async (req, res) => {
//   const { error } = loginValidation(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }
//   const user = await User.findOne({ username: req.body.username });
//   if (!user) {
//     return res.status(400).send("Incorrect username");
//   }
//   const validPass = await bcrypt.compare(req.body.password, user.password);
//   if (!validPass) {
//     return res.status(400).send("Incorrect password");
//   }

//   //Create token
//   const token = jwt.sign({ _id: user._id }, "secretkey");
//   res.header("auth-token", token).send(token);
// });

// router.get(
//   "/me",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     return res.json({
//       id: req.user.id,
//       username: req.user.username,
//       email: req.user.email
//     });
//   }
// );

// module.exports = router;
