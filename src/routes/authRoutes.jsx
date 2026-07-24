import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoutes = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("customerToken");

   console.log(isAuthenticated, 'isAuthenticated')
  if (isAuthenticated) {
    return <Navigate to="/home"
     state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthRoutes;