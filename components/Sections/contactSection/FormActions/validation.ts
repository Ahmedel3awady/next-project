import * as yup from "yup";

export const schema = () => {
  return yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    subject: yup.object().required(),
    message: yup.string().required(),
  })
}