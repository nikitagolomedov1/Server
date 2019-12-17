const Joi = require("@hapi/joi");

//Registration
const registerValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
    repeat_password: Joi.ref("password")
  });
   return schema.validate(data);

};
const loginValidation = data => {
    const schema = Joi.object({
      username: Joi.string()
        .min(6)
        .required(),
      password: Joi.string()
        .min(6)
        .required()
    });
     return schema.validate(data);
  
  };
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
