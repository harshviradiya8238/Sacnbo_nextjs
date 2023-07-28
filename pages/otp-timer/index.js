import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";

const OtpTimer = ({ isOtpSent, handleResendOtp }) => {
  const [timer, setTimer] = useState(60); // Set initial timer value to 60 seconds

  useEffect(() => {
    if (isOtpSent) {
      // Exit early when the timer reaches 0
      if (timer <= 0) return;

      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clean up the interval when the component unmounts or the OTP is sent again
      return () => clearInterval(intervalId);
    } else {
      // Reset the timer if the OTP is not sent
      setTimer(60);
    }
  }, [isOtpSent, timer]);

  const handleResendClick = () => {
    handleResendOtp(); // Call the provided function to resend the OTP
    setTimer(60); // Reset the timer
  };

  return (
    <div>
      {timer === 0 ? (
        <span
          style={{
            color: "red",
            marginRight: "16px",
          }}
        >
          <Button onClick={handleResendClick}>
            {" "}
            <span
              style={{
                textDecoration: "underline",
                marginRight: "16px",
              }}
            >
              Resend OTP
            </span>
          </Button>
        </span>
      ) : (
        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <TimerIcon />
            <p style={{ color: "#777e89" }}> Time remaining: </p>
            <p style={{ color: "#7352ff", margin: "5px", fontWeight: "500" }}>
              {timer}
            </p>
            <p style={{ color: "#777e89" }}>seconds</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default OtpTimer;
