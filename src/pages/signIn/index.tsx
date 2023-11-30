import { TextAction } from "../../components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import { useState } from "react";
// @ts-ignore
const LogIn = ({ handleRequestId }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber);

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

        <PhoneInput
          country={"in"}
          enableSearch={true}
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber("+" + phone)}
          placeholder="Phone number"
          inputProps={{
            required: true,
            style: {
              width: "100%",
            },
          }}
        />
        <TextAction
          onClick={() => handleRequestId(phoneNumber)}
          disabled={!(phoneNumber.length > 10)}
          sx={{ marginTop: "16px" }}
        >
          Sign In
        </TextAction>
      </div>
    </div>
  );
};

export default LogIn;
