import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router";

export const PublicRouter = ({ children }: any): JSX.Element => {
  const {
    state: { logged },
  } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";
  return !logged ? children : <Navigate to={`${lastPath}`} />;
};
