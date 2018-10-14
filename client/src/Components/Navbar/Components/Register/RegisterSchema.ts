import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(4)
        .required()
})
