import joi from "joi";

import { User } from "@prisma/client";

export type CreateUserBody = Omit<User, "id" | "doctorId"> & {
  confirmPassword: String;
};

const authSignUpSchema = joi.object<CreateUserBody>({
  email: joi.string().email().required().messages({
    "string.email": "Email is not valid...",
    "string.empty": "Email cannot be empty...",
    "string.required": "Email is required...",
    "string.base": "Email must be of type string...",
  }),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,}$"))
    .required()
    .messages({
      "string.empty": "Password cannot be empty...",
      "string.required": "Password is required...",
      "string.base": "Password must be of type string...",
    }),
  confirmPassword: joi.ref("password"),
  name: joi.string().required().messages({
    "string.empty": "Name cannot be empty...",
    "string.required": "Name is required...",
    "string.base": "Name must be of type string...",
  }),
  phoneNumber: joi
    .string()
    .min(11)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.base": "Phone number must be of type string...",
      "string.min": "Phone number must be at least 11 characters long...",
      "string.regex": "Phone number must be numeric...",
      "string.required": "Phone number is required...",
    }),
  cpf: joi
    .string()
    .min(11)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.base": "cpf must be of type string...",
      "string.min": "cpf must be at least 11 characters long...",
      "string.regex": "cpf must be numeric...",
      "string.required": "cpf is required...",
    }),
});

export default authSignUpSchema;
