import React, { useState } from "react";
import { Grid, Box, Typography, Button, IconButton } from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import InputAdornment from "@mui/material/InputAdornment";

import CustomeButton from "../../src/components/forms/button/CustomeButton";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomCheckbox from "../../src/components/forms/custom-elements/CustomCheckbox";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Payment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        sm={8}
        lg={6}
        display="flex"
        alignItems="center"
        sx={{ height: "100vh" }}
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
            <Box>
              <h4>upgrade Account</h4>
              <h2>Fund Your Account</h2>

              <Grid container spacing={0}>
                <Grid item xs={12} lg={8} xl={8}>
                  <Box>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Payment" {...a11yProps(0)} />
                        <Tab label="Promo Code" {...a11yProps(1)} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                      <Box>
                        <h5>
                          How much would you like to start your account balance
                          with?
                        </h5>
                        <Box>
                          <CustomFormLabel>Amount</CustomFormLabel>
                          <CustomTextField
                            variant="outlined"
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                  >
                                    <AttachMoneyIcon />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <span>Enter an amount between $20 and $2,000</span>
                        <h5>
                          Would you like to set up automatic recharge to keep
                          your account balance topped up?
                        </h5>
                        <CustomCheckbox
                          //   checked={checked}
                          //   onChange={handleChange}
                          inputprops={{ "aria-label": "primary checkbox" }}
                        />
                        <span>Yes, enable auto recharge</span>
                      </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      Item Two
                    </CustomTabPanel>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  xl={4}
                  p={0}
                  sx={{
                    // border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                    }}
                  >
                    <h4>Main Address</h4>
                    <span>13303 Central Ave</span>
                    <span>Surrey</span>
                    <span>BC V3T OK6</span>
                    <span>ca</span>
                    <Button>Edit</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
  );
}
Payment.layout = "Blank";

export default Payment;
