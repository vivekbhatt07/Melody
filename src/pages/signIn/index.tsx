import { TextField } from "@mui/material";
import { TextAction } from "../../components";

import { useState } from "react";
// @ts-ignore
const LogIn = ({ handleRequestId }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col max-w-[414px] m-auto gap-[10px]">
        <h1
          style={{
            fontSize: "38px",
            lineHeight: "44.5px",
            fontWeight: 500,
            color: "#552583",
          }}
        >
          Sign In
        </h1>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "14px",
            fontWeight: 400,
            color: "#101920",
          }}
        >
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <TextField
          variant="outlined"
          label="Phone Number"
          sx={{ marginBottom: "15px" }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextAction
          onClick={() => handleRequestId(phoneNumber)}
          disabled={!(phoneNumber.length > 10)}
        >
          Sign In
        </TextAction>
      </div>
    </div>
  );
};

export default LogIn;
