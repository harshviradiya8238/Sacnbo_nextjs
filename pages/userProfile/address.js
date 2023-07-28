import React from "react";
import { Grid, Box, IconButton } from "@mui/material";

import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import InputAdornment from "@mui/material/InputAdornment";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import CustomeButton from "../../src/components/forms/button/CustomeButton";

function Address() {
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
                    <CustomTextField variant="outlined" fullWidth />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                  <Box>
                    <CustomFormLabel>Address1</CustomFormLabel>
                    <Box style={{ display: "flex" }}>
                      <CustomTextField fullWidth variant="outlined" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                  <Box>
                    <CustomFormLabel>Address 2</CustomFormLabel>
                    <Box style={{ display: "flex" }}>
                      <CustomTextField fullWidth variant="outlined" />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} lg={4} xl={4}>
                  <Box>
                    <CustomFormLabel>City</CustomFormLabel>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
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
                      <CustomTextField fullWidth variant="outlined" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} xl={4}>
                  <Box>
                    <CustomFormLabel>Postal code</CustomFormLabel>
                    <Box style={{ display: "flex" }}>
                      <CustomTextField fullWidth variant="outlined" />
                    </Box>
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

Address.layout = "Blank";

export default Address;
