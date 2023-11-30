import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard, SignIn, Verification } from "./pages";
import PrivateRoute from "./auth/PrivateRoute";
import { getOTP, getRequestId } from "./apiResponse";
import { useState } from "react";
import PublicRoute from "./auth/PublicRoute";
import { Toaster } from "react-hot-toast";
import { toastHandler } from "./utils";

const App = () => {
  const [requestId, setRequestId] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const navigate = useNavigate();
  const handleRequestId = async (phoneNumber: string) => {
    try {
      const response = await getRequestId({ phoneNumber });
      console.log(response);
      if (response.status === 200) {
        setRequestId(response.data.requestId);
        navigate("/verification", {
          state: { requestId: response.data.requestId, phoneNumber },
        });
        toastHandler("success", response.data.message);
      }
    } catch (error) {
      toastHandler("error", "Invalid Number");
    }
  };

  const logOutHandler = () => {
    setRequestId("");
    setToken("");
    toastHandler("success", "Logout Successfully");
  };

  const handleOTP = async (
    phoneNumber: string,
    requestId: string,
    otp: string
  ) => {
    try {
      const response = await getOTP({ phoneNumber, requestId, otp });
      console.log(response);
      if (response.status === 200) {
        setToken(response.data.token);
        navigate("/dashboard");
        toastHandler("success", "Successfully Login with:" + phoneNumber);
      }
    } catch (error) {
      toastHandler("error", "Wrong OTP");
    }
  };
  return (
    <div className="min-h-screen">
      <Toaster />
      <Routes>
        {/* @ts-ignore */}
        <Route
          path="/"
          element={
            <PublicRoute isVerify={Boolean(requestId)} isToken={Boolean(token)}>
              <SignIn handleRequestId={handleRequestId} />
            </PublicRoute>
          }
        />
        <Route
          path="/verification"
          element={
            <PrivateRoute isRestriction={!Boolean(requestId)}>
              {/* @ts-ignore */}
              <Verification
                // @ts-ignore
                handleOTP={handleOTP}
                setRequestId={setRequestId}
                handleRequestId={handleRequestId}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isRestriction={!Boolean(token)}>
              {/* @ts-ignore */}
              <Dashboard logOutHandler={logOutHandler} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
