import React, { useState } from "react";
import CustomFormLabel from "../../../src/components/forms/custom-elements/CustomFormLabel";
import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";
import { Formik, Form, Field } from "formik";
import { Grid, Box, Typography, Button } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { registerAction } from "../../../src/store/auth/Action";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OtpInput from "react-otp-input";
import Checkbox from "@mui/material/Checkbox";
import CustomeButton from "../../../src/components/forms/button/CustomeButton";

const useStyles = makeStyles({
  phone: {
    "& div input": {
      height: "50px",
      boxShadow:
        "inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)",
      borderRadius: "50px",
      border: "none",
      fontSize: "20px",
      padding: "15px",
    },
  },
  otp: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div input": {
      height: "4em",
      minWidth: "4em",
      border: "none",
      borderRadius: "10px",
      boxShadow:
        "inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)",
    },
  },
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobile: Yup.string().required("Required"),
  otp: Yup.string().required("Required"),
});

function PhoneForm() {
  const classes = useStyles();

  const [phoneValue, setPhoneValue] = useState();
  const [sendOtp, setSendOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    setSendOtp(true);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          //   firstName: "",
          //   lastName: "",
          mobile: "",
          otp: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          // same shape as initial values
          console.log(values);
          await dispatch(registerAction(values, "mobile"));
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
              {/* <CustomFormLabel htmlFor="name">First Name</CustomFormLabel>
              <CustomTextField
                id="name"
                variant="outlined"
                fullWidth
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                onkeydown="return /[a-z]/i.test(event.key)"
                error={touched.firstName && errors.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div style={{ color: "red" }}>{errors.firstName}</div>
              ) : null}
              <CustomFormLabel htmlFor="mobile">Last Name</CustomFormLabel>
              <CustomTextField
                id="last Name"
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.lastName && errors.lastName}
                fullWidth
                name="lastName"
              />
              {errors.lastName && touched.lastName ? (
                <div style={{ color: "red" }}>{errors.lastName}</div>
              ) : null} */}
              <Box style={{ marginBottom: "30px" }}>
                {!sendOtp ? (
                  <div className={classes.phone}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ color: "#777e89" }}>Enter Your Phone</h1>
                    </div>
                    <div
                      style={{
                        margin: "20px",
                        textAlign: "center",
                        color: "#777e89",
                      }}
                    >
                      <span>
                        Provide your number so we can send you 4 Digit Code to
                        log you in
                      </span>
                    </div>

                    <PhoneInput
                      international
                      defaultCountry="IN"
                      placeholder="+91 9999999999"
                      value={phoneValue}
                      onChange={setPhoneValue}
                    />
                    <div style={{ margin: "20px", textAlign: "center" }}>
                      <Checkbox />
                      <span style={{ color: "#777e89" }}>
                        I have read and agreed to the Term of use Privacy policy
                        and Disclaimer
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ color: "#777e89" }}>Enter 4 Digit Code</h1>
                    </div>
                    <div
                      style={{
                        margin: "20px",
                        textAlign: "center",
                        color: "#777e89",
                      }}
                    >
                      <span>
                        Provide your number so we can send you 4 Digit Code to
                        log you in
                      </span>
                    </div>
                    <div className={classes.otp}>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Button>resend OTP</Button>
                    </div>
                  </>
                )}
              </Box>

              {/* <CustomTextField
                id="mobile"
                variant="outlined"
                fullWidth
                name="mobile"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.mobile && errors.mobile}
              />
              {errors.mobile && touched.mobile ? (
                <div style={{ color: "red" }}>{errors.mobile}</div>
              ) : null} */}

              {/* <Button>Send OTP</Button> */}
              {/* <CustomFormLabel htmlFor="otp">OTP</CustomFormLabel>
              <CustomTextField
                id="otp"
                variant="outlined"
                name="otp"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.otp && errors.otp}
              />
              {errors.otp && touched.otp ? (
                <div style={{ color: "red" }}>{errors.otp}</div>
              ) : null} */}

              {/* <NextLink href="/"> */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomeButton
                  color="secondary"
                  variant="contained"
                  type="submit"
                  onClick={handleSendOTP}
                  style={{ background: "#6f31f7" }}
                  sx={{
                    pb: "10px",
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  {sendOtp ? "Sign UP" : "Send OTP"}
                </CustomeButton>
              </Box>

              {/* </NextLink> */}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PhoneForm;
