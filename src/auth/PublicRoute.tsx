import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: ReactNode;
  isVerify: boolean;
  isToken: boolean;
};

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  isVerify,
  isToken,
}) => {
  return isVerify ? (
    isToken ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/verification" replace />
    )
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
