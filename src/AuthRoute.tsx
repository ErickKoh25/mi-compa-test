import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectGeneral } from "./redux/store";

export const RequireAuth = ({ children }: any) => {
  const { login:{token} } = useSelector(selectGeneral);
  if (!token) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
