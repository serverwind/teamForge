import { teamsLogos } from "../assets/teamsLogos";
import { createSlice } from "@reduxjs/toolkit";

interface Team {
  id: number;
  name: string;
  division: string;
  conference: string;
  year: string;
  logo: string;
}

interface TeamsState {
  teams: Team[];
  filteredTeams: Team[];
  searched: boolean;
  itemsPerPage: number;
  page: 1;
}

const initialState: TeamsState = {
  teams: [
    { id: 1, name: "Portland trail blazers", division: "North", conference: "Eastern", year: "1970", logo: teamsLogos.team1 },
    { id: 2, name: "Denver Nuggets", division: "South", conference: "Western", year: "1976", logo: teamsLogos.team2 },
    { id: 3, name: "Minesota Timberwolves", division: "East", conference: "Central", year: "1989", logo: teamsLogos.team3 },
    { id: 4, name: "Memphis Grizzlies", division: "West", conference: "Eastern", year: "1995", logo: teamsLogos.team4 },
    { id: 5, name: "Oklahoma City Thunder", division: "North", conference: "Western", year: "1967", logo: teamsLogos.team5 },
    { id: 6, name: "Philadelphia 76ers", division: "South", conference: "Central", year: "1949", logo: teamsLogos.team6 },
    { id: 7, name: "Boston Celtics", division: "East", conference: "Eastern", year: "1946", logo: teamsLogos.team7 },
    { id: 8, name: "Chicago Bulls", division: "North", conference: "Central", year: "1966", logo: teamsLogos.team8 },
    { id: 9, name: "Atlanta Hawks", division: "South", conference: "Eastern", year: "1958", logo: teamsLogos.team9 },
    { id: 10, name: "Miami Heat", division: "South", conference: "Eastern", year: "1988", logo: teamsLogos.team10 },
    { id: 11, name: "Toronto Raptors", division: "West", conference: "Central", year: "1995", logo: teamsLogos.team11 },
    { id: 12, name: "Milwaukee Bucks", division: "North", conference: "Central", year: "1968", logo: teamsLogos.team12 },
    { id: 13, name: "Dallas Mavericks", division: "East", conference: "Western", year: "1980", logo: teamsLogos.team13 },
  ],
  filteredTeams: [],
  searched: false,
  itemsPerPage: 6,
  page: 1,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    searchTeams: (state, action) => {
      const query = action.payload.toLowerCase();
      if (query.length >= 3) {
        state.filteredTeams = state.teams.filter((team) => team.name.toLowerCase().includes(query));
        state.searched = true;
      } else {
        state.filteredTeams = [...state.teams];
        state.searched = false;
      }
    },
  },
});

export const { searchTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
