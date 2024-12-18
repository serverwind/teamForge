import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Teams } from '../pages/Teams/Teams';
import { SignUp } from '../pages/SignUp/SignUp';
import { SignIn } from '../pages/SignIn/SignIn';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Teams /></PrivateRoute>} />
        <Route path="/sign-up" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/sign-in" element={<PublicRoute><SignIn /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
