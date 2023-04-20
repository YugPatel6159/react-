import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(24).required('name must required'),
    email: Yup.string().email().required('email is required'),
    password: Yup.string().min(6).required('password is required'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null],"password must match")
}) 
