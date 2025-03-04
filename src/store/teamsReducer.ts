interface Team {
  id: number;
  name: string;
  division: string;
  conference: string;
  year: string;
  logo: string;
}

interface TeamsState {
  teams: Team[]
}

const initialState: TeamsState = {
  teams: [
    { id: 1, name: "Tigers", division: "North", conference: "Eastern", year: "1995", logo: "" },
    { id: 2, name: "Eagles", division: "South", conference: "Western", year: "1988", logo: "" },
    { id: 3, name: "Bears", division: "East", conference: "Central", year: "2001", logo: "" },
    { id: 4, name: "Wolves", division: "West", conference: "Eastern", year: "1990", logo: "" },
    { id: 5, name: "Sharks", division: "North", conference: "Western", year: "2010", logo: "" },
    { id: 6, name: "Hawks", division: "South", conference: "Central", year: "1975", logo: "" },
    { id: 7, name: "Lions", division: "East", conference: "Eastern", year: "2005", logo: "" },
    { id: 8, name: "Panthers", division: "West", conference: "Western", year: "1998", logo: "" },
    { id: 9, name: "Dragons", division: "North", conference: "Central", year: "1980", logo: "" },
    { id: 10, name: "Falcons", division: "South", conference: "Eastern", year: "2015", logo: "" },
  ],
};

export const teamsReducer = (state = initialState, action: { type: string; }) => {
  switch (action.type) {
    default:
      return state;
  }
};
