import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppProvider";
import useLocalStorage from "./hooks/useLocalStorage";

export const RequireAuth = ({ children }: any) => {
  const { initState } = useAppContext();
  const [token, setToken] = useLocalStorage("token", null);
  
  if (!initState?.login.token && !token) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
