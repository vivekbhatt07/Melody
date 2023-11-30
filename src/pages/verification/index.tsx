import { useState } from "react";
import { Link, TextField } from "@mui/material";
import { TextAction } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

const Verification = ({
  handleOTP,
}: {
  handleOTP: { phoneNumber: string; requestId: string; otp: string };
}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [otp, setOtp] = useState<string>("");
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
          OTP Verification
        </h1>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "14px",
            fontWeight: 400,
            color: "#101920",
            marginBottom: "15px",
          }}
        >
          We have sent and OTP to +919889898989. Please enter the code received
          to verify.
        </p>

        <TextField
          variant="outlined"
          label="OTP"
          sx={{ marginBottom: "15px" }}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="number"
        />

        <TextAction
          // @ts-ignore
          onClick={() => handleOTP(state.phoneNumber, state.requestId, otp)}
          disabled={!(otp.length === 4)}
        >
          Verify
        </TextAction>
        <div className="flex flex-col gap-4 items-center">
          <Link color="#101920" sx={{ cursor: "pointer" }}>
            Resend OTP
          </Link>
          <Link
            color="#101920"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Use another number
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verification;
