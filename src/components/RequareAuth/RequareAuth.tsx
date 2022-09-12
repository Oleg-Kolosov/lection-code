import { Navigate, Outlet } from "react-router-dom";

export const RequareAuth = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="sign-in" />;
};
