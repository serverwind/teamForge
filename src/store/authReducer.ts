const initialState = {
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: { type: string; data: boolean }) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        // action.data,
      };
    default:
      return state;
  }
};

export function setUserDataAC(login, isAuth) {
  return { type: "SET-USER-DATA", data: { login, isAuth } };
}
