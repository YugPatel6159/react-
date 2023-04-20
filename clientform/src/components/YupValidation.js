import * as Yup from "yup";
export const crmSchema = Yup.object({
    clientname: Yup.string().min(2).max(24).required('Client name is required'),
    address: Yup.string().min(2).max(30).required('Address is required'),
    country: Yup.string().required('Country is required'),
    date: Yup.date().required('Date is required'),
    consultant: Yup.string().required('Consultant is required'),
    email: Yup.string().email().required('Email is required')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      "Must contain 8 characters, one uppercase, one number, one special character"),
    option: Yup.boolean().oneOf([true], 'Option is required'),
    totalPrrice: Yup.string().required('Total price is required')
  });