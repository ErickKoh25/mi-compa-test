import { Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppProvider";

export const RequireAuth = ({ children }: any) => {
  const { initState } = useAppContext();
  console.log(initState)
  if (!initState?.login.token) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
