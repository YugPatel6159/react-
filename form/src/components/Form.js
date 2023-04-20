import React from "react";
import { formik, useFormik } from "formik";
import { signUpSchema } from "./yup";

function Form() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row col-md-6 d-flex form-group">
          <label htmlFor="name" className="mt-3">
            Name
          </label>
          <input
            className="form-control "
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-danger" email>
              {formik.errors.name}
            </p>
          ) : null}
          <label htmlFor="email" className="mt-3">
            email
          </label>
          <input
            className="form-control "
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <label htmlFor="password" className="mt-3">
            password
          </label>
          <input
            className="form-control "
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
          <label htmlFor="confirm_password" className="mt-3">
            Confirm password
          </label>
          <input
            className="form-control "
            type="password"
            name="confirm_password"
            placeholder="Enter confirm password"
            id="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <p className="text-danger">{formik.errors.confirm_password}</p>
          ) : null}
          <button type="submit" className="btn btn-primary mt-3">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
