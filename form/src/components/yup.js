import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(24).required('name must required'),
    email: Yup.string().email().required('email is required').matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Must contain 8 characters, one uppercase,one number,one special character"
      ),
    password: Yup.string().min(6).required('password is required'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null],"password must match")
}) 
