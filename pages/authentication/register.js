import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import NextLink from "next/link";

import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import MicrosoftIcon from "@mui/icons-material/Microsoft";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";

import img1 from "../../assets/images/backgrounds/scanbosecond.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";

import { GoogleLogin } from "react-google-login";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
// import { register } from "../../src/store/auth/Action";
import EmailForm from "../forms/email-form";
import { useState } from "react";
import PhoneForm from "../forms/phone-form";
import CustomeButton from "../../src/components/forms/button/CustomeButton";
// import { gapi } from "gapi-script";

const useStyles = makeStyles({
  google_button: {
    height: "50px",
    boxShadow:
      "4px 2px 8px 0px rgba(95, 157, 231, 0.48) inset, -4px -2px 8px 0px #FFF inset !important",
    // borderRadius: "20px !important",
    borderRadius: "10px !important",
    justifyContent: "center !important",
    background: "#E5EDF5 !important",
    width: "100% !important",
    // border: "none !important",
    fontSize: "20px !important",
    padding: "15px !important",
    "& div ": {
      background: "none !important",
    },
    "& span ": {
      color: "#13152a !important",
      margin: 0,
      fontWeight: "500 !important",
      fontSize: "0.875rem",
      lineHeight: 1.5,
      fontFamily: 'DM Sans,"sans-serif !important',
      color: "#13152a !important",
      marginLeft: "8px !important",
      fontSize: "17px !important",
    },
  },
});

const Register = () => {
  const classes = useStyles();

  // useEffect(async () => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   // await gapi.load("client:auth2", start);
  // }, [0]);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const handlePhoneFormopen = () => {
    setIsPhone(true);
  };

  const handleEmailFormopen = () => {
    setIsEmail(true);
  };
  const clientId =
    "1092938854409-irtfusioh66v37rjuc8ksdlv0hattb57.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        background: (theme) =>
          `${theme.palette.mode === "dark" ? "#1c1f25" : ""}`,
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
            display="flex"
            alignItems="center"
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
        sx={{
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#E5EDF5"}`,
        }}
      >
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography fontWeight="700" variant="h1">
                Welcome to Dequity
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="400"
                  sx={{
                    mr: 1,
                  }}
                >
                  Already have an Account?
                </Typography>
                <NextLink href="/authentication/login">
                  <Typography
                    fontWeight="500"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </Typography>
                </NextLink>
              </Box>
              {isEmail ? (
                <>
                  <EmailForm />
                </>
              ) : isPhone ? (
                <>
                  <PhoneForm />
                </>
              ) : (
                <Box style={{ marginTop: "50px" }}>
                  <Box>
                    <Button
                      variant="outlined"
                      size="large"
                      display="flex"
                      alignitems="center"
                      onClick={handlePhoneFormopen}
                      justifycontent="center"
                      sx={{
                        width: "100%",

                        height: "60px",
                        borderRadius: "10px",
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
                            fontSize: "17px",
                            color: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? theme.palette.grey.A200
                                  : "#13152a"
                              }`,
                          }}
                        >
                          Sign Up with Mobile
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      size="large"
                      display="flex"
                      alignitems="center"
                      justifycontent="center"
                      onClick={handleEmailFormopen}
                      sx={{
                        width: "100%",
                        height: "60px",
                        borderRadius: "10px",
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
                            fontSize: "17px",

                            color: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? theme.palette.grey.A200
                                  : "#13152a"
                              }`,
                          }}
                        >
                          Sign Up with Email
                        </Typography>
                      </Box>
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      mt: "20px",
                      mb: "20px",
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
                  <Box>
                    {/* <Button
                      variant="outlined"
                      size="large"
                      display="flex"
                      alignitems="center"
                      justifycontent="center"
                      onClick={handleGoogleSignIn}
                      sx={{
                        width: "100%",
                        height: "60px",
                        borderRadius: "10px",
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
                            fontSize: "17px",
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
                    </Button> */}

                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Login"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      className={classes.google_button}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    />
                  </Box>
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
                        borderRadius: "10px",
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
                        <WindowIcon
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
                          Microsoft
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
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
                        borderRadius: "10px",
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
                        <AppleIcon
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
                          Apple
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
Register.layout = "Blank";
export default Register;
