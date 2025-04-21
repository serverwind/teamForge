import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuth
  )

  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
