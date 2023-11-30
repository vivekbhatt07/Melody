import axios from "axios";

const getRequest = async ({ phoneNumber }: { phoneNumber: string }) => {
  return axios.post("https://dev.api.goongoonalo.com/v1/auth/login", {
    phoneNumber,
  });
};

export default getRequest;
