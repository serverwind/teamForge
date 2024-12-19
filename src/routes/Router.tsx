import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Teams } from '../pages/Teams/Teams';
import { SignIn } from '../pages/SignIn/SignIn';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PrivateRoute><Teams /></PrivateRoute>} /> */}
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
