import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.user);

  const user = auth?.currentUser;
  const loading = auth?.loading;

  if (loading) {
    return <div className="text-center text-4xl py-10">Checking authentication...</div>;
  }

  return user && user.userType === "Admin" ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
