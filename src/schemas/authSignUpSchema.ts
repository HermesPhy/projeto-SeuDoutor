import joi from "joi";

export const authSignUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  fone: joi.number().required(),
  cpf: joi.number().min(11).required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,}$")),
  confirmPassword: joi.ref("password"),
});
