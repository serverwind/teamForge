import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { AddTeam } from "../pages/AddTeam/AddTeam";
import { AddPlayer } from "../pages/AddPlayer/AddPlayer";
import { TeamsContainer } from "../containers/TeamsContainer";
import { PlayersContainer } from "../containers/PlayersContainer";
import { Team } from "../pages/Team/Team";
import { Player } from "../pages/Player/Player";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><TeamsContainer /></PrivateRoute>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-team" element={<AddTeam />} />
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/players" element={<PlayersContainer />} />
        <Route path="/team/:id" element={<Team />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
