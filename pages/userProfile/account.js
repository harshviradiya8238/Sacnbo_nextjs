import React, { useState } from "react";
import { Grid, Box, Button, IconButton } from "@mui/material";
import Link from "next/link";
import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LaunchIcon from "@mui/icons-material/Launch";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CustomeButton from "../../src/components/forms/button/CustomeButton";

function Account() {
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
                boxShadow:
                  " 4px 2px 16px 0px rgba(95, 157, 231, 0.48), -4px -2px 16px 0px #FFF",
                borderRadius: "20px",
              }}
            >
              <Box style={{ marginBottom: "15px" }}>
                <CustomFormLabel>Account SID</CustomFormLabel>
                <CustomTextField
                  fullWidth
                  defaultValue="AC709b7aa8f92f9ca96c0a726e336825ac"
                  disabled
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box>
                  <CustomFormLabel>Auth Token</CustomFormLabel>
                  <Box style={{ display: "flex" }}>
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      defaultValue="498817d5ee03730b408f44a9b2116ec5"
                      type={showPassword ? "text" : "password"}
                    />
                  </Box>
                  <Button onClick={handleClickShowPassword}>show</Button>
                </Box>
              </Box>
              <Box
                style={{
                  marginBottom: "15px",
                  fontSize: "15px",
                }}
              >
                <ReportProblemIcon style={{ marginRight: "5px" }} />
                <span>
                  Always store your token securely to protect your account.
                </span>
                <Button> Learn more</Button>
              </Box>
              <Box style={{ marginBottom: "15px", fontSize: "15px" }}>
                <span>
                  You are on a trial account. You can only send messages and
                  make calls to
                  <Button>verified phone numbers.</Button>Learn more about your
                  <Button>
                    trial account <LaunchIcon />
                  </Button>
                </span>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Link href="/userProfile/address">
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
                  next
                </CustomeButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
Account.layout = "Blank";

export default Account;
