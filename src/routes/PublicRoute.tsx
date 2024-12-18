import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
