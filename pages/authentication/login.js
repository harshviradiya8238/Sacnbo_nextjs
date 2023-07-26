import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

import GoogleIcon from "@mui/icons-material/Google";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import InputAdornment from "@mui/material/InputAdornment";

import img1 from "../../assets/images/backgrounds/scanbosecond.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneForm from "../forms/phone-form";
import CustomeButton from "../../src/components/forms/button/CustomeButton";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
  otp: Yup.string().required("OTP is required"),
});

const Login = () => {
  const [signupMethod, setSignupMethod] = useState("email");
  const handleSignupPhone = () => {
    setSignupMethod("phone");
  };
  const handleSignupEmail = () => {
    setSignupMethod("email");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        // height: "fit-content",
        background: (theme) =>
          `${theme.palette.mode === "dark" ? "#1c1f25" : "#E5EDF5"}`,
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#E5EDF5"}`,
          // height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: "relative",
                lg: "absolute",
              },
              height: { xs: "auto", lg: "100vh" },
              right: { xs: "auto", lg: "-50px" },
              margin: "0 auto",
            }}
          >
            <Image src={img1} alt="bg" maxWidth="812" />
          </Box>

          <Box
            sx={{
              p: 4,
              position: "absolute",
              top: "0",
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        lg={6}
        display="flex"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography fontWeight="700" variant="h2">
                Welcome to Dequity
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  New to Dequity?
                </Typography>
                <NextLink href="/authentication/register">
                  <Typography
                    fontWeight="500"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Create an account
                  </Typography>
                </NextLink>
              </Box>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  phone: "",
                  otp: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
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
                      {signupMethod === "email" && (
                        <>
                          <CustomFormLabel htmlFor="email">
                            Email
                          </CustomFormLabel>
                          <CustomTextField
                            id="email"
                            variant="outlined"
                            fullWidth
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // error={touched.email && errors.email}
                            name="email"
                          />
                          {/* {errors.email && touched.email ? (
                            <div style={{ color: "red" }}>{errors.email}</div>
                          ) : null} */}
                          <CustomFormLabel htmlFor="password">
                            Password
                          </CustomFormLabel>
                          <CustomTextField
                            id="password"
                            variant="outlined"
                            name="password"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            fullWidth
                            // type={showPassword ? "text" : "password"}
                            // error={touched.password && errors.password}
                            sx={{
                              pb: "15px",
                            }}
                            // endAdornment={
                            //   <InputAdornment position="end">
                            //     <IconButton
                            //       aria-label="toggle password visibility"
                            //       onClick={handleClickShowPassword}
                            //       onMouseDown={handleMouseDownPassword}
                            //       edge="end"
                            //     >
                            //       {showPassword ? (
                            //         <VisibilityOff />
                            //       ) : (
                            //         <Visibility />
                            //       )}
                            //     </IconButton>
                            //   </InputAdornment>
                            // }
                          />
                          {/* {errors.password && touched.password ? (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                              {errors.password}
                            </div>
                          ) : null} */}
                        </>
                      )}
                      {
                        signupMethod === "phone" && <PhoneForm />
                        // <>
                        //   <CustomFormLabel htmlFor="phone">
                        //     Phone
                        //   </CustomFormLabel>
                        //   <CustomTextField
                        //     id="phone"
                        //     variant="outlined"
                        //     fullWidth
                        //     onBlur={handleBlur}
                        //     onChange={handleChange}
                        //     name="phone"
                        //     error={touched.phone && errors.phone}
                        //   />
                        //   {errors.phone && touched.phone ? (
                        //     <div style={{ color: "red" }}>{errors.phone}</div>
                        //   ) : null}
                        //   <CustomFormLabel htmlFor="otp">OTP</CustomFormLabel>
                        //   <CustomTextField
                        //     id="otp"
                        //     variant="outlined"
                        //     name="otp"
                        //     onBlur={handleBlur}
                        //     onChange={handleChange}
                        //     error={touched.otp && errors.otp}
                        //     fullWidth
                        //     sx={{
                        //       pb: "15px",
                        //     }}
                        //   />
                        //   {errors.otp && touched.otp ? (
                        //     <div style={{ color: "red" }}>{errors.otp}</div>
                        //   ) : null}
                        // </>
                      }

                      {/* <NextLink href="/"> */}
                      {signupMethod === "email" && (
                        <CustomeButton
                          color="secondary"
                          variant="contained"
                          size="large"
                          type="submit"
                          // style={{ background: "#6f31f7" }}
                          fullWidth
                          sx={{
                            pb: "10px",
                            width: "50%",
                            margin: "auto",
                            display: "flex",
                          }}
                        >
                          Log In
                        </CustomeButton>
                      )}

                      {/* </NextLink> */}

                      <Box
                        sx={{
                          position: "relative",
                          textAlign: "center",
                          mt: "10px",
                          mb: "10px",
                          "&::before": {
                            content: '""',
                            background: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? "#42464d"
                                  : "#ecf0f2"
                              }`,
                            height: "1px",
                            width: "100%",
                            position: "absolute",
                            left: "0",
                            top: "13px",
                          },
                        }}
                      >
                        <Typography
                          component="span"
                          color="textSecondary"
                          variant="h6"
                          fontWeight="400"
                          sx={{
                            position: "relative",
                            padding: "0 12px",

                            background: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? "#282c34"
                                  : "#E5EDF5"
                              }`,
                          }}
                        >
                          or sign in with
                        </Typography>
                      </Box>

                      {signupMethod === "email" && (
                        <Box>
                          <Button
                            variant="outlined"
                            size="large"
                            display="flex"
                            alignitems="center"
                            justifycontent="center"
                            onClick={handleSignupPhone}
                            sx={{
                              width: "100%",
                              height: "60px",
                              borderRadius: "20px",
                              boxShadow:
                                "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset",
                              borderColor: (theme) =>
                                `${
                                  theme.palette.mode === "dark"
                                    ? "#42464d"
                                    : "#dde3e8"
                                }`,
                              borderWidth: "2px",
                              textAlign: "center",
                              mt: 2,
                              pt: "10px",
                              pb: "10px",
                              "&:hover": {
                                borderColor: (theme) =>
                                  `${
                                    theme.palette.mode === "dark"
                                      ? "#42464d"
                                      : "#dde3e8"
                                  }`,
                                borderWidth: "2px",
                              },
                            }}
                          >
                            <Box display="flex" alignItems="center">
                              <PhoneIphoneIcon
                                sx={{
                                  color: (theme) => theme.palette.error.main,
                                }}
                              />
                              <Typography
                                variant="h6"
                                sx={{
                                  ml: 1,
                                  color: (theme) =>
                                    `${
                                      theme.palette.mode === "dark"
                                        ? theme.palette.grey.A200
                                        : "#13152a"
                                    }`,
                                }}
                              >
                                Phone
                              </Typography>
                            </Box>
                          </Button>
                        </Box>
                      )}
                      {signupMethod === "phone" && (
                        <Box>
                          <Button
                            variant="outlined"
                            size="large"
                            display="flex"
                            alignitems="center"
                            justifycontent="center"
                            onClick={handleSignupEmail}
                            sx={{
                              width: "100%",
                              height: "60px",
                              borderRadius: "20px",
                              boxShadow:
                                "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset",
                              borderColor: (theme) =>
                                `${
                                  theme.palette.mode === "dark"
                                    ? "#42464d"
                                    : "#dde3e8"
                                }`,
                              borderWidth: "2px",
                              textAlign: "center",
                              mt: 2,
                              pt: "10px",
                              pb: "10px",
                              "&:hover": {
                                borderColor: (theme) =>
                                  `${
                                    theme.palette.mode === "dark"
                                      ? "#42464d"
                                      : "#dde3e8"
                                  }`,
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
                                  color: (theme) =>
                                    `${
                                      theme.palette.mode === "dark"
                                        ? theme.palette.grey.A200
                                        : "#13152a"
                                    }`,
                                }}
                              >
                                Email
                              </Typography>
                            </Box>
                          </Button>
                        </Box>
                      )}

                      <Box>
                        <Button
                          variant="outlined"
                          size="large"
                          display="flex"
                          alignitems="center"
                          justifycontent="center"
                          sx={{
                            width: "100%",
                            height: "60px",
                            borderRadius: "20px",
                            boxShadow:
                              "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset",
                            borderColor: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? "#42464d"
                                  : "#dde3e8"
                              }`,
                            borderWidth: "2px",
                            textAlign: "center",
                            mt: 2,
                            pt: "10px",
                            pb: "10px",
                            "&:hover": {
                              borderColor: (theme) =>
                                `${
                                  theme.palette.mode === "dark"
                                    ? "#42464d"
                                    : "#dde3e8"
                                }`,
                              borderWidth: "2px",
                            },
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <GoogleIcon
                              sx={{
                                color: (theme) => theme.palette.error.main,
                              }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                ml: 1,
                                color: (theme) =>
                                  `${
                                    theme.palette.mode === "dark"
                                      ? theme.palette.grey.A200
                                      : "#13152a"
                                  }`,
                              }}
                            >
                              Google
                            </Typography>
                          </Box>
                        </Button>
                      </Box>

                      {/* <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} lg={6}>
                        <Button
                          variant="outlined"
                          size="large"
                          display="flex"
                          alignitems="center"
                          justifycontent="center"
                          sx={{
                            width: "100%",
                            borderColor: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? "#42464d"
                                  : "#dde3e8"
                              }`,
                            borderWidth: "2px",
                            textAlign: "center",
                            mt: 2,
                            pt: "10px",
                            pb: "10px",
                            "&:hover": {
                              borderColor: (theme) =>
                                `${
                                  theme.palette.mode === "dark"
                                    ? "#42464d"
                                    : "#dde3e8"
                                }`,
                              borderWidth: "2px",
                            },
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <FacebookIcon
                              sx={{
                                color: (theme) => theme.palette.secondary.main,
                              }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                ml: 1,
                                color: (theme) =>
                                  `${
                                    theme.palette.mode === "dark"
                                      ? theme.palette.grey.A200
                                      : "#13152a"
                                  }`,
                              }}
                            >
                              Facebook
                            </Typography>
                          </Box>
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={6}>
                        <Button
                          variant="outlined"
                          size="large"
                          display="flex"
                          alignitems="center"
                          justifycontent="center"
                          sx={{
                            width: "100%",
                            borderColor: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? "#42464d"
                                  : "#dde3e8"
                              }`,
                            borderWidth: "2px",
                            textAlign: "center",
                            mt: 2,
                            pt: "10px",
                            pb: "10px",
                            "&:hover": {
                              borderColor: (theme) =>
                                `${
                                  theme.palette.mode === "dark"
                                    ? "#42464d"
                                    : "#dde3e8"
                                }`,
                              borderWidth: "2px",
                            },
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <TwitterIcon
                              sx={{
                                color: (theme) => theme.palette.primary.main,
                              }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                ml: 1,
                                color: (theme) =>
                                  `${
                                    theme.palette.mode === "dark"
                                      ? theme.palette.grey.A200
                                      : "#13152a"
                                  }`,
                              }}
                            >
                              Twitter
                            </Typography>
                          </Box>
                        </Button>
                      </Grid>
                    </Grid>  */}
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
Login.layout = "Blank";
export default Login;
