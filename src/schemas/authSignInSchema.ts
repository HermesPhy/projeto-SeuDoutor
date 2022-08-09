import joi from "joi";

export interface SignInData {
  email: string;
  password: string;
}

const authSignInSchema = joi.object<SignInData>({
  email: joi.string().email().required().messages({
    "string.email": "Email is not valid...",
    "string.empty": "Email cannot be empty...",
    "string.required": "Email is required...",
    "string.base": "Email must be of type string...",
  }),
  password: joi.string().required().messages({
    "string.empty": "Password cannot be empty...",
    "string.required": "Password is required...",
    "string.base": "Password must be of type string...",
  }),
});

export default authSignInSchema;
