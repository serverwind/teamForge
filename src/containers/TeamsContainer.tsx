import { useSelector } from "react-redux";
import { Teams } from "../pages/Teams/Teams";
import { RootState } from "@reduxjs/toolkit/query";

export const TeamsContainer = () => {
  const teams = useSelector((state: RootState) => state.teams.teams);

  return <Teams teams={teams} />;
};
