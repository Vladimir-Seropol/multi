import { Navigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import type { ProtectedRouteProps, FormData } from "../types/types";

const ProtectedRoute = ({ children, requiredFields }: ProtectedRouteProps) => {
  const { getValues } = useFormContext<FormData>();

  const data = getValues();
  const isAllowed = requiredFields.every((field) => {
    const value = data[field];
    
    if (Array.isArray(value)) {
      return value.length > 0 && value.every(item => item && item.trim().length > 0);
    }

    return value && String(value).trim().length > 0;
  });

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;