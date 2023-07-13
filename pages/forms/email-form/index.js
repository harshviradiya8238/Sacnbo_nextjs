import React from "react";
import CustomFormLabel from "../../../src/components/forms/custom-elements/CustomFormLabel";
import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";
import { Formik, Form, Field } from "formik";
import { Grid, Box, Typography, Button } from "@mui/material";
import * as Yup from "yup";
import { registerAction } from "../../../src/store/auth/Action";
import { useDispatch } from "react-redux";
import CustomeButton from "../../../src/components/forms/button/CustomeButton";

function checkPasswordStrength(password) {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      password
    )
  ) {
    return "Password is Strong";
  } else if (/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/.test(password)) {
    return "Password is Good";
  } else {
    return "Password is Weak";
  }
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("FirstName is Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("LastName is Required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .test("password-strength", "Password is not strong enough", (value) => {
      return checkPasswordStrength(value) !== "Weak";
    }),
  confirmPassword: Yup.string().required("confirmPassword is required"),
});

function EmailForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          console.log(values);
          await dispatch(registerAction(values, "email"));
          // same shape as initial values
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <Form>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <CustomFormLabel htmlFor="name">First Name</CustomFormLabel>
              <CustomTextField
                id="name"
                variant="outlined"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                onkeydown="return /[a-z]/i.test(event.key)"
                error={touched.firstName && errors.firstName}
                name="firstName"
              />
              {errors.firstName && touched.firstName ? (
                <div style={{ color: "red" }}>{errors.firstName}</div>
              ) : null}
              <CustomFormLabel htmlFor="email">Last Name</CustomFormLabel>
              <CustomTextField
                id="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={touched.lastName && errors.lastName}
                name="lastName"
              />
              {errors.lastName && touched.lastName ? (
                <div style={{ color: "red" }}>{errors.lastName}</div>
              ) : null}
              <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
              <CustomTextField
                id="email"
                variant="outlined"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                error={touched.email && errors.email}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
              <CustomTextField
                id="password"
                variant="outlined"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && errors.password}
                fullWidth
              />

              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>
                  {errors.password} and {checkPasswordStrength(values.password)}{" "}
                </div>
              ) : null}
              <CustomFormLabel htmlFor="Confirm Password">
                Confirm Password
              </CustomFormLabel>
              <CustomTextField
                sx={{
                  mb: "15px",
                }}
                id="confirmPassword"
                variant="outlined"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.confirmPassword && errors.confirmPassword}
                fullWidth
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div style={{ color: "red" }}>{errors.confirmPassword}</div>
              ) : null}

              {/* <NextLink href="/"> */}
              <div style={{ display: "flex" }}>
                <CustomeButton
                  color="secondary"
                  variant="contained"
                  // size="large"
                  type="submit"
                  // style={{ background: "#c4c0f5" }}
                  sx={{
                    pb: "10px",
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  Sign Up
                </CustomeButton>
              </div>

              {/* </NextLink> */}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmailForm;
