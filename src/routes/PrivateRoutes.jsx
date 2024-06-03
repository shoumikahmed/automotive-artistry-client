import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <span className="loading loading-dots loading-md"></span>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
}
