import joi from "joi";

export const authSignUpSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  fone: joi.number().required(),
  cpf: joi.number().min(11).required,
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
});

export const authSignInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
