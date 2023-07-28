import React, { useState } from "react";
import { Grid, Box, MenuItem } from "@mui/material";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import CustomeButton from "../../src/components/forms/button/CustomeButton";
import CustomSelect from "../../src/components/forms/custom-elements/CustomSelect";

function UserDetails() {
  const [age, setAge] = React.useState("1");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          marginTop: "200px",
          marginBottom: "50px",

          // height: "fit-content",
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#E5EDF5"}`,
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          lg={8}
          display="flex"
          alignItems="center"
          // sx={{ height: "100vh" }}
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
              <Grid container sx={{ borderBottom: "1px solid #8c96a0", p: 2 }}>
                <Grid item xs={12} lg={4} xl={4}>
                  <Box>
                    <h2>User Settings</h2>
                    <Box className="avtar">
                      <img
                        src="/static/images/users/avtar2.png"
                        style={{
                          p: 4,
                          maxHeight: "100%",

                          boxShadow:
                            " 4px 2px 16px 0px rgba(95, 157, 231, 0.48), -4px -2px 16px 0px #FFF",
                          borderRadius: "20px",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8} xl={8} sx={{ marginBottom: "10px" }}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box>
                          <CustomFormLabel>First Name</CustomFormLabel>
                          <CustomTextField variant="outlined" fullWidth />
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box>
                          <CustomFormLabel>Last Name </CustomFormLabel>
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
                      <CustomeButton
                        color="secondary"
                        variant="contained"
                        type="submit"
                        style={{
                          background: "#6f31f7",
                        }}
                        sx={{
                          pb: "10px",
                          width: "50%",
                          margin: "auto",
                        }}
                      >
                        Update Name
                      </CustomeButton>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box>
                          <CustomFormLabel>Email </CustomFormLabel>
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
                      <Box sx={{ display: "flex", width: "100%" }}>
                        <CustomeButton
                          color="secondary"
                          variant="contained"
                          type="submit"
                          style={{
                            background: "#6f31f7",
                          }}
                          sx={{
                            // margin: "10px",
                            width: "98%",
                            margin: "auto",
                          }}
                        >
                          Update Email Address
                        </CustomeButton>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>

              <Grid
                container
                // spacing={2}
                sx={{ borderBottom: "1px solid #8c96a0", p: 2 }}
              >
                <Grid
                  item
                  xs={12}
                  lg={4}
                  xl={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <h2>Phone Number</h2>
                    <span>
                      You will need this number to access two factor
                      authentication enabled accounts.
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8} xl={8}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "98%",
                    }}
                  >
                    <CustomeButton
                      color="secondary"
                      variant="contained"
                      type="submit"
                      style={{
                        background: "#6f31f7",
                      }}
                      sx={{
                        // pb: "10px",
                        width: "50%",
                        margin: "auto",
                      }}
                    >
                      Add Phone Number
                    </CustomeButton>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ borderBottom: "1px solid #8c96a0", p: 2 }}>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  xl={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <h2>Change Timezone</h2>
                    <span>
                      Select the timezone you would like to use to display dates
                      and times. Note that this setting does not affect API
                      responses, or the Billing section.
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8} xl={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "98%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "block", width: "100%" }}>
                      <CustomFormLabel htmlFor="demo-simple-select">
                        Select Timezone
                      </CustomFormLabel>
                      <CustomSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                      >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                      </CustomSelect>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        mt: "5px",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CustomeButton
                        color="secondary"
                        variant="contained"
                        type="submit"
                        style={{
                          background: "#6f31f7",
                        }}
                        sx={{
                          pb: "10px",
                          width: "50%",
                          margin: "auto",
                        }}
                      >
                        Add Phone Number
                      </CustomeButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ borderBottom: "1px solid #8c96a0", p: 2 }}>
                <Grid item xs={12} lg={4} xl={4}>
                  <Box>
                    <h2>Change Password</h2>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8} xl={8} sx={{ marginBottom: "10px" }}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <CustomFormLabel>Current Password</CustomFormLabel>
                          <CustomTextField
                            variant="outlined"
                            fullWidth
                            sx={{ width: "75%" }}

                            // disabled
                            // style={{background:"none"}}
                            // label="AC709b7aa8f92f9ca96c0a726e336825ac"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <CustomFormLabel>New Password</CustomFormLabel>
                          <CustomTextField
                            variant="outlined"
                            fullWidth
                            sx={{ width: "75%" }}

                            // disabled
                            // style={{background:"none"}}
                            // label="AC709b7aa8f92f9ca96c0a726e336825ac"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={12} xl={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <CustomFormLabel>Retype New Password</CustomFormLabel>
                          <CustomTextField
                            variant="outlined"
                            sx={{ width: "75%" }}
                            fullWidth
                            // disabled
                            // style={{background:"none"}}
                            // label="AC709b7aa8f92f9ca96c0a726e336825ac"
                          />
                        </Box>
                      </Grid>
                      <Box
                        sx={{
                          display: "flex",
                          mt: "5px",
                          width: "98%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CustomeButton
                          color="secondary"
                          variant="contained"
                          type="submit"
                          style={{
                            background: "#6f31f7",
                          }}
                          sx={{
                            pb: "10px",
                            width: "50%",
                            marginTop: "10px",
                            // margin: "auto",
                          }}
                        >
                          Change Password
                        </CustomeButton>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>

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
                  marginTop: "10px",
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
