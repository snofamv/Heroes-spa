import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router";

export const PrivateRouter = ({ children }: any): JSX.Element => {
  const { pathname, search } = useLocation();
  const {
    state: { logged },
  } = useContext(AuthContext);
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  return logged ? children : <Navigate to={"/login"} />;
};
