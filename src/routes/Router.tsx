import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { AddTeam } from "../pages/AddTeam/AddTeam";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PrivateRoute><Teams /></PrivateRoute>} /> */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-team" element={<AddTeam />} />
      </Routes>
    </BrowserRouter>
  );
};
