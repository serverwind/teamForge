import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { teamsSlice } from "./teamsReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    teams: teamsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
