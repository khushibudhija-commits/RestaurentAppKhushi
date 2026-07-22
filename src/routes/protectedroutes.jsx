import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/customerlogin";

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("customerToken");

   console.log(isAuthenticated, 'isAuthenticated')
  if (!isAuthenticated) {
    return <Navigate to="/customerlogin"
     state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;