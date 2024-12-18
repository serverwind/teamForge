import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Teams } from '../pages/Teams/Teams';
import { SignUp } from '../pages/SignUp/SignUp';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Teams /></PrivateRoute>} />
        <Route path="/sign-up" element={<PublicRoute><SignUp /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
