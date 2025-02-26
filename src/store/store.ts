import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { teamsReducer } from "./teamsReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    teams: teamsReducer,
  },
});

export default store;
