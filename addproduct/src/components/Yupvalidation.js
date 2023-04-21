import * as Yup from 'yup';

export const productSchems =Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
    productDesc: Yup.string().required('Description is required'),
    productImage: 
        Yup.mixed().test('fileSize', null, (value) => {
          return value && value.size <= 5000000; // 5MB
        }).test('fileType', null, (value) => {
          return value && ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'].includes(value.type);
        })
      ,
    productPrice: Yup.number().required("Price is required").typeError('Price should be in number'),
    availability: Yup.string().required('Availability is required'),
    shippingInfo: Yup.string(),
    productDimensions: Yup.string(),
    productWeight: Yup.number().typeError('Weight should be in number'),
    materialAndConstruction: Yup.string(),
    productFeatures: Yup.string(),
    relatedProducts: Yup.string(),
    frequentlyAskedQuestions: Yup.string(),
    warrantyInformation: Yup.string(),
    returnPolicy: Yup.string(),
});