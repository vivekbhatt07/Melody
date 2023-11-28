import { Link, TextField } from "@mui/material";
import { TextAction } from "../../components";

const Verification = () => {
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
        />

        <TextAction>Verify</TextAction>
        <div className="flex flex-col gap-4 items-center">
          <Link color="#101920">Resend OTP</Link>
          <Link color="#101920">Use another number</Link>
        </div>
      </div>
    </div>
  );
};

export default Verification;
