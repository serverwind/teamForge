import { createSlice } from "@reduxjs/toolkit";

// After all done, change isAuth to false and user to null.

const initialState = {
  isAuth: false,
  error: false,
  regSuccess: false,
  user: {},
  users: [
    {
      id: 1,
      login: "admin",
      password: "123456",
      name: "Admin",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { login, password } = action.payload;
      const user = state.users.find((user) => user.login === login && user.password === password);
      if (user) {
        state.isAuth = true;
        state.error = false;
        state.regSuccess = false;
        state.user = user;
      } else {
        state.error = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.error = false;
      state.regSuccess = false;
    },
    register: (state, action) => {
      const { login, password, name } = action.payload;
      if (state.users.find((user) => user.login === login)) {
        state.error = true;
      } else {
        state.users.push({ id: state.users.length + 1, login, password, name });
        state.error = false;
        state.isAuth = true;
        state.regSuccess = true;
      }
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
