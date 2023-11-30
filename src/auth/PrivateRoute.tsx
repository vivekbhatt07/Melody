import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
  isRestriction: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isRestriction,
}) => {
  return isRestriction ? <Navigate to="/" replace /> : <>{children}</>;
};

export default PrivateRoute;
