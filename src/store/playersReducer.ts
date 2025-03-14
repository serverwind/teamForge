import { createSlice } from "@reduxjs/toolkit";
import { playersLogos } from "../assets/playersPhotos";

interface Player {
  id: number;
  name: string;
  teamId: number;
  position: string;
  height: string;
  weight: string;
  number: string;
  photo: string;
  age: string;
}

interface PlayersState {
  players: Player[];
  filteredPlayers: Player[];
  searched: boolean;
  itemsPerPage: number;
  page: 1;
}

const initialState: PlayersState = {
  players: [
    { id: 1, name: "Scoot Henderson", teamId: 1, position: "Guard", height: "6-3", weight: "206", number: "00", age: "32", photo: playersLogos.p1 },
    { id: 2, name: "Anfernee Simons", teamId: 1, position: "Guard", height: "6-3", weight: "200", number: "1", age: "22", photo: playersLogos.p2 },
    { id: 3, name: "Deandre Ayton", teamId: 1, position: "Center", height: "7-0", weight: "252", number: "2", age: "20", photo: playersLogos.p3 },
    { id: 4, name: "Matisse Thybulle", teamId: 1, position: "Guard-Forward", height: "6-5", weight: "201", number: "4", age: "23", photo: playersLogos.p4 },
    { id: 5, name: "Dalano Banton", teamId: 1, position: "Guard", height: "6-8", weight: "203", number: "5", age: "24", photo: playersLogos.p5 },
    { id: 6, name: "Deni Avdija", teamId: 1, position: "Forward", height: "6-9", weight: "240", number: "8", age: "21", photo: playersLogos.p6 },
  ],
  filteredPlayers: [],
  searched: false,
  itemsPerPage: 6,
  page: 1,
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    searchPlayers: (state, action) => {
      const query = action.payload.toLowerCase();
      if (query.length >= 3) {
        state.filteredPlayers = state.players.filter((player) => player.name.toLowerCase().includes(query));
        state.searched = true;
      } else {
        state.filteredPlayers = [...state.players];
        state.searched = false;
      }
    },
  },
});

export const { searchPlayers } = playersSlice.actions;
export default playersSlice.reducer;
