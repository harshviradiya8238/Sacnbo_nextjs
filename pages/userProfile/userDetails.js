import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

import GoogleIcon from "@mui/icons-material/Google";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LaunchIcon from "@mui/icons-material/Launch";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import img1 from "../../assets/images/backgrounds/scanbosecond.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneForm from "../forms/phone-form";
import CustomeButton from "../../src/components/forms/button/CustomeButton";

function UserDetails() {
  return (
    <div>
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
          sm={8}
          lg={6}
          display="flex"
          alignItems="center"
          sx={{ height: "90vh" }}
        >
          {/* <Grid container display="flex" justifyContent="center"> */}
          <Grid item xs={12} lg={12} xl={12}>
            <Box
              sx={{
                p: 4,
                boxShadow:
                  " 4px 2px 16px 0px rgba(95, 157, 231, 0.48), -4px -2px 16px 0px #FFF",
                borderRadius: "20px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6} xl={6}>
                  <Box>
                    <h2>User Settings</h2>
                    <Box className="avtar"></Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                  <Box>eqwewqewq</Box>
                </Grid>
              </Grid>

              {/* <Box>
                <h4>upgrade Account</h4>
                <h2>Main Address</h2>
                <span>
                  This information will be used for taxation purposes. For US
                  customers, this is your service address. For international
                  customers, this is your permanent place of establishment (e.g.
                  head office.)
                </span>
              </Box>

              <Box style={{ marginBottom: "15px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={12} xl={12}>
                    <Box>
                      <CustomFormLabel>Country</CustomFormLabel>
                      <CustomTextField
                        variant="outlined"
                        fullWidth
                        // disabled
                        // style={{background:"none"}}
                        // label="AC709b7aa8f92f9ca96c0a726e336825ac"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6} xl={6}>
                    <Box>
                      <CustomFormLabel>Address1</CustomFormLabel>
                      <Box style={{ display: "flex" }}>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          //   defaultValue="498817d5ee03730b408f44a9b2116ec5"
                          //   type={showPassword ? "text" : "password"}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6} xl={6}>
                    <Box>
                      <CustomFormLabel>Address 2</CustomFormLabel>
                      <Box style={{ display: "flex" }}>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          //   defaultValue="498817d5ee03730b408f44a9b2116ec5"
                          //   type={showPassword ? "text" : "password"}
                        />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={4} xl={4}>
                    <Box>
                      <CustomFormLabel>City</CustomFormLabel>
                      <CustomTextField
                        variant="outlined"
                        fullWidth
                        // disabled
                        // style={{background:"none"}}
                        // label="AC709b7aa8f92f9ca96c0a726e336825ac"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              // onClick={handleClickShowPassword}
                              // onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              adasdad
                              <ContentCopyIcon style={{ color: "red" }} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={4} xl={4}>
                    <Box>
                      <CustomFormLabel>Province</CustomFormLabel>
                      <Box style={{ display: "flex" }}>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          //   defaultValue="498817d5ee03730b408f44a9b2116ec5"
                          //   type={showPassword ? "text" : "password"}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4}>
                    <Box>
                      <CustomFormLabel>Postal code</CustomFormLabel>
                      <Box style={{ display: "flex" }}>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          //   defaultValue="498817d5ee03730b408f44a9b2116ec5"
                          //   type={showPassword ? "text" : "password"}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box> */}
              <CustomeButton
                color="secondary"
                variant="contained"
                type="submit"
                style={{ background: "#6f31f7" }}
                sx={{
                  pb: "10px",
                  width: "50%",
                  margin: "auto",
                  display: "flex",
                }}
              >
                Continue
              </CustomeButton>
            </Box>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
UserDetails.layout = "Blank";

export default UserDetails;
