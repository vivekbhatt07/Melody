import axios from "axios";

const getOTP = async ({
  phoneNumber,
  requestId,
  otp,
}: {
  phoneNumber: string;
  requestId: string;
  otp: string;
}) => {
  return axios.post("https://dev.api.goongoonalo.com/v1/auth/verify_otp", {
    phoneNumber,
    requestId,
    otp,
  });
};

export default getOTP;
