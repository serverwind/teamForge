import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
