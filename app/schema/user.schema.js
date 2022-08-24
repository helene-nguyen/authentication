//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ User schema SignUp
const userSignUpSchema = Joi.object({
  username: Joi.string(),

  email: Joi.string().pattern(new RegExp('^[-a-zA-Z0-9.-_]+@[\\w-]+(?:\\.[\\w-]{2,4})$')),

  password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

  passwordConfirm: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$'))
})
  .required()
  .max(4);

//~ User schema SignIn
const userSignInSchema = Joi.object({
  email: Joi.string().pattern(new RegExp('^[-a-zA-Z0-9.-_]+@[\\w-]+(?:\\.[\\w-]{2,4})$')),

  password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$'))
})
  .required()
  .max(2);

export { userSignInSchema, userSignUpSchema };
