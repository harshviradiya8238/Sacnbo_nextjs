import React from "react";
import { Button } from "@mui/material";

function CustomAuthButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      style={{
        height: "70px",
        width: "70px",
        boxShadow:
          "2.6470587253570557px 1.3235293626785278px 10.588234901428223px 0px rgba(95, 157, 231, 0.48), -2.6470587253570557px -1.3235293626785278px 10.588234901428223px 0px #FFF",
        backgroundColor: "#E5EDF5",
        borderRadius: "50%",
        padding: "10px 10px",
        cursor: "pointer",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Button>
  );
}

export default CustomAuthButton;
