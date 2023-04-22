import { React } from "react";
import { useFormik } from "formik";
import {
  Autocomplete,
  Button,
  Box,
  TextField,
  Stack,
  Paper,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { productSchems } from "./Yupvalidation";

function Addproduct() {
  let initialValues = {
    productName: "",
    productDesc: "",
    productImage: [],
    productPrice: "",
    availability: "",
    shippingInfo: "",
    productDimensions: "",
    productWeight: "",
    materialAndConstruction: "",
    productFeatures: "",
    relatedProducts: " ",
    frequentlyAskedQuestions: "",
    warrantyInformation: "",
    returnPolicy: "",
  };
  const relatedProducts = [
    {
      id: 1,
      name: "Product A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://example.com/product-a.jpg",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product B",
      description:
        "Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.",
      imageUrl: "https://example.com/product-b.jpg",
      price: 8.99,
    },
    // Add more related products as needed
  ];
  const handlefaqChange = (value) => {
    formik.setFieldValue("frequentlyAskedQuestions", value);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: productSchems,
    onSubmit: (values, actions) => {
      if(localStorage.getItem('productInfo'))
      localStorage.setItem('productInfo',JSON.stringify(values))
      console.log(values)
      actions.resetForm();
    },
  });
  console.log(formik);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Add Product</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper sx={{ padding: "32px" }} elevation={4}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Stack direction="row" marginTop={3} spacing={4}>
                <Box>
                  <TextField
                    id="productName"
                    label="Product Name"
                    name="productName"
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productName &&
                      formik.errors.productName ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productName}
                        </span>
                      ) : null
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    id="productDesc"
                    label="Product Description"
                    name="productDesc"
                    value={formik.values.productDesc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productDesc &&
                      formik.errors.productDesc ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productDesc}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack marginTop={3} direction="row" spacing={4}>
                <Box>
                  <TextField
                    id="productImage"
                    type="file"
                    name="productImage"
                    label="select image"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      multiple: true,
                      accept: "image/*,video/*",
                    }}
                    onChange={(event) => {
                      formik.setFieldValue(
                        "productImage",
                        event.currentTarget.files
                      );
                    }}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productImage &&
                      formik.errors.productImage ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productImage}
                        </span>
                      ) : null
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    id="productPrice"
                    label="Product Price"
                    name="productPrice"
                    value={formik.values.productPrice}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productPrice &&
                      formik.errors.productPrice ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productPrice}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack marginTop={3} direction="row" spacing={20}>
                <Box>
                  <FormControl>
                    <Stack direction="row">
                      <FormLabel id="availability" className="mt-2 me-5 ms-2">
                        Availability
                      </FormLabel>

                      <RadioGroup
                        row
                        name="availability"
                        value={formik.values.availability}
                        onChange={(e) =>
                          formik.setFieldValue("availability", e.target.value)
                        }
                        onBlur={formik.handleBlur}
                      >
                        <FormControlLabel
                          control={<Radio />}
                          label="yes"
                          value="true"
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label="no"
                          value="false"
                        />
                      </RadioGroup>
                      <Box>
                        {formik.touched.availability &&
                        formik.errors.availability ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.availability}
                          </span>
                        ) : null}
                      </Box>
                    </Stack>
                  </FormControl>
                </Box>
                <Box>
                  <TextField
                    id="shippingInfo"
                    label="Shipping Information"
                    name="shippingInfo"
                    value={formik.values.shippingInfo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.shippingInfo &&
                      formik.errors.shippingInfo ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.shippingInfo}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack marginTop={3} direction="row" spacing={4}>
                <Box>
                  <TextField
                    id="productDimensions"
                    label="Product Dimensions"
                    name="productDimensions"
                    value={formik.values.productDimensions}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productDimensions &&
                      formik.errors.productDimensions ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productDimensions}
                        </span>
                      ) : null
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    id="productWeight"
                    label="Product Weight"
                    name="productWeight"
                    value={formik.values.productWeight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productWeight &&
                      formik.errors.productWeight ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productWeight}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack marginTop={3} direction="row" spacing={4}>
                <Box>
                  <TextField
                    id="materialAndConstruction"
                    label="Material And Construction"
                    name="materialAndConstruction"
                    value={formik.values.materialAndConstruction}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.materialAndConstruction &&
                      formik.errors.materialAndConstruction ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.materialAndConstruction}
                        </span>
                      ) : null
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    id="productFeatures"
                    label="Product Features"
                    name="productFeatures"
                    value={formik.values.productFeatures}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.productFeatures &&
                      formik.errors.productFeatures ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.productFeatures}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack direction="row" marginTop={3} spacing={4}>
                <Box>
                  <Autocomplete
                    id="relatedProducts"
                    label="Related Products"
                    name="relatedProducts"
                    onChange={(event, value) => {
                      formik.setFieldValue(
                        "relatedProducts",
                        value ? value.name : ""
                      );
                    }}
                    onBlur={formik.handleBlur}
                    options={relatedProducts}
                    getOptionLabel={(option) => option.name || ""}
                    style={{ width: "400px" }}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label="Related Products" />
                    )}
                  />
                </Box>
                <Box>
                  <ReactQuill
                    name="frequentlyAskedQuestions"
                    id="frequentlyAskedQuestions"
                    onChange={handlefaqChange}
                    value={formik.values.frequentlyAskedQuestions}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.frequentlyAskedQuestions &&
                      formik.errors.frequentlyAskedQuestions ? (
                        <span className="text-danger">
                          {formik.errors.frequentlyAskedQuestions}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack direction="row" marginTop={3} spacing={4}>
                <Box>
                  <TextField
                    id="warrantyInformation"
                    label="Warranty Information"
                    name="warrantyInformation"
                    value={formik.values.warrantyInformation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.warrantyInformation &&
                      formik.errors.warrantyInformation ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.warrantyInformation}
                        </span>
                      ) : null
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    id="returnPolicy"
                    label="Return Policy"
                    name="returnPolicy"
                    value={formik.values.returnPolicy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "400px" }}
                    helperText={
                      formik.touched.returnPolicy &&
                      formik.errors.returnPolicy ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.returnPolicy}
                        </span>
                      ) : null
                    }
                  />
                </Box>
              </Stack>
              <Stack marginTop={4}>
                <Button variant="contained" color="primary" type="submit">
                  Add Product
                </Button>
              </Stack>
            </Box>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default Addproduct;
