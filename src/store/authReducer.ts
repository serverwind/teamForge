import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  error: false,
  regSuccess: false,
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
      if (state.users.find((user) => user.login === login && user.password === password)) {
        state.isAuth = true;
        state.error = false;
      } else {
        state.error = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },
    register: (state, action) => {
      const { login, password, name } = action.payload;
      if (state.users.find((user) => user.login === login)) {
        state.error = true;
      } else {
        state.users.push({ id: state.users.length + 1, login, password, name });
        state.isAuth = true;
        state.error = false;
        state.regSuccess = true;
      }
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
