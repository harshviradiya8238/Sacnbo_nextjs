import React, { useState } from "react";
import CustomFormLabel from "../../../src/components/forms/custom-elements/CustomFormLabel";
import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";
import { Formik, Form, Field } from "formik";
import { Grid, Box, Typography, Button } from "@mui/material";
import { registerAction } from "../../../src/store/auth/Action";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import OtpInput from "react-otp-input";
import Link from "next/link";

import CustomeButton from "../../../src/components/forms/button/CustomeButton";
import EmailIcon from "@mui/icons-material/Email";
import * as Yup from "yup";
import OTPInput from "react-otp-input";

const useStyles = makeStyles({
  otp: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div input": {
      height: "4em",
      minWidth: "4em",
      border: "none",
      borderRadius: "10px",
      background: "#E5EDF5",
      fontSize: "15px",
      margin: "5px",
      boxShadow:
        "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset",
    },
  },
});

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
  const [emailOTP, setemailOTP] = useState(false);
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <div>
      {!emailOTP ? (
        <>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            // validationSchema={SignupSchema}
            onSubmit={async (values) => {
              setemailOTP(true);
              console.log(values);
              // await dispatch(registerAction(values, "email"));
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
                      {errors.password} and{" "}
                      {checkPasswordStrength(values.password)}{" "}
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
        </>
      ) : (
        <>
          <Grid item xs={12} sm={12} lg={6}></Grid>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
          >
            {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            <h2>Check Your email</h2>
            {/* <EmailIcon
                sx={{
                  color: (theme) => theme.palette.error.main,
                }}
              /> */}
            {/* </div> */}

            <span style={{ fontSize: "18px" }}>We sent 6 digit code:</span>
            <Button
              variant="outlined"
              size="large"
              display="flex"
              alignitems="center"
              justifycontent="center"
              sx={{
                width: "100%",
                height: "60px",
                borderRadius: "10px",
                boxShadow:
                  "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset",
                borderColor: (theme) =>
                  `${theme.palette.mode === "dark" ? "#42464d" : "#dde3e8"}`,
                borderWidth: "2px",
                textAlign: "center",
                mt: 2,
                pt: "10px",
                pb: "10px",
                "&:hover": {
                  borderColor: (theme) =>
                    `${theme.palette.mode === "dark" ? "#42464d" : "#dde3e8"}`,
                  borderWidth: "2px",
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <EmailIcon
                  sx={{
                    color: (theme) => theme.palette.error.main,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    ml: 1,
                    fontSize: "17px",
                    color: (theme) =>
                      `${
                        theme.palette.mode === "dark"
                          ? theme.palette.grey.A200
                          : "#13152a"
                      }`,
                  }}
                >
                  ashish@raichura.in
                </Typography>
              </Box>
            </Button>
            {/* <h3>ashish@raichura.in</h3> */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#777e89" }}>Enter 6 Digit Code</h1>
            </div>

            <div className={classes.otp}>
              <OtpInput
                // value={otp}
                // onChange={setOtp}
                numInputs={6}
                // renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <Button
              style={{ color: "#7352ff", margin: "1.3rem 0", fontSize: "17px" }}
            >
              Resend OTP
            </Button>

            <Box style={{ fontSize: "17px" }}>
              <span>Wrong email address?</span>
              <Button
                style={{ fontSize: "16px" }}
                onClick={() => setemailOTP(false)}
              >
                Back to signup
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
            <Link href="/userProfile/account">
              <CustomeButton
                color="secondary"
                variant="contained"
                type="submit"
                style={{ background: "#6f31f7" }}
                sx={{
                  pb: "10px",
                  width: "50%",
                  margin: "auto",
                }}
              >
                Sign UP
              </CustomeButton>
            </Link>
          </Box>
        </>
      )}
    </div>
  );
}

export default EmailForm;
